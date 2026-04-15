//Create a webserver that accepts a get request with dynamic user id  in the url also accepts additional data like name and age using query parameters.Extract ID from root parameter, name and age from querystrings. returns a JSON  object containing all the data. Sample url = 'http://localhost:3000/user/40?name=test&age=23'

const express = require("express");
const app = express();

app.get("/user/:id", (req, res) => {
  const userId = req.params.id;

  const userName = req.query.name;
  const userAge = req.query.age;

  res.json({
    id: userId,
    name: userName,
    age: userAge,
  });
});

app.listen(3000, () => {
  console.log(
    "Server running on http://localhost:3000/user/40?name=test&age=23",
  );
});
