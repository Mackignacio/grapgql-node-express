import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { user, users, product, products } from "./lib/GrahpQLType";

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user,
    users,
    product,
    products,
  },
});

export const schema = new GraphQLSchema({ query: RootQuery });
