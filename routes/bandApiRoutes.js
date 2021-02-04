const router = require("express").Router();
const bandApi = require("../controllers/band-api-controller");
const passport = require("../config/middleware/bandJwtAuthenticated");
router.route("/band/register")
  .post(bandApi.createBand);

router.route("/bandmember")
  .post(passport.authenticate("jwt", {session:false}) ,bandApi.addBandMember);

router.route("/tourdate")
  .post(passport.authenticate("jwt", {session:false}), bandApi.addTourDate)
  .put(passport.authenticate("jwt", {session:false}),bandApi.updateTourDate);

router.route("/tourdate/:id")
  .delete(passport.authenticate("jwt", {session:false}),bandApi.deleteTourDate);

router.route("/bands")
  .get(bandApi.getAllBands);

router.route("/bands/:id")
  .get(bandApi.getBandById);

router.route("/merch")
  .post(passport.authenticate("jwt", {session:false}),bandApi.addMerch)
  .put()
  .delete();

router.route("/merch/:id")
  .get(bandApi.getBandMerch)
  .delete(bandApi.deleteMerch);

module.exports = router;