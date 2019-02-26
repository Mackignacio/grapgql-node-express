import { GraphQLObjectType, GraphQLString } from "graphql";

const UserType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    account_type: { type: GraphQLString },
  }),
});

export { UserType };
