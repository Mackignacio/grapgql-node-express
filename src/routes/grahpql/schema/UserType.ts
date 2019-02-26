import { users } from "../mock";
import _ from "lodash";

const findBooks = (id: any) => {
  return _.find(users, { id });
};

export { findBooks };
