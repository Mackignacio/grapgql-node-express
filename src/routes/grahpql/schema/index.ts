import { GraphQLObjectType, GraphQLString, GraphQLSchema } from "graphql";
import { findBooks } from "./UserType";
import { UserType } from "./GrahpQLType";

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: {
        id: { type: GraphQLString },
      },
      resolve(parents, args) {
        return findBooks(args.id);
      },
    },
  },
});

export const schema = new GraphQLSchema({ query: RootQuery });
