import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
  ManyToOne,
  Index,
  BaseEntity,
  PrimaryColumn,
  BeforeInsert
} from "typeorm";
import * as uuid from "uuid/v4";
import { User } from "./User";
import { PostForm } from "./PostForm";
import { Company } from "./Company";
import { Tag } from "./Tag";
import { Post } from "./Post";

@Entity()
@Index(["name", "company"], { unique: true })
export class Board extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  url: string;

  @Column({ default: true })
  isPublic: boolean;

  @OneToOne(type => PostForm)
  @JoinColumn()
  postForm: Promise<PostForm>;

  @ManyToOne(type => Company, company => company.boards)
  company: Promise<Company>;

  @ManyToOne(type => User, user => user.boards)
  owner: Promise<User>;

  @OneToMany(type => Tag, tag => tag.board)
  tags: Promise<Tag[]>;

  @OneToMany(type => Post, post => post.board)
  posts: Promise<Post[]>;

  @BeforeInsert()
  addId() {
    this.id = uuid();
  }
}

// type Board {
//   id: ID!
//   name: String!
//   url: String!
//   isPublic: Boolean!
//   postForm: PostForm!
//   company: Company!
//   owner: User!
//   tags: [Tag!]!
//   posts: [Post!]!
//   createdAt: Date!
//   updatedAt: Date!
// }
