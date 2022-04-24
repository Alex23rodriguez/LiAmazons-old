const { GamesDAO } = require("../dao/gamesDAO.js");

class GamesCtrl {
  static async getGameById(req, res) {
    // used in get requests to load a specific game to play or spectate
    let id = req.params.id || 0;
    console.log(`getting game by id ${id}`);
    let mygame = await GamesDAO.getGameById(id);
    if (!mygame) {
      res.status(404).json({ moves: "game not found" });
    } else if (mygame.error) {
      res.status(500).json(mygame);
    } else {
      res.json(mygame);
    }
  }

  static async getRandomGame(req, res) {
    console.log("Ctrl: getting random game");
    let mygame = await GamesDAO.getRandomGame();
    if (mygame.error) {
      res.status(500).json(mygame);
    } else {
      res.json(mygame);
    }
  }
}

module.exports = { GamesCtrl };
