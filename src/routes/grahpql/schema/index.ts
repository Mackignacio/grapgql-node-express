import { GraphQLObjectType, GraphQLString, GraphQLSchema } from "graphql";
import { findBooks } from "./BookType";
import { BookType } from "./GrahpQLType";

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
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
