import { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID } from "graphql";
import { findBook } from "./lib/UserType";
import { UserType } from "./lib/GrahpQLType";

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parents, args) {
        return findBook(args.id);
      },
    },
  },
});

export const schema = new GraphQLSchema({ query: RootQuery });
