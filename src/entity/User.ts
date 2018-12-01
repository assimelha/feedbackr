import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  BaseEntity,
  BeforeInsert,
  PrimaryColumn
} from "typeorm";
import * as uuid from "uuid/v4";
import { Company } from "./Company";
import { Board } from "./Board";
import { Vote } from "./Vote";
import { PostForm } from "./PostForm";

enum RolesEnum {
  ADMIN = "ADMIN",
  USER = "USER"
}

@Entity()
export class User extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  fullName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ type: "enum", enum: RolesEnum })
  role: string;

  @ManyToMany(type => Company, company => company.users)
  @JoinTable()
  companies: Promise<Company[]>;

  @OneToMany(type => Board, board => board.owner)
  @JoinTable()
  boards: Promise<Board[]>;

  @OneToMany(type => Vote, vote => vote.owner)
  @JoinTable()
  votes: Promise<Vote[]>;
  @OneToMany(type => PostForm, postForm => postForm.owner)
  @JoinTable()
  postForms: Promise<PostForm[]>;

  @BeforeInsert()
  addId() {
    this.id = uuid();
  }
}

//   id: ID!
//   fullName: String!
//   email: String!
//   role: Role!
//   companies: [Company!]!
//   boards: [Board!]!
//   createdAt: Date!
//   updatedAt: Date!
