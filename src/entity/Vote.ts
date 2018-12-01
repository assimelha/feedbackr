import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  BaseEntity,
  BeforeInsert,
  PrimaryColumn
} from "typeorm";
import * as uuid from "uuid/v4";
import { User } from "./User";
import { Post } from "./Post";

@Entity()
export class Vote extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @ManyToOne(type => User, user => user.votes)
  owner: Promise<User>;

  @ManyToOne(type => Post, post => post.votes)
  post: Promise<Post>;

  @BeforeInsert()
  addId() {
    this.id = uuid();
  }
}

// type Vote {
//   id: ID!
//   owner: User!
//   post: Post!
//   createdAt: Date!
//   updatedAt: Date!
// }
