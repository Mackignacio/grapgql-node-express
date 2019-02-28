import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt, GraphQLList } from "graphql";
import { UserType, findUsers, findUsersProducts } from "./GrahpQLType";
import models from "../../../../models";
import _ from "lodash";

const model = models["products"];

const findProduct = async (id: any) => {
  try {
    return await model.findById(id);
  } catch (error) {
    return [];
  }
};

const findProducts = async () => {
  return await model.find({});
};

const ProductType: GraphQLObjectType = new GraphQLObjectType({
  name: "Product",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    price: { type: GraphQLInt },
    users: {
      type: new GraphQLList(UserType),
      resolve(parent: any, args: any) {
        return findUsersProducts(parent.id);
      },
    },
  }),
});

const product = {
  type: ProductType,
  args: {
    id: { type: GraphQLID },
  },
  resolve(parents: any, args: any) {
    return findProduct(args.id);
  },
};

const products = {
  type: new GraphQLList(ProductType),
  resolve(parents: any, args: any) {
    return findProducts();
  },
};

export { ProductType, product, products, findProduct, findProducts };
