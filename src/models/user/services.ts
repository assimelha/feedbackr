import { verify } from "jsonwebtoken";
import { genSaltSync, hashSync } from "bcryptjs";
import { userRepository, companyRepository } from "../../entity/_repositories";
import { Company, User } from "../../entity";

export const CreateUser = async ({
  companyName,
  fullName,
  email,
  role,
  password
}: {
  companyName: string;
  fullName: string;
  email: string;
  role: string;
  password: string;
}) => {
  const company = new Company();
  company.name = companyName;
  company.subdomain = companyName.toLowerCase();
  const resCompany = await companyRepository().save(company);
  console.log({ company });
  console.log({ resCompany });
  const user = new User();
  user.fullName = fullName;
  user.email = email;
  user.role = role;
  user.password = password;
  user.companies = Promise.resolve([company]);
  return userRepository().save(user);
};

export const GetUserByEmail = (email: string) =>
  userRepository().findOne({ where: { email } });

export const GetUserById = id => {
  return userRepository().findOne(id);
};

export const GetUserByToken = (token: string) => {
  let decodedId;
  try {
    decodedId = verify(token, process.env.SECRET);
    return decodedId ? GetUserById(decodedId) : null;
  } catch (err) {
    return null;
  }
};

export const CheckUserPassword = async (email: string, password: string) => {
  // const user = await prisma.user({ email });
  // const salt = genSaltSync(10);
  // const hashedPassword = hashSync(password, salt);
  // if (user.password !== hashedPassword) {
  //   return null;
  // } else {
  //   return user;
  // }
};
