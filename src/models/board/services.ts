import { UserInputError, AuthenticationError } from "apollo-server-errors";
import {
  postFormRepository,
  companyRepository,
  userRepository,
  boardRepository
} from "../../entity/_repositories";
import { PostForm, Board } from "../../entity";

export const CreateBoard = async ({ name, url, companyId, userId }) => {
  const board = new Board();
  const postForm = new PostForm();
  board.postForm = postFormRepository().save(postForm);
  board.name = name;
  board.company = companyRepository().findOne(companyId);
  board.url = url;
  board.owner = userRepository().findOne(userId);
  const newBoard = await boardRepository().save(board);
  console.log({ comapny: await newBoard.company });
  return newBoard;
  // return boardRepository().create();
  // return prisma.createBoard({
  //   name,
  //   url,
  //   postForm: {
  //     create: {}
  //   },
  //   company: {
  //     connect: {
  //       id: companyId
  //     }
  //   },
  //   owner: {
  //     connect: {
  //       id: userId
  //     }
  //   }
  // });
};

export const GetBoardCompany = ({ boardId }) => {
  // return prisma.board({ id: boardId }).company();
};

export const GetBoard = async ({ userId, companyId, boardId }) => {
  // const company = await companyRepository().findOne(companyId);
  // console.log({ users: await company.users });
  // console.log({ isUserAllowed: await isUserAllowed });
  return {};
  // const board = boardRepository().findOne({where: {id: boardId, company }})
  // const companyUsers = await prisma
  //   .company({ id: companyId })
  //   .users({ where: { id: userId }, first: 1 });
  // if (!companyUsers) {
  //   throw new AuthenticationError(
  //     `This user is not allowed to fetch company with id: ${companyId} `
  //   );
  // }
  // const boardCompany = await prisma.board({ id: boardId }).company();
  // if (boardCompany && boardCompany.id === companyId) {
  //   return prisma.board({ id: boardId });
  // }
  // throw new UserInputError(`No such board with id: ${boardId}`, {
  //   invalidArgs: "boardId"
  // });
};
