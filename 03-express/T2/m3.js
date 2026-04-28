//Write an expreess JS to upload file with size limit of 10MB to a specific directory named Data on the server and in tis folder file must be stored  in format of "LJU-file.pdf" where LJU is the filled name 

const express = require("express");
const app = express();
const multer = require("multer");
const fs = require("fs");

const store = multer.diskStorage({
  destination: "Data",
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + file.originalname);
  },
});

const upload = multer({ 
  storage: store,
  limits: {
    fileSize: 10 * 1024 * 1024                                                                            
  } 
});

app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/m1.html");
});

app.post("/uploadfile", upload.single("LJU"), (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).send("Upload failed. File might be over 10MB.");
  }
  
  res.send(`<h1>File ${file.filename} uploaded successfully in ${file.destination}</h1>`);
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
