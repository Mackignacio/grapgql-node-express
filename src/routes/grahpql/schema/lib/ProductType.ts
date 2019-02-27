import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt } from "graphql";
import { products } from "../../mock";
import _ from "lodash";

const findProduct = (id: any) => {
  return _.find(products, { id });
};

const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    price: { type: GraphQLInt },
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

export { ProductType, product, findProduct };
