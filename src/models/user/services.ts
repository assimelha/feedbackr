import { prisma, User, ID_Input } from "../../generated/prisma";
import { verify } from "jsonwebtoken";
import { genSaltSync, hashSync } from "bcryptjs";

export const CreateUser = ({
  companyName,
  fullName,
  email,
  role,
  password
}): User => {
  return prisma.createUser({
    fullName: fullName,
    email,
    password,
    role,
    companies: {
      create: [
        {
          name: companyName,
          subdomain: companyName.toLowerCase()
        }
      ]
    }
  });
};

export const GetUserByEmail = (email: string): User => {
  return prisma.user({ email });
};

export const GetUserById = (id: ID_Input): User => {
  return prisma.user({ id });
};

export const GetUserByToken = (token: string): User => {
  let decodedId: ID_Input;
  try {
    decodedId = verify(token, process.env.SECRET) as ID_Input;
    return decodedId ? GetUserById(decodedId) : null;
  } catch (err) {
    return null;
  }
};

export const CheckUserPassword = async (email: string, password: string) => {
  const user = await prisma.user({ email });
  const salt = genSaltSync(10);
  const hashedPassword = hashSync(password, salt);
  if (user.password !== hashedPassword) {
    return null;
  } else {
    return user;
  }
};
