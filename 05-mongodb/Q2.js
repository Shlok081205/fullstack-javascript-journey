/**
 * Define Mongoose Schema
 * Product Schema with following Fields
 * 1.email(required,unique,validated to ensure valide email format, if invalide display error message)
 * 2.product(required,only allow alphanumeric value,if invalid display error message)
 */

const mongoose = require("mongoose");
const validator = require("validator");

const productSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    trim: true,
    validate: [validator.isEmail, "Please provide a valid email format"],
  },
  product: {
    type: String,
    required: [true, "Product name is required"],
    trim: true,
    match: [
      /^[A-Za-z0-9]+$/,
      "Product name must only contain alphanumeric values",
    ],
  },
});

const Product = mongoose.model("Product", productSchema);

const createProduct = async () => {
  try {
    const newProduct = new Product({
      email: "buyer@example.com",
      product: "Laptop2026",
    });

    const result = await newProduct.save();
    console.log("Product saved successfully:", result);
  } catch (err) {
    console.error("Validation Error:", err.message);
  }
};

createProduct();
