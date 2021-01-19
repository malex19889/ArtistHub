const express = require("express");
const session = require("express-session"),
  bodyParser = require("body-parser");
const compression = require("compression");
const passport = require("./config/passport");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const db = require("./models");
// require routes
const bandAuthRoutes = require("./routes/bandAuthRoutes");
const bandApiRoutes = require("./routes/bandInfoRoutes");
const userAuthRoutes = require("./routes/userAuthRoutes");
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
  session({ secret: "my great secret", resave: true, saveUninitialized: true })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());


// Use apiRoutes

app.use("/auth/band", bandAuthRoutes);
app.use("/api", bandApiRoutes);
app.use("/auth", userAuthRoutes);
// Send every request to the React app
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

db.sequelize.sync().then(() => {
  app.listen(PORT, function () {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
});