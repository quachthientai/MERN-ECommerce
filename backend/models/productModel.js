import mongoose from "mongoose";

const {Schema} = mongoose;

const reviewSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  {timestamps: true}
);

const productSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "User",
    },
    tagLine: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: [{type: String, required: true}],
    description: [{type: String, required: true}],
    brands: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.String,
      required: false,
      ref: "Category",
    },
    isFeatured: {
      type: Boolean,
      required: true,
      default: false,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    color: {
      type: String,
      required: true,
    },
    review: [reviewSchema],
  },
  {timestamps: true}
);

const Product = mongoose.model("Product", productSchema);

export default Product;
