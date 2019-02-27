import { users } from "../../mock";
import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt } from "graphql";
import _ from "lodash";

const findUser = (id: any) => {
  return _.find(users, { id });
};

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    account_type: { type: GraphQLString },
  }),
});

const user = {
  type: UserType,
  args: {
    id: { type: GraphQLID },
  },
  resolve(parents: any, args: any) {
    return findUser(args.id);
  },
};

export { user, findUser };
