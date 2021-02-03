const router = require("express").Router();
const bandApi = require("../controllers/band-api-controller");
const isAuthenticated = require("../config/middleware/isAuthenticated");
const passport = require("../config/middleware/jwtAuthenticated");
router.route("/band/register")
  .post(bandApi.createBand);

router.route("/bandmember")
  .post(bandApi.addBandMember);

router.route("/tourdate")
  .post(isAuthenticated, bandApi.addTourDate)
  .put(bandApi.updateTourDate);

router.route("/tourdate/:id")
  .delete(bandApi.deleteTourDate);

router.route("/bands")
  .get(passport.authenticate("jwt", {session:false}) ,bandApi.getAllBands);

router.route("/bands/:id")
  .get(bandApi.getBandById);

router.route("/merch")
  .post(bandApi.addMerch)
  .put()
  .delete();

router.route("/merch/:id")
  .get(bandApi.getBandMerch);
module.exports = router;

