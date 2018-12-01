import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  JoinColumn,
  ManyToMany,
  OneToMany,
  BaseEntity,
  BeforeInsert
} from "typeorm";
import * as uuid from "uuid/v4";
import { User } from "./User";
import { Tag } from "./Tag";
import { Vote } from "./Vote";
import { Board } from "./Board";

@Entity()
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  details: string;

  @Column()
  joinedPictureUrl: string;

  @Column()
  status: string;

  @ManyToMany(type => Tag, tag => tag.posts)
  @JoinColumn()
  tags: Promise<Tag[]>;

  @OneToMany(type => Vote, vote => vote.post)
  @JoinColumn()
  votes: Promise<Vote[]>;

  @ManyToOne(type => User, user => user.votes)
  owner: Promise<User>;

  @ManyToOne(type => Board, board => board.posts)
  board: Promise<Board>;

  @BeforeInsert()
  addId() {
    this.id = uuid();
  }
}

// type Post {
//   id: ID!
//   title: String!
//   details: String!
//   joinedPictureUrl: String
//   status: String!
//   tags: [Tag!]!
//   votes: [Vote!]!
//   owner: User!
//   board: Board!
//   createdAt: Date!
//   updatedAt: Date!
// }
