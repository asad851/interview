import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  retail_price: {
    type: Number,
    required: true,
  },
  retail_price: {
    type: Number,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  sku: {
    type: String,
    required: true,
  },
  distribution_center_id: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Product", productSchema);
