import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  OneToMany,
  BaseEntity,
  BeforeInsert
} from "typeorm";
import * as uuid from "uuid/v4";
import { User } from "./User";
import { Board } from "./Board";

@Entity()
export class Company extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ default: "#525df9" })
  color: string;

  @Column({ nullable: true })
  logoUrl: string;

  @Column({ nullable: true })
  faviconUrl: string;

  @Column({ unique: true })
  subdomain: string;

  @Column({ nullable: true })
  redirectURL: string;

  @Column({ default: true })
  doSendEmails: boolean;

  @ManyToMany(type => User, user => user.companies)
  users: Promise<User[]>;

  @OneToMany(type => Board, board => board.company)
  boards: Promise<Board[]>;

  @BeforeInsert()
  addId() {
    this.id = uuid();
  }
}

// type Company {
//   id: ID!
//   name: String!
//   color: String!
//   logoUrl: String
//   faviconUrl: String
//   subdomain: String
//   redirectURL: String
//   doSendEmails: Boolean!
//   users: [User!]!
//   boards: [Board!]!
//   createdAt: Date!
//   updatedAt: Date!
// }
