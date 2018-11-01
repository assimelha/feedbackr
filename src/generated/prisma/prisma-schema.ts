export const typeDefs = /* GraphQL */ `type AggregateBoard {
  count: Int!
}

type AggregateCompany {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type AggregatePostForm {
  count: Int!
}

type AggregateTag {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateVote {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Board {
  id: ID!
  name: String!
  url: String!
  isPublic: Boolean!
  postForm: PostForm!
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag!]
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
  owner: User!
  company: Company!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type BoardConnection {
  pageInfo: PageInfo!
  edges: [BoardEdge]!
  aggregate: AggregateBoard!
}

input BoardCreateInput {
  name: String!
  url: String!
  isPublic: Boolean
  postForm: PostFormCreateOneWithoutBoardInput!
  tags: TagCreateManyWithoutBoardInput
  posts: PostCreateManyWithoutBoardInput
  owner: UserCreateOneWithoutBoardsInput!
  company: CompanyCreateOneWithoutBoardsInput!
}

input BoardCreateManyWithoutCompanyInput {
  create: [BoardCreateWithoutCompanyInput!]
  connect: [BoardWhereUniqueInput!]
}

input BoardCreateManyWithoutOwnerInput {
  create: [BoardCreateWithoutOwnerInput!]
  connect: [BoardWhereUniqueInput!]
}

input BoardCreateOneWithoutPostFormInput {
  create: BoardCreateWithoutPostFormInput
  connect: BoardWhereUniqueInput
}

input BoardCreateOneWithoutPostsInput {
  create: BoardCreateWithoutPostsInput
  connect: BoardWhereUniqueInput
}

input BoardCreateOneWithoutTagsInput {
  create: BoardCreateWithoutTagsInput
  connect: BoardWhereUniqueInput
}

input BoardCreateWithoutCompanyInput {
  name: String!
  url: String!
  isPublic: Boolean
  postForm: PostFormCreateOneWithoutBoardInput!
  tags: TagCreateManyWithoutBoardInput
  posts: PostCreateManyWithoutBoardInput
  owner: UserCreateOneWithoutBoardsInput!
}

input BoardCreateWithoutOwnerInput {
  name: String!
  url: String!
  isPublic: Boolean
  postForm: PostFormCreateOneWithoutBoardInput!
  tags: TagCreateManyWithoutBoardInput
  posts: PostCreateManyWithoutBoardInput
  company: CompanyCreateOneWithoutBoardsInput!
}

input BoardCreateWithoutPostFormInput {
  name: String!
  url: String!
  isPublic: Boolean
  tags: TagCreateManyWithoutBoardInput
  posts: PostCreateManyWithoutBoardInput
  owner: UserCreateOneWithoutBoardsInput!
  company: CompanyCreateOneWithoutBoardsInput!
}

input BoardCreateWithoutPostsInput {
  name: String!
  url: String!
  isPublic: Boolean
  postForm: PostFormCreateOneWithoutBoardInput!
  tags: TagCreateManyWithoutBoardInput
  owner: UserCreateOneWithoutBoardsInput!
  company: CompanyCreateOneWithoutBoardsInput!
}

input BoardCreateWithoutTagsInput {
  name: String!
  url: String!
  isPublic: Boolean
  postForm: PostFormCreateOneWithoutBoardInput!
  posts: PostCreateManyWithoutBoardInput
  owner: UserCreateOneWithoutBoardsInput!
  company: CompanyCreateOneWithoutBoardsInput!
}

type BoardEdge {
  node: Board!
  cursor: String!
}

enum BoardOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  url_ASC
  url_DESC
  isPublic_ASC
  isPublic_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BoardPreviousValues {
  id: ID!
  name: String!
  url: String!
  isPublic: Boolean!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type BoardSubscriptionPayload {
  mutation: MutationType!
  node: Board
  updatedFields: [String!]
  previousValues: BoardPreviousValues
}

input BoardSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BoardWhereInput
  AND: [BoardSubscriptionWhereInput!]
  OR: [BoardSubscriptionWhereInput!]
  NOT: [BoardSubscriptionWhereInput!]
}

input BoardUpdateInput {
  name: String
  url: String
  isPublic: Boolean
  postForm: PostFormUpdateOneRequiredWithoutBoardInput
  tags: TagUpdateManyWithoutBoardInput
  posts: PostUpdateManyWithoutBoardInput
  owner: UserUpdateOneRequiredWithoutBoardsInput
  company: CompanyUpdateOneRequiredWithoutBoardsInput
}

input BoardUpdateManyWithoutCompanyInput {
  create: [BoardCreateWithoutCompanyInput!]
  delete: [BoardWhereUniqueInput!]
  connect: [BoardWhereUniqueInput!]
  disconnect: [BoardWhereUniqueInput!]
  update: [BoardUpdateWithWhereUniqueWithoutCompanyInput!]
  upsert: [BoardUpsertWithWhereUniqueWithoutCompanyInput!]
}

input BoardUpdateManyWithoutOwnerInput {
  create: [BoardCreateWithoutOwnerInput!]
  delete: [BoardWhereUniqueInput!]
  connect: [BoardWhereUniqueInput!]
  disconnect: [BoardWhereUniqueInput!]
  update: [BoardUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [BoardUpsertWithWhereUniqueWithoutOwnerInput!]
}

input BoardUpdateOneRequiredWithoutPostFormInput {
  create: BoardCreateWithoutPostFormInput
  update: BoardUpdateWithoutPostFormDataInput
  upsert: BoardUpsertWithoutPostFormInput
  connect: BoardWhereUniqueInput
}

input BoardUpdateOneRequiredWithoutPostsInput {
  create: BoardCreateWithoutPostsInput
  update: BoardUpdateWithoutPostsDataInput
  upsert: BoardUpsertWithoutPostsInput
  connect: BoardWhereUniqueInput
}

input BoardUpdateOneRequiredWithoutTagsInput {
  create: BoardCreateWithoutTagsInput
  update: BoardUpdateWithoutTagsDataInput
  upsert: BoardUpsertWithoutTagsInput
  connect: BoardWhereUniqueInput
}

input BoardUpdateWithoutCompanyDataInput {
  name: String
  url: String
  isPublic: Boolean
  postForm: PostFormUpdateOneRequiredWithoutBoardInput
  tags: TagUpdateManyWithoutBoardInput
  posts: PostUpdateManyWithoutBoardInput
  owner: UserUpdateOneRequiredWithoutBoardsInput
}

input BoardUpdateWithoutOwnerDataInput {
  name: String
  url: String
  isPublic: Boolean
  postForm: PostFormUpdateOneRequiredWithoutBoardInput
  tags: TagUpdateManyWithoutBoardInput
  posts: PostUpdateManyWithoutBoardInput
  company: CompanyUpdateOneRequiredWithoutBoardsInput
}

input BoardUpdateWithoutPostFormDataInput {
  name: String
  url: String
  isPublic: Boolean
  tags: TagUpdateManyWithoutBoardInput
  posts: PostUpdateManyWithoutBoardInput
  owner: UserUpdateOneRequiredWithoutBoardsInput
  company: CompanyUpdateOneRequiredWithoutBoardsInput
}

input BoardUpdateWithoutPostsDataInput {
  name: String
  url: String
  isPublic: Boolean
  postForm: PostFormUpdateOneRequiredWithoutBoardInput
  tags: TagUpdateManyWithoutBoardInput
  owner: UserUpdateOneRequiredWithoutBoardsInput
  company: CompanyUpdateOneRequiredWithoutBoardsInput
}

input BoardUpdateWithoutTagsDataInput {
  name: String
  url: String
  isPublic: Boolean
  postForm: PostFormUpdateOneRequiredWithoutBoardInput
  posts: PostUpdateManyWithoutBoardInput
  owner: UserUpdateOneRequiredWithoutBoardsInput
  company: CompanyUpdateOneRequiredWithoutBoardsInput
}

input BoardUpdateWithWhereUniqueWithoutCompanyInput {
  where: BoardWhereUniqueInput!
  data: BoardUpdateWithoutCompanyDataInput!
}

input BoardUpdateWithWhereUniqueWithoutOwnerInput {
  where: BoardWhereUniqueInput!
  data: BoardUpdateWithoutOwnerDataInput!
}

input BoardUpsertWithoutPostFormInput {
  update: BoardUpdateWithoutPostFormDataInput!
  create: BoardCreateWithoutPostFormInput!
}

input BoardUpsertWithoutPostsInput {
  update: BoardUpdateWithoutPostsDataInput!
  create: BoardCreateWithoutPostsInput!
}

input BoardUpsertWithoutTagsInput {
  update: BoardUpdateWithoutTagsDataInput!
  create: BoardCreateWithoutTagsInput!
}

input BoardUpsertWithWhereUniqueWithoutCompanyInput {
  where: BoardWhereUniqueInput!
  update: BoardUpdateWithoutCompanyDataInput!
  create: BoardCreateWithoutCompanyInput!
}

input BoardUpsertWithWhereUniqueWithoutOwnerInput {
  where: BoardWhereUniqueInput!
  update: BoardUpdateWithoutOwnerDataInput!
  create: BoardCreateWithoutOwnerInput!
}

input BoardWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  isPublic: Boolean
  isPublic_not: Boolean
  postForm: PostFormWhereInput
  tags_every: TagWhereInput
  tags_some: TagWhereInput
  tags_none: TagWhereInput
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
  owner: UserWhereInput
  company: CompanyWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [BoardWhereInput!]
  OR: [BoardWhereInput!]
  NOT: [BoardWhereInput!]
}

input BoardWhereUniqueInput {
  id: ID
  name: String
  url: String
}

type Company {
  id: ID!
  name: String!
  color: String!
  logoUrl: String
  faviconUrl: String
  subdomain: String
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  boards(where: BoardWhereInput, orderBy: BoardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Board!]
  redirectURL: String
  doSendEmails: Boolean!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type CompanyConnection {
  pageInfo: PageInfo!
  edges: [CompanyEdge]!
  aggregate: AggregateCompany!
}

input CompanyCreateInput {
  name: String!
  color: String
  logoUrl: String
  faviconUrl: String
  subdomain: String
  users: UserCreateManyWithoutCompaniesInput
  boards: BoardCreateManyWithoutCompanyInput
  redirectURL: String
  doSendEmails: Boolean
}

input CompanyCreateManyWithoutUsersInput {
  create: [CompanyCreateWithoutUsersInput!]
  connect: [CompanyWhereUniqueInput!]
}

input CompanyCreateOneWithoutBoardsInput {
  create: CompanyCreateWithoutBoardsInput
  connect: CompanyWhereUniqueInput
}

input CompanyCreateWithoutBoardsInput {
  name: String!
  color: String
  logoUrl: String
  faviconUrl: String
  subdomain: String
  users: UserCreateManyWithoutCompaniesInput
  redirectURL: String
  doSendEmails: Boolean
}

input CompanyCreateWithoutUsersInput {
  name: String!
  color: String
  logoUrl: String
  faviconUrl: String
  subdomain: String
  boards: BoardCreateManyWithoutCompanyInput
  redirectURL: String
  doSendEmails: Boolean
}

type CompanyEdge {
  node: Company!
  cursor: String!
}

enum CompanyOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  color_ASC
  color_DESC
  logoUrl_ASC
  logoUrl_DESC
  faviconUrl_ASC
  faviconUrl_DESC
  subdomain_ASC
  subdomain_DESC
  redirectURL_ASC
  redirectURL_DESC
  doSendEmails_ASC
  doSendEmails_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CompanyPreviousValues {
  id: ID!
  name: String!
  color: String!
  logoUrl: String
  faviconUrl: String
  subdomain: String
  redirectURL: String
  doSendEmails: Boolean!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type CompanySubscriptionPayload {
  mutation: MutationType!
  node: Company
  updatedFields: [String!]
  previousValues: CompanyPreviousValues
}

input CompanySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CompanyWhereInput
  AND: [CompanySubscriptionWhereInput!]
  OR: [CompanySubscriptionWhereInput!]
  NOT: [CompanySubscriptionWhereInput!]
}

input CompanyUpdateInput {
  name: String
  color: String
  logoUrl: String
  faviconUrl: String
  subdomain: String
  users: UserUpdateManyWithoutCompaniesInput
  boards: BoardUpdateManyWithoutCompanyInput
  redirectURL: String
  doSendEmails: Boolean
}

input CompanyUpdateManyWithoutUsersInput {
  create: [CompanyCreateWithoutUsersInput!]
  delete: [CompanyWhereUniqueInput!]
  connect: [CompanyWhereUniqueInput!]
  disconnect: [CompanyWhereUniqueInput!]
  update: [CompanyUpdateWithWhereUniqueWithoutUsersInput!]
  upsert: [CompanyUpsertWithWhereUniqueWithoutUsersInput!]
}

input CompanyUpdateOneRequiredWithoutBoardsInput {
  create: CompanyCreateWithoutBoardsInput
  update: CompanyUpdateWithoutBoardsDataInput
  upsert: CompanyUpsertWithoutBoardsInput
  connect: CompanyWhereUniqueInput
}

input CompanyUpdateWithoutBoardsDataInput {
  name: String
  color: String
  logoUrl: String
  faviconUrl: String
  subdomain: String
  users: UserUpdateManyWithoutCompaniesInput
  redirectURL: String
  doSendEmails: Boolean
}

input CompanyUpdateWithoutUsersDataInput {
  name: String
  color: String
  logoUrl: String
  faviconUrl: String
  subdomain: String
  boards: BoardUpdateManyWithoutCompanyInput
  redirectURL: String
  doSendEmails: Boolean
}

input CompanyUpdateWithWhereUniqueWithoutUsersInput {
  where: CompanyWhereUniqueInput!
  data: CompanyUpdateWithoutUsersDataInput!
}

input CompanyUpsertWithoutBoardsInput {
  update: CompanyUpdateWithoutBoardsDataInput!
  create: CompanyCreateWithoutBoardsInput!
}

input CompanyUpsertWithWhereUniqueWithoutUsersInput {
  where: CompanyWhereUniqueInput!
  update: CompanyUpdateWithoutUsersDataInput!
  create: CompanyCreateWithoutUsersInput!
}

input CompanyWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  color: String
  color_not: String
  color_in: [String!]
  color_not_in: [String!]
  color_lt: String
  color_lte: String
  color_gt: String
  color_gte: String
  color_contains: String
  color_not_contains: String
  color_starts_with: String
  color_not_starts_with: String
  color_ends_with: String
  color_not_ends_with: String
  logoUrl: String
  logoUrl_not: String
  logoUrl_in: [String!]
  logoUrl_not_in: [String!]
  logoUrl_lt: String
  logoUrl_lte: String
  logoUrl_gt: String
  logoUrl_gte: String
  logoUrl_contains: String
  logoUrl_not_contains: String
  logoUrl_starts_with: String
  logoUrl_not_starts_with: String
  logoUrl_ends_with: String
  logoUrl_not_ends_with: String
  faviconUrl: String
  faviconUrl_not: String
  faviconUrl_in: [String!]
  faviconUrl_not_in: [String!]
  faviconUrl_lt: String
  faviconUrl_lte: String
  faviconUrl_gt: String
  faviconUrl_gte: String
  faviconUrl_contains: String
  faviconUrl_not_contains: String
  faviconUrl_starts_with: String
  faviconUrl_not_starts_with: String
  faviconUrl_ends_with: String
  faviconUrl_not_ends_with: String
  subdomain: String
  subdomain_not: String
  subdomain_in: [String!]
  subdomain_not_in: [String!]
  subdomain_lt: String
  subdomain_lte: String
  subdomain_gt: String
  subdomain_gte: String
  subdomain_contains: String
  subdomain_not_contains: String
  subdomain_starts_with: String
  subdomain_not_starts_with: String
  subdomain_ends_with: String
  subdomain_not_ends_with: String
  users_every: UserWhereInput
  users_some: UserWhereInput
  users_none: UserWhereInput
  boards_every: BoardWhereInput
  boards_some: BoardWhereInput
  boards_none: BoardWhereInput
  redirectURL: String
  redirectURL_not: String
  redirectURL_in: [String!]
  redirectURL_not_in: [String!]
  redirectURL_lt: String
  redirectURL_lte: String
  redirectURL_gt: String
  redirectURL_gte: String
  redirectURL_contains: String
  redirectURL_not_contains: String
  redirectURL_starts_with: String
  redirectURL_not_starts_with: String
  redirectURL_ends_with: String
  redirectURL_not_ends_with: String
  doSendEmails: Boolean
  doSendEmails_not: Boolean
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [CompanyWhereInput!]
  OR: [CompanyWhereInput!]
  NOT: [CompanyWhereInput!]
}

input CompanyWhereUniqueInput {
  id: ID
  name: String
  subdomain: String
}

scalar DateTime

scalar Long

type Mutation {
  createBoard(data: BoardCreateInput!): Board!
  updateBoard(data: BoardUpdateInput!, where: BoardWhereUniqueInput!): Board
  updateManyBoards(data: BoardUpdateInput!, where: BoardWhereInput): BatchPayload!
  upsertBoard(where: BoardWhereUniqueInput!, create: BoardCreateInput!, update: BoardUpdateInput!): Board!
  deleteBoard(where: BoardWhereUniqueInput!): Board
  deleteManyBoards(where: BoardWhereInput): BatchPayload!
  createCompany(data: CompanyCreateInput!): Company!
  updateCompany(data: CompanyUpdateInput!, where: CompanyWhereUniqueInput!): Company
  updateManyCompanies(data: CompanyUpdateInput!, where: CompanyWhereInput): BatchPayload!
  upsertCompany(where: CompanyWhereUniqueInput!, create: CompanyCreateInput!, update: CompanyUpdateInput!): Company!
  deleteCompany(where: CompanyWhereUniqueInput!): Company
  deleteManyCompanies(where: CompanyWhereInput): BatchPayload!
  createPost(data: PostCreateInput!): Post!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateManyPosts(data: PostUpdateInput!, where: PostWhereInput): BatchPayload!
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  deletePost(where: PostWhereUniqueInput!): Post
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  createPostForm(data: PostFormCreateInput!): PostForm!
  updatePostForm(data: PostFormUpdateInput!, where: PostFormWhereUniqueInput!): PostForm
  updateManyPostForms(data: PostFormUpdateInput!, where: PostFormWhereInput): BatchPayload!
  upsertPostForm(where: PostFormWhereUniqueInput!, create: PostFormCreateInput!, update: PostFormUpdateInput!): PostForm!
  deletePostForm(where: PostFormWhereUniqueInput!): PostForm
  deleteManyPostForms(where: PostFormWhereInput): BatchPayload!
  createTag(data: TagCreateInput!): Tag!
  updateTag(data: TagUpdateInput!, where: TagWhereUniqueInput!): Tag
  updateManyTags(data: TagUpdateInput!, where: TagWhereInput): BatchPayload!
  upsertTag(where: TagWhereUniqueInput!, create: TagCreateInput!, update: TagUpdateInput!): Tag!
  deleteTag(where: TagWhereUniqueInput!): Tag
  deleteManyTags(where: TagWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  createVote(data: VoteCreateInput!): Vote!
  updateVote(data: VoteUpdateInput!, where: VoteWhereUniqueInput!): Vote
  updateManyVotes(data: VoteUpdateInput!, where: VoteWhereInput): BatchPayload!
  upsertVote(where: VoteWhereUniqueInput!, create: VoteCreateInput!, update: VoteUpdateInput!): Vote!
  deleteVote(where: VoteWhereUniqueInput!): Vote
  deleteManyVotes(where: VoteWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Post {
  id: ID!
  title: String!
  details: String!
  joinedPictureUrl: String
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag!]
  status: String!
  votes(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Vote!]
  owner: User!
  board: Board!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type PostConnection {
  pageInfo: PageInfo!
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  title: String!
  details: String!
  joinedPictureUrl: String
  tags: TagCreateManyInput
  status: String!
  votes: VoteCreateManyWithoutPostInput
  owner: UserCreateOneInput!
  board: BoardCreateOneWithoutPostsInput!
}

input PostCreateManyWithoutBoardInput {
  create: [PostCreateWithoutBoardInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateOneWithoutVotesInput {
  create: PostCreateWithoutVotesInput
  connect: PostWhereUniqueInput
}

input PostCreateWithoutBoardInput {
  title: String!
  details: String!
  joinedPictureUrl: String
  tags: TagCreateManyInput
  status: String!
  votes: VoteCreateManyWithoutPostInput
  owner: UserCreateOneInput!
}

input PostCreateWithoutVotesInput {
  title: String!
  details: String!
  joinedPictureUrl: String
  tags: TagCreateManyInput
  status: String!
  owner: UserCreateOneInput!
  board: BoardCreateOneWithoutPostsInput!
}

type PostEdge {
  node: Post!
  cursor: String!
}

type PostForm {
  id: ID!
  heading: String!
  description: String
  title: String!
  titlePlaceholder: String!
  details: String!
  detailsPlaceholder: String!
  buttonText: String!
  board: Board!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type PostFormConnection {
  pageInfo: PageInfo!
  edges: [PostFormEdge]!
  aggregate: AggregatePostForm!
}

input PostFormCreateInput {
  heading: String
  description: String
  title: String
  titlePlaceholder: String
  details: String
  detailsPlaceholder: String
  buttonText: String
  board: BoardCreateOneWithoutPostFormInput!
}

input PostFormCreateManyInput {
  create: [PostFormCreateInput!]
  connect: [PostFormWhereUniqueInput!]
}

input PostFormCreateOneWithoutBoardInput {
  create: PostFormCreateWithoutBoardInput
  connect: PostFormWhereUniqueInput
}

input PostFormCreateWithoutBoardInput {
  heading: String
  description: String
  title: String
  titlePlaceholder: String
  details: String
  detailsPlaceholder: String
  buttonText: String
}

type PostFormEdge {
  node: PostForm!
  cursor: String!
}

enum PostFormOrderByInput {
  id_ASC
  id_DESC
  heading_ASC
  heading_DESC
  description_ASC
  description_DESC
  title_ASC
  title_DESC
  titlePlaceholder_ASC
  titlePlaceholder_DESC
  details_ASC
  details_DESC
  detailsPlaceholder_ASC
  detailsPlaceholder_DESC
  buttonText_ASC
  buttonText_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PostFormPreviousValues {
  id: ID!
  heading: String!
  description: String
  title: String!
  titlePlaceholder: String!
  details: String!
  detailsPlaceholder: String!
  buttonText: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type PostFormSubscriptionPayload {
  mutation: MutationType!
  node: PostForm
  updatedFields: [String!]
  previousValues: PostFormPreviousValues
}

input PostFormSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PostFormWhereInput
  AND: [PostFormSubscriptionWhereInput!]
  OR: [PostFormSubscriptionWhereInput!]
  NOT: [PostFormSubscriptionWhereInput!]
}

input PostFormUpdateDataInput {
  heading: String
  description: String
  title: String
  titlePlaceholder: String
  details: String
  detailsPlaceholder: String
  buttonText: String
  board: BoardUpdateOneRequiredWithoutPostFormInput
}

input PostFormUpdateInput {
  heading: String
  description: String
  title: String
  titlePlaceholder: String
  details: String
  detailsPlaceholder: String
  buttonText: String
  board: BoardUpdateOneRequiredWithoutPostFormInput
}

input PostFormUpdateManyInput {
  create: [PostFormCreateInput!]
  update: [PostFormUpdateWithWhereUniqueNestedInput!]
  upsert: [PostFormUpsertWithWhereUniqueNestedInput!]
  delete: [PostFormWhereUniqueInput!]
  connect: [PostFormWhereUniqueInput!]
  disconnect: [PostFormWhereUniqueInput!]
}

input PostFormUpdateOneRequiredWithoutBoardInput {
  create: PostFormCreateWithoutBoardInput
  update: PostFormUpdateWithoutBoardDataInput
  upsert: PostFormUpsertWithoutBoardInput
  connect: PostFormWhereUniqueInput
}

input PostFormUpdateWithoutBoardDataInput {
  heading: String
  description: String
  title: String
  titlePlaceholder: String
  details: String
  detailsPlaceholder: String
  buttonText: String
}

input PostFormUpdateWithWhereUniqueNestedInput {
  where: PostFormWhereUniqueInput!
  data: PostFormUpdateDataInput!
}

input PostFormUpsertWithoutBoardInput {
  update: PostFormUpdateWithoutBoardDataInput!
  create: PostFormCreateWithoutBoardInput!
}

input PostFormUpsertWithWhereUniqueNestedInput {
  where: PostFormWhereUniqueInput!
  update: PostFormUpdateDataInput!
  create: PostFormCreateInput!
}

input PostFormWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  heading: String
  heading_not: String
  heading_in: [String!]
  heading_not_in: [String!]
  heading_lt: String
  heading_lte: String
  heading_gt: String
  heading_gte: String
  heading_contains: String
  heading_not_contains: String
  heading_starts_with: String
  heading_not_starts_with: String
  heading_ends_with: String
  heading_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  titlePlaceholder: String
  titlePlaceholder_not: String
  titlePlaceholder_in: [String!]
  titlePlaceholder_not_in: [String!]
  titlePlaceholder_lt: String
  titlePlaceholder_lte: String
  titlePlaceholder_gt: String
  titlePlaceholder_gte: String
  titlePlaceholder_contains: String
  titlePlaceholder_not_contains: String
  titlePlaceholder_starts_with: String
  titlePlaceholder_not_starts_with: String
  titlePlaceholder_ends_with: String
  titlePlaceholder_not_ends_with: String
  details: String
  details_not: String
  details_in: [String!]
  details_not_in: [String!]
  details_lt: String
  details_lte: String
  details_gt: String
  details_gte: String
  details_contains: String
  details_not_contains: String
  details_starts_with: String
  details_not_starts_with: String
  details_ends_with: String
  details_not_ends_with: String
  detailsPlaceholder: String
  detailsPlaceholder_not: String
  detailsPlaceholder_in: [String!]
  detailsPlaceholder_not_in: [String!]
  detailsPlaceholder_lt: String
  detailsPlaceholder_lte: String
  detailsPlaceholder_gt: String
  detailsPlaceholder_gte: String
  detailsPlaceholder_contains: String
  detailsPlaceholder_not_contains: String
  detailsPlaceholder_starts_with: String
  detailsPlaceholder_not_starts_with: String
  detailsPlaceholder_ends_with: String
  detailsPlaceholder_not_ends_with: String
  buttonText: String
  buttonText_not: String
  buttonText_in: [String!]
  buttonText_not_in: [String!]
  buttonText_lt: String
  buttonText_lte: String
  buttonText_gt: String
  buttonText_gte: String
  buttonText_contains: String
  buttonText_not_contains: String
  buttonText_starts_with: String
  buttonText_not_starts_with: String
  buttonText_ends_with: String
  buttonText_not_ends_with: String
  board: BoardWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [PostFormWhereInput!]
  OR: [PostFormWhereInput!]
  NOT: [PostFormWhereInput!]
}

input PostFormWhereUniqueInput {
  id: ID
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  details_ASC
  details_DESC
  joinedPictureUrl_ASC
  joinedPictureUrl_DESC
  status_ASC
  status_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PostPreviousValues {
  id: ID!
  title: String!
  details: String!
  joinedPictureUrl: String
  status: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PostWhereInput
  AND: [PostSubscriptionWhereInput!]
  OR: [PostSubscriptionWhereInput!]
  NOT: [PostSubscriptionWhereInput!]
}

input PostUpdateInput {
  title: String
  details: String
  joinedPictureUrl: String
  tags: TagUpdateManyInput
  status: String
  votes: VoteUpdateManyWithoutPostInput
  owner: UserUpdateOneRequiredInput
  board: BoardUpdateOneRequiredWithoutPostsInput
}

input PostUpdateManyWithoutBoardInput {
  create: [PostCreateWithoutBoardInput!]
  delete: [PostWhereUniqueInput!]
  connect: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutBoardInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutBoardInput!]
}

input PostUpdateOneRequiredWithoutVotesInput {
  create: PostCreateWithoutVotesInput
  update: PostUpdateWithoutVotesDataInput
  upsert: PostUpsertWithoutVotesInput
  connect: PostWhereUniqueInput
}

input PostUpdateWithoutBoardDataInput {
  title: String
  details: String
  joinedPictureUrl: String
  tags: TagUpdateManyInput
  status: String
  votes: VoteUpdateManyWithoutPostInput
  owner: UserUpdateOneRequiredInput
}

input PostUpdateWithoutVotesDataInput {
  title: String
  details: String
  joinedPictureUrl: String
  tags: TagUpdateManyInput
  status: String
  owner: UserUpdateOneRequiredInput
  board: BoardUpdateOneRequiredWithoutPostsInput
}

input PostUpdateWithWhereUniqueWithoutBoardInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutBoardDataInput!
}

input PostUpsertWithoutVotesInput {
  update: PostUpdateWithoutVotesDataInput!
  create: PostCreateWithoutVotesInput!
}

input PostUpsertWithWhereUniqueWithoutBoardInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutBoardDataInput!
  create: PostCreateWithoutBoardInput!
}

input PostWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  details: String
  details_not: String
  details_in: [String!]
  details_not_in: [String!]
  details_lt: String
  details_lte: String
  details_gt: String
  details_gte: String
  details_contains: String
  details_not_contains: String
  details_starts_with: String
  details_not_starts_with: String
  details_ends_with: String
  details_not_ends_with: String
  joinedPictureUrl: String
  joinedPictureUrl_not: String
  joinedPictureUrl_in: [String!]
  joinedPictureUrl_not_in: [String!]
  joinedPictureUrl_lt: String
  joinedPictureUrl_lte: String
  joinedPictureUrl_gt: String
  joinedPictureUrl_gte: String
  joinedPictureUrl_contains: String
  joinedPictureUrl_not_contains: String
  joinedPictureUrl_starts_with: String
  joinedPictureUrl_not_starts_with: String
  joinedPictureUrl_ends_with: String
  joinedPictureUrl_not_ends_with: String
  tags_every: TagWhereInput
  tags_some: TagWhereInput
  tags_none: TagWhereInput
  status: String
  status_not: String
  status_in: [String!]
  status_not_in: [String!]
  status_lt: String
  status_lte: String
  status_gt: String
  status_gte: String
  status_contains: String
  status_not_contains: String
  status_starts_with: String
  status_not_starts_with: String
  status_ends_with: String
  status_not_ends_with: String
  votes_every: VoteWhereInput
  votes_some: VoteWhereInput
  votes_none: VoteWhereInput
  owner: UserWhereInput
  board: BoardWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [PostWhereInput!]
  OR: [PostWhereInput!]
  NOT: [PostWhereInput!]
}

input PostWhereUniqueInput {
  id: ID
}

type Query {
  board(where: BoardWhereUniqueInput!): Board
  boards(where: BoardWhereInput, orderBy: BoardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Board]!
  boardsConnection(where: BoardWhereInput, orderBy: BoardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BoardConnection!
  company(where: CompanyWhereUniqueInput!): Company
  companies(where: CompanyWhereInput, orderBy: CompanyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Company]!
  companiesConnection(where: CompanyWhereInput, orderBy: CompanyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CompanyConnection!
  post(where: PostWhereUniqueInput!): Post
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  postForm(where: PostFormWhereUniqueInput!): PostForm
  postForms(where: PostFormWhereInput, orderBy: PostFormOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PostForm]!
  postFormsConnection(where: PostFormWhereInput, orderBy: PostFormOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostFormConnection!
  tag(where: TagWhereUniqueInput!): Tag
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag]!
  tagsConnection(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TagConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  vote(where: VoteWhereUniqueInput!): Vote
  votes(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Vote]!
  votesConnection(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): VoteConnection!
  node(id: ID!): Node
}

type Subscription {
  board(where: BoardSubscriptionWhereInput): BoardSubscriptionPayload
  company(where: CompanySubscriptionWhereInput): CompanySubscriptionPayload
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  postForm(where: PostFormSubscriptionWhereInput): PostFormSubscriptionPayload
  tag(where: TagSubscriptionWhereInput): TagSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  vote(where: VoteSubscriptionWhereInput): VoteSubscriptionPayload
}

type Tag {
  id: ID!
  title: String!
  board: Board!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type TagConnection {
  pageInfo: PageInfo!
  edges: [TagEdge]!
  aggregate: AggregateTag!
}

input TagCreateInput {
  title: String!
  board: BoardCreateOneWithoutTagsInput!
}

input TagCreateManyInput {
  create: [TagCreateInput!]
  connect: [TagWhereUniqueInput!]
}

input TagCreateManyWithoutBoardInput {
  create: [TagCreateWithoutBoardInput!]
  connect: [TagWhereUniqueInput!]
}

input TagCreateWithoutBoardInput {
  title: String!
}

type TagEdge {
  node: Tag!
  cursor: String!
}

enum TagOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TagPreviousValues {
  id: ID!
  title: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type TagSubscriptionPayload {
  mutation: MutationType!
  node: Tag
  updatedFields: [String!]
  previousValues: TagPreviousValues
}

input TagSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TagWhereInput
  AND: [TagSubscriptionWhereInput!]
  OR: [TagSubscriptionWhereInput!]
  NOT: [TagSubscriptionWhereInput!]
}

input TagUpdateDataInput {
  title: String
  board: BoardUpdateOneRequiredWithoutTagsInput
}

input TagUpdateInput {
  title: String
  board: BoardUpdateOneRequiredWithoutTagsInput
}

input TagUpdateManyInput {
  create: [TagCreateInput!]
  update: [TagUpdateWithWhereUniqueNestedInput!]
  upsert: [TagUpsertWithWhereUniqueNestedInput!]
  delete: [TagWhereUniqueInput!]
  connect: [TagWhereUniqueInput!]
  disconnect: [TagWhereUniqueInput!]
}

input TagUpdateManyWithoutBoardInput {
  create: [TagCreateWithoutBoardInput!]
  delete: [TagWhereUniqueInput!]
  connect: [TagWhereUniqueInput!]
  disconnect: [TagWhereUniqueInput!]
  update: [TagUpdateWithWhereUniqueWithoutBoardInput!]
  upsert: [TagUpsertWithWhereUniqueWithoutBoardInput!]
}

input TagUpdateWithoutBoardDataInput {
  title: String
}

input TagUpdateWithWhereUniqueNestedInput {
  where: TagWhereUniqueInput!
  data: TagUpdateDataInput!
}

input TagUpdateWithWhereUniqueWithoutBoardInput {
  where: TagWhereUniqueInput!
  data: TagUpdateWithoutBoardDataInput!
}

input TagUpsertWithWhereUniqueNestedInput {
  where: TagWhereUniqueInput!
  update: TagUpdateDataInput!
  create: TagCreateInput!
}

input TagUpsertWithWhereUniqueWithoutBoardInput {
  where: TagWhereUniqueInput!
  update: TagUpdateWithoutBoardDataInput!
  create: TagCreateWithoutBoardInput!
}

input TagWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  board: BoardWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [TagWhereInput!]
  OR: [TagWhereInput!]
  NOT: [TagWhereInput!]
}

input TagWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  fullName: String!
  email: String!
  password: String!
  role: String!
  companies(where: CompanyWhereInput, orderBy: CompanyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Company!]
  boards(where: BoardWhereInput, orderBy: BoardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Board!]
  postForms(where: PostFormWhereInput, orderBy: PostFormOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PostForm!]
  isAdmin: Boolean!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  fullName: String!
  email: String!
  password: String!
  role: String!
  companies: CompanyCreateManyWithoutUsersInput
  boards: BoardCreateManyWithoutOwnerInput
  postForms: PostFormCreateManyInput
  isAdmin: Boolean
}

input UserCreateManyWithoutCompaniesInput {
  create: [UserCreateWithoutCompaniesInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutBoardsInput {
  create: UserCreateWithoutBoardsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutBoardsInput {
  fullName: String!
  email: String!
  password: String!
  role: String!
  companies: CompanyCreateManyWithoutUsersInput
  postForms: PostFormCreateManyInput
  isAdmin: Boolean
}

input UserCreateWithoutCompaniesInput {
  fullName: String!
  email: String!
  password: String!
  role: String!
  boards: BoardCreateManyWithoutOwnerInput
  postForms: PostFormCreateManyInput
  isAdmin: Boolean
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  fullName_ASC
  fullName_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  role_ASC
  role_DESC
  isAdmin_ASC
  isAdmin_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  fullName: String!
  email: String!
  password: String!
  role: String!
  isAdmin: Boolean!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  fullName: String
  email: String
  password: String
  role: String
  companies: CompanyUpdateManyWithoutUsersInput
  boards: BoardUpdateManyWithoutOwnerInput
  postForms: PostFormUpdateManyInput
  isAdmin: Boolean
}

input UserUpdateInput {
  fullName: String
  email: String
  password: String
  role: String
  companies: CompanyUpdateManyWithoutUsersInput
  boards: BoardUpdateManyWithoutOwnerInput
  postForms: PostFormUpdateManyInput
  isAdmin: Boolean
}

input UserUpdateManyWithoutCompaniesInput {
  create: [UserCreateWithoutCompaniesInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutCompaniesInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutCompaniesInput!]
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutBoardsInput {
  create: UserCreateWithoutBoardsInput
  update: UserUpdateWithoutBoardsDataInput
  upsert: UserUpsertWithoutBoardsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutBoardsDataInput {
  fullName: String
  email: String
  password: String
  role: String
  companies: CompanyUpdateManyWithoutUsersInput
  postForms: PostFormUpdateManyInput
  isAdmin: Boolean
}

input UserUpdateWithoutCompaniesDataInput {
  fullName: String
  email: String
  password: String
  role: String
  boards: BoardUpdateManyWithoutOwnerInput
  postForms: PostFormUpdateManyInput
  isAdmin: Boolean
}

input UserUpdateWithWhereUniqueWithoutCompaniesInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutCompaniesDataInput!
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutBoardsInput {
  update: UserUpdateWithoutBoardsDataInput!
  create: UserCreateWithoutBoardsInput!
}

input UserUpsertWithWhereUniqueWithoutCompaniesInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutCompaniesDataInput!
  create: UserCreateWithoutCompaniesInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  fullName: String
  fullName_not: String
  fullName_in: [String!]
  fullName_not_in: [String!]
  fullName_lt: String
  fullName_lte: String
  fullName_gt: String
  fullName_gte: String
  fullName_contains: String
  fullName_not_contains: String
  fullName_starts_with: String
  fullName_not_starts_with: String
  fullName_ends_with: String
  fullName_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  role: String
  role_not: String
  role_in: [String!]
  role_not_in: [String!]
  role_lt: String
  role_lte: String
  role_gt: String
  role_gte: String
  role_contains: String
  role_not_contains: String
  role_starts_with: String
  role_not_starts_with: String
  role_ends_with: String
  role_not_ends_with: String
  companies_every: CompanyWhereInput
  companies_some: CompanyWhereInput
  companies_none: CompanyWhereInput
  boards_every: BoardWhereInput
  boards_some: BoardWhereInput
  boards_none: BoardWhereInput
  postForms_every: PostFormWhereInput
  postForms_some: PostFormWhereInput
  postForms_none: PostFormWhereInput
  isAdmin: Boolean
  isAdmin_not: Boolean
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}

type Vote {
  id: ID!
  owner: User!
  post: Post!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type VoteConnection {
  pageInfo: PageInfo!
  edges: [VoteEdge]!
  aggregate: AggregateVote!
}

input VoteCreateInput {
  owner: UserCreateOneInput!
  post: PostCreateOneWithoutVotesInput!
}

input VoteCreateManyWithoutPostInput {
  create: [VoteCreateWithoutPostInput!]
  connect: [VoteWhereUniqueInput!]
}

input VoteCreateWithoutPostInput {
  owner: UserCreateOneInput!
}

type VoteEdge {
  node: Vote!
  cursor: String!
}

enum VoteOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type VotePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type VoteSubscriptionPayload {
  mutation: MutationType!
  node: Vote
  updatedFields: [String!]
  previousValues: VotePreviousValues
}

input VoteSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: VoteWhereInput
  AND: [VoteSubscriptionWhereInput!]
  OR: [VoteSubscriptionWhereInput!]
  NOT: [VoteSubscriptionWhereInput!]
}

input VoteUpdateInput {
  owner: UserUpdateOneRequiredInput
  post: PostUpdateOneRequiredWithoutVotesInput
}

input VoteUpdateManyWithoutPostInput {
  create: [VoteCreateWithoutPostInput!]
  delete: [VoteWhereUniqueInput!]
  connect: [VoteWhereUniqueInput!]
  disconnect: [VoteWhereUniqueInput!]
  update: [VoteUpdateWithWhereUniqueWithoutPostInput!]
  upsert: [VoteUpsertWithWhereUniqueWithoutPostInput!]
}

input VoteUpdateWithoutPostDataInput {
  owner: UserUpdateOneRequiredInput
}

input VoteUpdateWithWhereUniqueWithoutPostInput {
  where: VoteWhereUniqueInput!
  data: VoteUpdateWithoutPostDataInput!
}

input VoteUpsertWithWhereUniqueWithoutPostInput {
  where: VoteWhereUniqueInput!
  update: VoteUpdateWithoutPostDataInput!
  create: VoteCreateWithoutPostInput!
}

input VoteWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  owner: UserWhereInput
  post: PostWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [VoteWhereInput!]
  OR: [VoteWhereInput!]
  NOT: [VoteWhereInput!]
}

input VoteWhereUniqueInput {
  id: ID
}
`