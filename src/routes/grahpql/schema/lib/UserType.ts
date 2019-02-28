import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } from "graphql";
import { ProductType, findProduct } from "./GrahpQLType";
import { users_data } from "../../mock";
import _ from "lodash";

const findUser = (id: string) => {
  return _.find(users_data, { id });
};

const findUsers = (id: string) => {
  return _.filter(users_data, { id });
};

const findUsersProducts = (product_id: string) => {
  return _.filter(users_data, { product_id });
};

const UserType: GraphQLObjectType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    account_type: { type: GraphQLString },
    products: {
      type: ProductType,
      resolve(parent: any, args: any) {
        return findProduct(parent.product_id);
      },
    },
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

const users = {
  type: new GraphQLList(UserType),
  resolve(parents: any, args: any) {
    return users_data;
  },
};

export { UserType, user, users, findUser, findUsers, findUsersProducts };
