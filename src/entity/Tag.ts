import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
  ManyToMany,
  BaseEntity,
  PrimaryColumn,
  BeforeInsert
} from "typeorm";
import * as uuid from "uuid/v4";
import { Board } from "./Board";
import { Post } from "./Post";

@Entity()
export class Tag extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @OneToMany(type => Board, board => board.tags)
  board: Promise<Board>;

  @ManyToMany(type => Post, post => post.tags)
  @JoinColumn()
  posts: Promise<Post[]>;

  @BeforeInsert()
  addId() {
    this.id = uuid();
  }
}

// type Tag {
//   id: ID!
//   title: String!
//   board: Board!
//   posts: [Posts!]!
//   createdAt: Date!
//   updatedAt: Date!
// }
