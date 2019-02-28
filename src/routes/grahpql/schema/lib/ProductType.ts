import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt, GraphQLList } from "graphql";
import { UserType, findUsers, findUsersProducts } from "./GrahpQLType";
import { products_data } from "../../mock";
import _ from "lodash";

const findProduct = (id: any) => {
  return _.find(products_data, { id });
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
    return products_data;
  },
};

export { ProductType, product, products, findProduct };
