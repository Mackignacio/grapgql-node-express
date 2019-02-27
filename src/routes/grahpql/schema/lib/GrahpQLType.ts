import { GraphQLObjectType, GraphQLString, GraphQLID } from "graphql";

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    account_type: { type: GraphQLString },
  }),
});

export { UserType };
