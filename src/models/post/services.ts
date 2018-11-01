import { UserInputError, AuthenticationError } from "apollo-server-errors";
import { prisma } from "../../generated/prisma";
import { STATUS } from "../../lib/constants";

export const GetPost = async ({ userId, postId }) => {
  const isUserInCompany = await prisma
    .post({ id: postId })
    .board()
    .company()
    .users({ where: { id: userId } });
  if (!isUserInCompany) {
    throw new AuthenticationError(
      `User is not allowed to fetch post with id: ${postId}`
    );
  }
  return prisma.post({ id: postId });
};

export const CreatePost = async ({ userId, postInput }) => {
  const isUserInCompany = await prisma
    .board({ id: postInput.boardId })
    .company()
    .users({ where: { id: userId }, first: 1 });
  if (!isUserInCompany) {
    throw new AuthenticationError(
      `User doesn't have the rights to create post`
    );
  }
  return prisma.createPost({
    title: postInput.title,
    details: postInput.details,
    status: STATUS.OPEN,
    board: {
      connect: {
        id: postInput.boardId
      }
    },
    votes: {
      create: [
        {
          owner: {
            connect: {
              id: userId
            }
          }
        }
      ]
    },
    owner: {
      connect: {
        id: userId
      }
    }
  });
};

const checkIfUserIsAdmin = async ({ postId, userId, userRole }) => {
  const isAdmin =
    (await prisma
      .post({ id: postId })
      .board()
      .company()
      .users({ where: { id: userId } })) && userRole === "ADMIN";
  if (!isAdmin) {
    throw new AuthenticationError(
      `User is not allowed to edit post with id: ${postId}`
    );
  }
};

const checkIfUserIsAllowed = async ({ userRole, userId, postId }) => {
  const postOwnerId = await prisma
    .post({ id: postId })
    .owner()
    .id();
  checkIfUserIsAdmin({ userId, userRole, postId });
  if (postOwnerId !== userId)
    throw new AuthenticationError(
      `User is not allowed to edit post with id: ${postId}`
    );
};

export const EditPost = async ({ postInput, userId, userRole }) => {
  const { postId, ...input } = postInput;
  checkIfUserIsAllowed({ postId, userId, userRole });
  return prisma.updatePost({
    where: { id: postId },
    data: { ...input }
  });
};

export const DeletePost = async ({ postId, userId, userRole }) => {
  checkIfUserIsAllowed({ postId, userId, userRole });
  return prisma.deletePost({ id: postId });
};

export const ChangePostStatus = async ({
  postId,
  userId,
  userRole,
  status
}) => {
  checkIfUserIsAdmin({ postId, userId, userRole });
  return prisma.updatePost({ data: { status }, where: { id: postId } });
};
