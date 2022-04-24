const { GamesCtrl } = require("./games.controller.js");

const router = require("express").Router();

// router.route("/games/rnd").get((req, res) => {
//   console.log("getting random game");
//   res.json("lol");
// });
router.route("/games/id/:id").get(GamesCtrl.getGameById);
router.route("/games/rnd").get(GamesCtrl.getRandomGame);

module.exports = router;
