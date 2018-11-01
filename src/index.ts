import { GraphQLServer } from "graphql-yoga";
import { GetUserByToken } from "./models/user/services";
import * as depthLimit from "graphql-depth-limit";
import * as glue from "schemaglue";
import { AuthenticationError } from "apollo-server-errors";
import { User, ID_Input } from "./generated/prisma";

require("dotenv").config();

const { transpileSchema } = require("graphql-s2s").graphqls2s;

const { schema, resolver } = glue("src/models", { mode: "ts" });

const serverOptions = {
  tracing: true,
  playground: "/docs",
  port: 4000,
  endpoint: "/",
  validationRules: [depthLimit(10)]
};

const server = new GraphQLServer({
  typeDefs: transpileSchema(schema),
  directiveResolvers: {
    hasAuth: (next, _, { auth }, { user }) => {
      if (auth && user) {
        return next();
      } else if (auth) {
        throw new AuthenticationError(`Authentication required.`);
      }
      return next();
    },
    hasRole: (next, _, { role }, { user }) => {
      if (role === user.role) return next();
      throw new AuthenticationError(
        `Must have role: ${role}, you have role: ${user.role}`
      );
    }
  },
  resolvers: resolver,
  // put the access token into the context.
  context: async ({ request: req }) => {
    const locale = req.headers["accept-language"];
    const token = req.headers.authorization || "";
    let user = await GetUserByToken(token);
    return {
      user,
      locale
    };
  }
});

server.start(serverOptions, ({ port }) => {
  console.log(`🚀  Server ready at ${port}`);
});
