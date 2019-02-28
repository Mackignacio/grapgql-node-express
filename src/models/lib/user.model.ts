import { Schema, model } from "mongoose";
import paginate = require("mongoose-paginate");

const SchemaOptions = {
  timestamps: {
    createdAt: "DateCreated",
    updatedAt: "DateUpdated",
  },
};

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
    },
    account_type: {
      type: String,
      required: [true, "Price is required."],
    },
  },
  SchemaOptions
);

UserSchema.plugin(paginate);

export const users = model("Users", UserSchema);
