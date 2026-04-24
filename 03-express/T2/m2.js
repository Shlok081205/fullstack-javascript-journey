//WES that  accepts multiple files maximum number  to be uploaded using multer middleware and saves the files to the specific directory multiple

const express = require("express");
const app = express();
const multer = require("multer");
const path = require("path");

app.use(express.static(__dirname, { index: "m1.html" }));

const store = multer.diskStorage({
  destination: "multiple", // Changed directory name to 'multiple'
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: store });

// .array() accepts the field name and the maximum count
app.post("/uploadmultiple", upload.array("mypics", 5), (req, res) => {
  const files = req.files; // Note: plural 'files'

  if (files && files.length > 0) {
    let names = files.map((f) => f.originalname).join(", ");
    res.send(
      `<h1>Files [${names}] uploaded successfully in ${files[0].destination}</h1>`,
    );
  } else {
    res.send("<h1>No files were uploaded.</h1>");
  }
});

app.listen(3005, () => {
  console.log("Running on http://localhost:3005/");
});
