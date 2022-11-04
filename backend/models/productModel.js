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
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    image: [{type: String}],
    tagline: {
      type: String,
      required: true,
    },
    description: [{type: String}],
    brands: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Category",
    },
    color: {
      type: String,
      required: true,
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
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
    review: [reviewSchema],
  },
  {timestamps: true}
);

const Product = mongoose.model("Product", productSchema);

export default Product;
