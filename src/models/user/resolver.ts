// import * as User from './services';
import { hashSync, genSaltSync, compare } from "bcryptjs";
import { AuthenticationError, UserInputError } from "apollo-server-errors";
import { sign, verify } from "jsonwebtoken";
import * as UserServices from "./services";
import { User } from "../../entity/User";
import { Company } from "../../entity/Company";
import { getRepository } from "typeorm";

export const resolver = {
  Query: <any>{},
  Mutation: <any>{},
  User: <any>{}
};

/*
  ***** Queries *****
*/

// resolver.User.companies = user => {
//   return prisma.user({ id: user.id }).companies();
// };

resolver.Query.currentUser = async (root, args, { user }) => {
  return user;
};

/*
  ***** Mutations *****
*/

resolver.Mutation.authenticateUser = async (_, { loginInput }) => {
  const user = await UserServices.GetUserByEmail(loginInput.email);
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

resolver.Mutation.registerUser = async (_, { registerInput }, { db }) => {
  if (registerInput.companyName.indexOf(" ") >= 0) {
    throw new UserInputError(
      `Invalid companyName ${registerInput.companyName}`,
      {
        invalidArgs: "companyName"
      }
    );
  }
  const salt = genSaltSync(10);
  const newPassword = hashSync(registerInput.password, salt);
  const email: string = registerInput.email.toLowerCase();
  const user = await UserServices.CreateUser({
    email,
    companyName: registerInput.companyName,
    password: newPassword,
    fullName: registerInput.fullName,
    role: registerInput.role
  });
  const token = sign(user.id, process.env.SECRET);
  return { user, token };
};
