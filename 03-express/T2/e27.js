//Write Exprees js to session to display how many times a user visited a website if user is visiting a website for the first time then display welcome thankyou for visiting our website else display the count how many times user visited the website for that particular session 

const express = require('express');
const sess = require('express-session');
const app = express();

app.use(sess({
  resave:true,
  saveUninitialized:true,
  secret:'Tempest'
}));

app.get('/', (req, res) => {
  if (!req.session.visitCount) {
    req.session.visitCount = 1;
    res.send("Welcome! Thank you for visiting our website.");
  } else {
    req.session.visitCount++;
    res.send(`You have visited this website ${req.session.visitCount} times.`);
  }
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
