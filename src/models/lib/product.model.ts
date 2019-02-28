import { Schema, model } from "mongoose";
import paginate = require("mongoose-paginate");

const SchemaOptions = {
  timestamps: {
    createdAt: "DateCreated",
    updatedAt: "DateUpdated",
  },
};

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
    },
    price: {
      type: Number,
      required: [true, "Price is required."],
    },
  },
  SchemaOptions
);

ProductSchema.plugin(paginate);

export const products = model("Product", ProductSchema);
