// import * as User from './services';

export const resolver = {
  Query: <any>{},
  Mutation: <any>{},
  Vote: <any>{}
};

resolver.Vote.owner = vote => {
  // return prisma.vote({ id: vote.id }).owner();
};

/*
  ***** Queries *****
*/

/*
  ***** Mutations *****
*/
