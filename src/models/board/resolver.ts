// import * as User from './services';
import { prisma, UserNode, ID_Input } from "../../generated/prisma";
import { AuthenticationError, UserInputError } from "apollo-server-errors";
import { CreateBoard, GetBoard, GetBoardCompany } from "./services";

export const resolver = {
  Query: <any>{},
  Mutation: <any>{},
  Board: <any>{}
};

resolver.Board.company = async root => {
  return GetBoardCompany({ boardId: root.id });
};

/*
  ***** Queries *****
*/

resolver.Query.board = async (root, { companyId, id: boardId }, { user }) => {
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
