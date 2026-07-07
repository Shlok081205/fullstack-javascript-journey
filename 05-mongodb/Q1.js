// <!--
// Built-in variables:--
// 1. required
// 2. min & max
// 3. match
// 4. minlength &maxlength
// 5. enum
// 6. trim
// 7. uppercase
// 8. lowercase
// 9. default
// 10. validate
// 11. unique
// Que.:--
// defind a mongoose schema for all user schema with the folllowing fields and validation requirements:
// 1.username : it is required and must between 4 to 20 characters must starts the letter and  wnds
// with digit sholuld be trim all leading and trailing spaces should be converted to uppercase before saving
// 2. email : it must be unique across the collection must follow the standard email format
// 3. age : must be a number between 18 to 65
// 4. role : must be either user or admin if value is not provided set to default user

const mg = require("mongoose");
mg.connect("mongodb://127.0.0.1:27017/valid")
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });
mg.pluralize(null);

const userSchema = new mg.Schema({
  username: {
    type: String,
    required: [true, "username is required"],
    minlength: [4, "minimum length should be 4"],
    maxlength: [20, "maximum length should be 20"],
    match: [
      /^[a-zA-Z]+[0-9]+$/,
      "username must starts with letter and ends with digit",
    ],
    trim: true,
    uppercase: true,
  },
  email: {
    type: String,
    unique: true,
    required: [true, "email is required"],
    match: [/\S+@\S+\.\S+/, "invalid email format"],
  },
  age: { type: Number, min: [18, " "], max: [65, " "] },
  role: { type: String, enum: ["user", "admin"], default: "user" },
});

const User = mg.model("User", userSchema);
const createDoc = async () => {
  try {
    const newuser = new User({
      username: "shlok0011",
      email: "s@gmail.com",
      age: 21,
      role: "admin",
    });
    const result = await newuser.save();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
createDoc();
