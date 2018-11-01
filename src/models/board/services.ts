import { UserInputError, AuthenticationError } from "apollo-server-errors";
import { prisma, CompanyNode, Company, Board } from "../../generated/prisma";

export const CreateBoard = ({ name, url, companyId, userId }) => {
  return prisma.createBoard({
    name,
    url,
    postForm: {
      create: {}
    },
    company: {
      connect: {
        id: companyId
      }
    },
    owner: {
      connect: {
        id: userId
      }
    }
  });
};

export const GetBoardCompany = ({ boardId }) => {
  return prisma.board({ id: boardId }).company();
};

export const GetBoard = async ({ userId, companyId, boardId }) => {
  const companyUsers = await prisma
    .company({ id: companyId })
    .users({ where: { id: userId }, first: 1 });

  if (!companyUsers) {
    throw new AuthenticationError(
      `This user is not allowed to fetch company with id: ${companyId} `
    );
  }

  const boardCompany = await prisma.board({ id: boardId }).company();
  if (boardCompany && boardCompany.id === companyId) {
    return prisma.board({ id: boardId });
  }
  throw new UserInputError(`No such board with id: ${boardId}`, {
    invalidArgs: "boardId"
  });
};
