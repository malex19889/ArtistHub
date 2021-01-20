const router = require("express").Router();
const bandApi = require("../controllers/band-api-controller");
const isAuthenticated = require("../config/middleware/isAuthenticated");

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
  .get(bandApi.getAllBands);

router.route("/bands/:id")
  .get(bandApi.getBandById);
module.exports = router;