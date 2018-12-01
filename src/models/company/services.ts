import { companyRepository } from "../../entity/_repositories";

export const GetCompany = async ({ userId, companyId }) => {
  return companyRepository().findOne(companyId);
};
