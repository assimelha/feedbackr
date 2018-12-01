// import * as User from './services';
import { AuthenticationError, UserInputError } from "apollo-server-errors";
import { CreateBoard, GetBoard, GetBoardCompany } from "./services";
import { Board } from "../../entity";
import { Repository } from "typeorm";

export const resolver = {
  Query: <any>{},
  Mutation: <any>{},
  Board: <any>{}
};

/*
  ***** Queries *****
*/

resolver.Query.board = async ({ companyId, id: boardId }, { user }) => {
  console.log({ companyId });
  return GetBoard({ userId: user.id, companyId, boardId });
};

/*
  ***** Mutations *****
*/

resolver.Mutation.createBoard = (
  _,
  { boardInput: { name, url, companyId } },
  { user }
) => {
  if (url.indexOf(" ") >= 0) {
    throw new UserInputError(`Invalid board url ${url}`, {
      invalidArgs: "companyName"
    });
  }
  return CreateBoard({ name, url, userId: user.id, companyId });
};
