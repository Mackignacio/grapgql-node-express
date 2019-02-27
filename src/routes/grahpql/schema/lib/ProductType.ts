import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt, GraphQLList } from "graphql";
import { UserType, findUsers } from "./GrahpQLType";
import { products } from "../../mock";
import _ from "lodash";

const findProduct = (id: any) => {
  return _.find(products, { id });
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
        return findUsers(parent.id);
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

export { ProductType, product, findProduct };
