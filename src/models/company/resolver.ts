// import * as User from './services';
import { AuthenticationError, UserInputError } from "apollo-server-errors";
import { GetCompany } from "./services";

export const resolver = {
  Query: <any>{},
  Mutation: <any>{},
  Company: <any>{}
};

/*
  ***** Queries *****
*/

resolver.Query.company = async (root, { companyId }, { user }) => {
  return GetCompany({ userId: user.id, companyId });
};

/*
  ***** Mutations *****
*/
