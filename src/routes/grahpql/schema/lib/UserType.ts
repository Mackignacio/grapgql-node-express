import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } from "graphql";
import { ProductType, findProduct } from "./GrahpQLType";
import models from "../../../../models";
import _ from "lodash";

const model = models["users"];

const findUser = async (id: string) => {
  try {
    return await model.findById(id);
  } catch (error) {
    return [];
  }
};

const findUsers = async () => {
  return await model.find({});
};

const findUsersProducts = async (product_id: string) => {
  try {
    return await model.find({ product_id });
  } catch (error) {
    return [];
  }
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
    return findUsers();
  },
};

export { UserType, user, users, findUser, findUsers, findUsersProducts };
