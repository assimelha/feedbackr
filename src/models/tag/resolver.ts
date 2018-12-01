import { GetTags, CreateTag } from "./services";

export const resolver = {
  Query: <any>{},
  Mutation: <any>{},
  Post: <any>{}
};

/*
  ***** Queries *****
*/

resolver.Query.tags = (_, { tagsInput: { boardId } }, { user }) => {
  return GetTags({ boardId, userId: user.id, userRole: user.role });
};

/*
  ***** Mutations *****
*/

resolver.Mutation.createTag = (
  _,
  { createTagInput: { boardId, name } },
  { user }
) => {
  return CreateTag({ boardId, userId: user.id, userRole: user.role, name });
};
