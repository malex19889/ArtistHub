const express = require("express");
const session = require("express-session");
const compression = require("compression");
const passport = require("./config/passport");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const db = require("./models");
// require routes
const apiRoutes = require("./routes/apiRoutes");
const userApiRoutes = require("./routes/userApiRoutes");
// Define middleware here
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Use sessions to keep track of our user's login status
app.use(
  session({ secret: "my great secret", resave: true, saveUninitialized: true, cookie: {
    maxAge: 3600000,
    sameSite: true
  } })
);
app.use(passport.initialize());
app.use(passport.session());


// Use apiRoutes

app.use("/api", apiRoutes);
app.use("/user", userApiRoutes);
// Send every request to the React app
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

db.sequelize.sync().then(() => {
  app.listen(PORT, function () {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
});