const router = require("express").Router();
const db = require("../models");

router.get("/user", (req, res) => {
  // Use a regular expression to search users for req.query.q
  // using case insensitive match. https://docs.mongodb.com/manual/reference/operator/query/regex/index.html
  db.User.find({
    name: { $regex: new RegExp(req.query.q, "i") }
  })
    .then(users => res.json(users))
    .catch(err => {
      console.log(err);
      res.status(422).end();
    });
});

module.exports = router;
