//PB 200 : You have been assigned to develop a user feedback form for a website using Express.js and cookies. Implement the following requirements: Process a form with the following fields: Name, Email , Message , Rating (radio buttons: Bad, Average, Good, Very Good, Excellent) When the user submits the form, store their feedback information (name, email, message, and rating) in a cookie named "feedback" that expires in 10 seconds. Display a confirmation message to the user after successfully submitting the form & Create a link to display the feedback details stored in the "feedback" cookie. When the user click to the link, retrieve the feedback information from the cookie and display it on the page also include a link on the feedback details page to Logout. When the user clicks the link, user redirected to home page. Make app.js file use get method in express js. No need to write html file having form elements. After 10 seconds it will give message "no feedback available" message to user

const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const { v4: uuidv4 } = require("uuid");
app.use(cookieParser());

app.get("/", (req, res) => {
      res.send(`
            <form action="/feedback" method="POST">
                  Name: <input type="text" name="name"><br><br>
                  Email: <input type="email" name="email"><br><br>
                  Message: <textarea name="message"></textarea><br><br>
                  Rating: <input type="radio" name="rating" value="Bad">Bad
                  <input type="radio" name="rating" value="Average">Average
                  <input type="radio" name="rating" value="Good">Good
                  <input type="radio" name="rating" value="Very Good">Very Good
                  <input type="radio" name="rating" value="Excellent">Excellent
                  <br><br>
                  <button type="submit">Submit</button>
            </form>
      `);
});

app.post("/feedback", (req, res) => {
      const feedbackId = uuidv4();
      const feedback = {
            id: feedbackId,
            name: req.body.name,
            email: req.body.email,
            message: req.body.message,
            rating: req.body.rating,
      };
      res.cookie("feedback", JSON.stringify(feedback), {
            expires: new Date(Date.now() + 10000),
      });
      res.send("Feedback submitted successfully!");
});

app.get("/feedback", (req, res) => {
      const feedback = req.cookies.feedback;
      if (feedback) {
            res.send(`
                  <h1>Feedback Details</h1>
                  <p>Name: ${JSON.parse(feedback).name}</p>
                  <p>Email: ${JSON.parse(feedback).email}</p>
                  <p>Message: ${JSON.parse(feedback).message}</p>
                  <p>Rating: ${JSON.parse(feedback).rating}</p>
                  <a href="/">Logout</a>
            `);
      } else {
            res.send("No feedback available.");
      }
});

app.listen(3000, () => {
      console.log("Server running on http://loca