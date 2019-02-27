import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt } from "graphql";
import { ProductType, findProduct } from "./GrahpQLType";
import { users } from "../../mock";
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
    product: {
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

export { UserType, user, findUser };
