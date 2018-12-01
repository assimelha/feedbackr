import { getRepository } from "typeorm";
import { User, Post, PostForm, Board, Company, Vote } from ".";

export const userRepository = () => getRepository(User);
export const postRepository = () => getRepository(Post);
export const postFormRepository = () => getRepository(PostForm);
export const boardRepository = () => getRepository(Board);
export const companyRepository = () => getRepository(Company);
export const voteRepository = () => getRepository(Vote);
