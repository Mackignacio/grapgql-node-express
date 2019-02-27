import { users } from "../../mock";
import _ from "lodash";

const findBook = (id: any) => {
  return _.find(users, { id });
};

export { findBook };
