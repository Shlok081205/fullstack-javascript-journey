//Write a express scriptt that accepts single file to be uploaded using the multer middleware and save the file to the speficic directory named lju

express = require("express");
app = express();
multer = require("multer");
app.use(express.static(__dirname, { index: "m1.html" }));
var store = multer.diskStorage({
  destination: "LJU",
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
var upload = multer({ storage: store });
app.post("/uploadfile", upload.single("mypic"), (req, res) => {
  const file = req.file;
  if (file) {
    res.send(
      "<h1>file" +
        file.originalname +
        " has been uploaded successfully! in" +
        file.destination +
        "</h1>",
    );
  }
});
app.listen(3005, () => {
  console.log("runinng.......... on http://localhost:3005/");
});
