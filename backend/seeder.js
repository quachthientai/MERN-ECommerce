import mongoose, { sanitizeFilter } from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";

import users from "./data/user.js";
import categories from "./data/categories.js";
import {products} from "./data/dummyProduct.js";

import Product from "./models/productModel.js";
import Users from "./models/userModel.js";
import Order from "./models/orderModel.js";
import Category from "./models/CategoryModel.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await Users.deleteMany();
    await Category.deleteMany();

    const createUsers = await Users.insertMany(users);
    
    const adminUser = createUsers[0]._id;
    let productArr = []
      
    Object.values(products).forEach((category) => {
      category.map((product) => {
        productArr.push({...product, user:adminUser})
      })
    })
    
    const sampleProducts = productArr.map((p) => {
      return p
    })

    
    await Product.insertMany(sampleProducts)
    const createCategories = await Category.insertMany(categories)
    

    
   

    console.log("Data imported!".green.inverse);
    process.exit();

  } catch (err) {
    console.error(`${err}`.red);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await Users.deleteMany();
    await Category.deleteMany();

    console.log("Data destroyed!".red.inverse);
    process.exit();
  } catch (err) {
    console.error(`${err}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "d") {
  destroyData();
} else {
  importData();
}



