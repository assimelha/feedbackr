import { prisma, User, ID_Input } from "../src/generated/prisma";
import { CreateUser } from "../src/models/user/services";
import * as faker from "faker";
import { CreateBoard } from "../src/models/board/services";

const STATUS = [
  "OPEN",
  "UNDER_REVIEW",
  "PLANNED",
  "IN_PROGRESS",
  "COMPLETE",
  "CLOSED"
];

const seed = async () => {
  const userId = await CreateUser({
    email: "assim@gmail.com",
    password: "password",
    fullName: "Assim",
    companyName: "AceMedia",
    role: "ADMIN"
  }).id();
  const companyId = (await prisma.user({ id: userId }).companies())[0].id;
  const boardId = await CreateBoard({
    name: "feature request",
    url: "feature-request",
    companyId,
    userId
  }).id();
};

seed();
