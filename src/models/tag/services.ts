import { UserInputError, AuthenticationError } from "apollo-server-errors";

const checkIfUserIsAllowed = async ({ boardId, userId, userRole }) => {
  // const isUserAllowed =
  //   (await prisma
  //     .board({ id: boardId })
  //     .company()
  //     .users({ where: { id: userId } })) && userRole === "ADMIN";
  // if (!isUserAllowed) {
  //   throw new AuthenticationError("User is not allowed to fetch tags");
  // }
};

export const GetTags = async ({ boardId, userId, userRole }) => {
  // await checkIfUserIsAllowed({ boardId, userId, userRole });
  // return prisma.board({ id: boardId }).tags();
};

export const CreateTag = async ({ boardId, name, userId, userRole }) => {
  // await checkIfUserIsAllowed({ boardId, userId, userRole });
  // return prisma.createTag({ board: { connect: { id: boardId } }, title: name });
};
