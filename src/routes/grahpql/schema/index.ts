import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { user, product } from "./lib/GrahpQLType";

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user,
    product,
  },
});

export const schema = new GraphQLSchema({ query: RootQuery });
