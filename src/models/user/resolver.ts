// import * as User from './services';
import { prisma, UserNode, ID_Input } from "../../generated/prisma";
import { hashSync, genSaltSync, compare } from "bcryptjs";
import { AuthenticationError, UserInputError } from "apollo-server-errors";
import { sign, verify } from "jsonwebtoken";
import * as User from "./services";

export const resolver = {
  Query: <any>{},
  Mutation: <any>{},
  User: <any>{}
};

/*
  ***** Queries *****
*/

resolver.User.companies = user => {
  return prisma.user({ id: user.id }).companies();
};

resolver.Query.currentUser = async (root, args, { user }) => {
  return user;
};

/*
  ***** Mutations *****
*/

resolver.Mutation.authenticateUser = async (_, { loginInput }) => {
  const salt = genSaltSync(10);
  const user = await User.GetUserByEmail(loginInput.email);
  if (!user) {
    throw new UserInputError(
      `No such user found for email: ${loginInput.email}`,
      {
        invalidArgs: "email"
      }
    );
  }
  const valid = await compare(loginInput.password, user.password);
  if (!valid) {
    throw new AuthenticationError("Invalid password");
  }
  return { user, token: sign(user.id, process.env.SECRET) };
};

resolver.Mutation.registerUser = async (_, { registerInput }) => {
  const salt = genSaltSync(10);
  if (registerInput.companyName.indexOf(" ") >= 0) {
    throw new UserInputError(
      `Invalid companyName ${registerInput.companyName}`,
      {
        invalidArgs: "companyName"
      }
    );
  }
  const newPassword = hashSync(registerInput.password, salt);
  const email: string = registerInput.email.toLowerCase();
  const user = await User.CreateUser({
    ...registerInput,
    password: newPassword
  });
  const token = sign(user.id, process.env.SECRET);
  return { user, token };
};
