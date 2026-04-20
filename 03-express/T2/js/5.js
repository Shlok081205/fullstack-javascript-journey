const express = require("express");
const path = require("path");
const app = express();
const PORT = 5000;

// 1. Serve HTML files
app.use(express.static(path.join(__dirname, "../html"), { index: "5.html" }));

// 2. Serve CSS files
app.use(express.static(path.join(__dirname, "../css")));

// 3. Serve Images
app.use(express.static(path.join(__dirname, "../img")));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
