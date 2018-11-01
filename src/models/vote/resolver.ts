// import * as User from './services';
import { prisma } from "../../generated/prisma";

export const resolver = {
  Query: <any>{},
  Mutation: <any>{},
  Vote: <any>{}
};

resolver.Vote.owner = vote => {
  return prisma.vote({ id: vote.id }).owner();
};

/*
  ***** Queries *****
*/

/*
  ***** Mutations *****
*/
