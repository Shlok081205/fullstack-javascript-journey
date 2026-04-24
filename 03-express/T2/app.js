//Write an Exrpess JS code which rest api is created for json object named data which contains name id branch city and contact properties. On api page it should display all the content. Upon passing id on the brower url it should display the content having that id(localhost:7899/api/101). Upon passing branch on the browser url it should display the content having that branch (localhost:7899/api/branch/it)

const expr = require("express");
router = expr.Router();

const data = [
  {
    id: 101,
    name: "alex",
    branch: "CSE",
    contact: 1234567890,
    city: "Ahmedabad",
  },
  {
    id: 102,
    name: "brian",
    branch: "CE",
    contact: 2234567890,
    city: "Bhmedabad",
  },
  {
    id: 103,
    name: "catherine",
    branch: "CSE",
    contact: 3234567890,
    city: "Chmedabad",
  },
  {
    id: 104,
    name: "doug",
    branch: "IT",
    contact: 4234567890,
    city: "Dhmedabad",
  },
  {
    id: 105,
    name: "elissia",
    branch: "CSE",
    contact: 5234567890,
    city: "Ehmedabad",
  },
  {
    id: 106,
    name: "elissia",
    branch: "IT",
    contact: 6234567890,
    city: "Fhmedabad",
  },
];

router.get("/", (req, res) => {
  res.set("content-type", "text/html");
  for (i of data) {
    res.write(
      `<h3>ID:${JSON.stringify(i.id)} Name:${i.name} Branch:${i.branch} Contact:${i.contact} City:${i.city}</h3><br>`,
    );
  }
  res.send();
});

router.get("/:id", (req, res) => {
  var current_data = data.filter((i1) => i1.id == req.params.id);

  if (current_data.length > 0) {
    res.send(current_data);
  } else {
    res.send('<h2 style = "color:red">Not Found</h2>');
  }
});

router.get("/branch/:branch", (req, res) => {
  var cd = data.filter(
    (b) =>
      b.branch.toLocaleLowerCase() == req.params.branch.toLocaleLowerCase(),
  );

  if (cd.length > 0) {
    res.send(cd);
  } else {
    res.send('<h2 style = "color:red">Not Found</h2>');
  }
});

module.exports = router;
