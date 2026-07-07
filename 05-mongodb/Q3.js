/**
 * Write NOde js script to define a schema heaving fiels like 
 * 1.name
 * 2.age
 * 3.gender
 * 4.email
 * apply following validation 
 * 1.gender must except values in upper case only allowed valued are MALE,FEMALE 
 * 2.age must except value > 0
 * 3.perform email id validation on email field
 * 4.name field must starts with emp_<name>
 * 5.minimum and maximum length should be 4 and 10 respectively
 * 6.name should be stored
 */




const mongoose = require("mongoose");
const validator = require("validator"); // Requiring third-party validator npm library

// Ensure you run MongoDB on the correct default port 27017
mongoose.connect("mongodb://127.0.0.1:27017/valid")
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.error("Database connection error:", err));

// Define Employee Schema
const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: [4, "Minimum length should be 4 characters"],
    maxlength: [10, "Maximum length should be 10 characters"],
    validate: {
      validator: function (val) {
        // Validation 4: Must start with "emp_" followed by the name
        return val.startsWith("emp_");
      },
      message: "Name field must start with 'emp_'"
    }
  },
  age: {
    type: Number,
    required: [true, "Age is required"],
    // Validation 2: Age must accept value > 0
    min: [1, "Age must be greater than 0"]
  },
  gender: {
    type: String,
    required: [true, "Gender is required"],
    // Validation 1: Gender must accept values in upper case only (MALE, FEMALE)
    enum: {
      values: ["MALE", "FEMALE"],
      message: "Gender must be uppercase and only allowed values are MALE or FEMALE"
    }
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    // Validation 3: Perform email id validation on email field using validator npm library
    validate: {
      validator: function (val) {
        return validator.isEmail(val);
      },
      message: "Please enter a valid email format"
    }
  }
});

const Employee = mongoose.model("Employee", employeeSchema);

// Insertion script demonstrating success and validation catch
const insertEmployee = async () => {
  try {
    const newEmp = new Employee({
      name: "emp_shlok", // Starts with emp_ and total length is 9 (between 4 and 10)
      age: 21,           // > 0
      gender: "MALE",    // Upper case only, allowed value
      email: "shlok@murasame.com" // Valid standard email format checked by 'validator'
    });

    const result = await newEmp.save();
    console.log("Document successfully inserted into database:", result);
  } catch (err) {
    console.error("Validation failed during insert operation:", err.message);
  } finally {
    // Closes connection cleanly after execution
    mongoose.connection.close(); 
  }
};

insertEmployee();
