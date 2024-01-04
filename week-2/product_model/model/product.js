import mongoose from "mongoose";
import detailsSchema from "./details.js";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
    },
    details: detailsSchema,
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
