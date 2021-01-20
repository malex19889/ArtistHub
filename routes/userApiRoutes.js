const router = require("express").Router();
const userApi = require("../controllers/user-api-controller");
const isAuthenticated = require("../config/middleware/isAuthenticated");

router.route("/user/register")
  .post(userApi.createUser);

router.route("/favorites")
  .post(isAuthenticated, userApi.addfavorite);


router.route("/favorites/:id")
  .get(isAuthenticated, userApi.getFavorites)
  .delete(isAuthenticated, userApi.deleteFavorite);








module.exports = router;