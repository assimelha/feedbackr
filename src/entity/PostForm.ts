import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  BaseEntity,
  BeforeInsert,
  PrimaryColumn
} from "typeorm";
import * as uuid from "uuid/v4";
import { User } from "./User";
import { Post } from "./Post";

@Entity()
export class PostForm extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column({ default: "Create a Post" })
  heading: string;

  @Column({ default: "Title" })
  title: string;

  @Column({ default: "Short, descriptive title" })
  titlePlaceholder: string;

  @Column({ default: "Details" })
  details: string;

  @Column({ default: "Any additional details…" })
  detailsPlaceholder: string;

  @Column({ default: "Create Post" })
  buttonText: string;

  @Column({ nullable: true })
  description: string;

  @ManyToOne(type => User, user => user.postForms)
  owner: Promise<User>;

  @BeforeInsert()
  addId() {
    this.id = uuid();
  }
}

// type PostForm {
//   id: ID!
//   heading: String!
//   title: String!
//   titlePlaceholder: String!
//   details: String!
//   detailsPlaceholder: String!
//   buttonText: String!
//   description: String
//   owner: User!
//   createdAt: Date!
//   updatedAt: Date!
// }
