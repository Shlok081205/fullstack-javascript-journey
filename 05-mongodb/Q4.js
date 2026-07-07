/**
 * Write a node js script using mongoose to perform the following operations on the courses collection 
 * 1.insert multiple course documents 
 * 2.display the course having the highest fees
 * 3.Find the course name "MERN Stack Development"
 * 4.Update the fees and duration to 5 months for the course named "MERN Stack Development" by using findByID and Update
 * 5.Display all online courses having fees less than 20K
 * 6.Display all active courses whos duration id >4 months but exclude courses that are online or belong to cloud category
 * 7.Delete the couse named datascience uising its id
 * 
 * [
{courseName:"MERN Stack Development", instructor:"Niharika Sen", duration:6, fees:18000, mode:"Offline", category:"Web Development", active:true},
{courseName:"Python Programming", instructor:"Rahul Shah", duration:4, fees:12000, mode:"Online", category:"Programming", active:true},
{courseName:"Data Science", instructor:"Priya Patel", duration:8, fees:25000, mode:"Offline", category:"Data Analytics", active:true},
{courseName:"Machine Learning", instructor:"Amit Joshi", duration:7, fees:22000, mode:"Online", category:"Artificial Intelligence", active:false},
{courseName:"Java Full Stack", instructor:"Neha Mehta", duration:6, fees:20000, mode:"Offline", category:"Web Development", active:true},
{courseName:"UI/UX Design", instructor:"Karan Desai", duration:3, fees:10000, mode:"Online", category:"Design", active:true},
{courseName:"Cloud Computing", instructor:"Riya Sharma", duration:5, fees:16000, mode:"Offline", category:"Cloud", active:false}
];
 */

const mongoose = require("mongoose");

// Connect to local MongoDB instance
mongoose.connect("mongodb://127.0.0.1:27017/college")
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.error("Database connection error:", err));

// Define Course Schema
const courseSchema = new mongoose.Schema({
  courseName: { type: String, required: true },
  instructor: { type: String, required: true },
  duration: { type: Number, required: true }, // in months
  fees: { type: Number, required: true },
  mode: { type: String, enum: ["Online", "Offline"], required: true },
  category: { type: String, required: true },
  active: { type: Boolean, required: true }
});

const Course = mongoose.model("Course", courseSchema);

// Dataset array provided in the question
const initialCourses = [
  { courseName: "MERN Stack Development", instructor: "Niharika Sen", duration: 6, fees: 18000, mode: "Offline", category: "Web Development", active: true },
  { courseName: "Python Programming", instructor: "Rahul Shah", duration: 4, fees: 12000, mode: "Online", category: "Programming", active: true },
  { courseName: "Data Science", instructor: "Priya Patel", duration: 8, fees: 25000, mode: "Offline", category: "Data Analytics", active: true },
  { courseName: "Machine Learning", instructor: "Amit Joshi", duration: 7, fees: 22000, mode: "Online", category: "Artificial Intelligence", active: false },
  { courseName: "Java Full Stack", instructor: "Neha Mehta", duration: 6, fees: 20000, mode: "Offline", category: "Web Development", active: true },
  { courseName: "UI/UX Design", instructor: "Karan Desai", duration: 3, fees: 10000, mode: "Online", category: "Design", active: true },
  { courseName: "Cloud Computing", instructor: "Riya Sharma", duration: 5, fees: 16000, mode: "Offline", category: "Cloud", active: false }
];

const runDatabaseOperations = async () => {
  try {
    // Clean up collection before running operations to avoid duplicates
    await Course.deleteMany({});

    // 1. Insert multiple course documents
    const insertedCourses = await Course.insertMany(initialCourses);
    console.log("\n--- Operation 1: Bulk Insertion Successful ---");

    // 2. Display the course having the highest fees (Sort descending, get first item)
    const highestFeeCourse = await Course.findOne().sort({ fees: -1 });
    console.log("\n--- Operation 2: Course with Highest Fees ---");
    console.log(highestFeeCourse);

    // 3. Find the course name "MERN Stack Development"
    const mernCourse = await Course.findOne({ courseName: "MERN Stack Development" });
    console.log("\n--- Operation 3: Found MERN Stack Development ---");
    console.log(mernCourse);

    // 4. Update fees and duration to 5 months for "MERN Stack Development" using findByIdAndUpdate
    // Passing { new: true } returns the updated docum gent
    const updatedMern = await Course.findByIdAndUpdate(
      mernCourse._id,
      { fees: 19500, duration: 5 }, // You can change 19500 to any test fee amount
      { new: true }
    );
    console.log("\n--- Operation 4: Updated MERN Stack Development via ID ---");
    console.log(updatedMern);

    // 5. Display all online courses having fees less than 20K
    const cheapOnlineCourses = await Course.find({
      mode: "Online",
      fees: { $lt: 20000 }
    });
    console.log("\n--- Operation 5: Online Courses < 20K ---");
    console.log(cheapOnlineCourses);

    // 6. Display active courses with duration > 4 months, excluding online or cloud category
    const targetedCourses = await Course.find({
      active: true,
      duration: { $gt: 4 },
      mode: { $ne: "Online" },
      category: { $ne: "Cloud" }
    });
    console.log("\n--- Operation 6: Active Courses > 4 Months (Not Online, Not Cloud) ---");
    console.log(targetedCourses);

    // 7. Delete the course named Data Science using its ID
    const dataScienceCourse = await Course.findOne({ courseName: "Data Science" });
    if (dataScienceCourse) {
      const deletedDoc = await Course.findByIdAndDelete(dataScienceCourse._id);
      console.log("\n--- Operation 7: Deleted Data Science via ID ---");
      console.log(deletedDoc);
    }

  } catch (err) {
    console.error("An error occurred during operations:", err.message);
  } finally {
    // Terminate connection cleanly
    mongoose.connection.close();
    console.log("\nDatabase operations completed. Connection closed.");
  }
};

runDatabaseOperations();
