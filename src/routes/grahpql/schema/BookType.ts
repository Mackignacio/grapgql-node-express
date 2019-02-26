import { books } from "../mock";
import _ from "lodash";

const findBooks = (id: any) => {
  return _.find(books, { id });
};

export { findBooks };
