// import * as User from './services';
import { prisma } from "../../generated/prisma";
import { AuthenticationError, UserInputError } from "apollo-server-errors";
import {
  GetPost,
  CreatePost,
  EditPost,
  DeletePost,
  ChangePostStatus
} from "./services";
import { STATUS } from "../../lib/constants";

export const resolver = {
  Query: <any>{},
  Mutation: <any>{},
  Post: <any>{}
};

resolver.Post.votes = post => {
  return prisma.post({ id: post.id }).votes();
};

/*
  ***** Queries *****
*/

resolver.Query.post = async (_, { id }, { user }) => {
  return GetPost({ userId: user.id, postId: id });
};

resolver.Query.posts = async () => {};

/*
  ***** Mutations *****
*/

resolver.Mutation.createPost = async (_, { postInput }, { user }) => {
  // Check if user owns the board
  return CreatePost({ postInput, userId: user.id });
};

resolver.Mutation.editPost = async (_, { postInput }, { user }) => {
  // Check if user owns the board
  return EditPost({ postInput, userId: user.id, userRole: user.role });
};

resolver.Mutation.deletePost = async (_, { id }, { user }) => {
  // Check if user owns the board
  return DeletePost({ postId: id, userId: user.id, userRole: user.role });
};

resolver.Mutation.changePostStatus = async (_, { id, status }, { user }) => {
  if (!Object.values(STATUS).includes(status))
    throw new UserInputError(`Invalid status  ${status}`, {
      invalidArgs: "status"
    });
  return ChangePostStatus({
    postId: id,
    status,
    userId: user.id,
    userRole: user.role
  });
};
