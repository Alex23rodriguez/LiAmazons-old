const { ObjectId } = require("mongodb");

let DB;

class GamesDAO {
  static async injectDB(conn) {
    if (DB) return;
    try {
      DB = conn.db(process.env.DB_NAMESPACE).collection("Games");
      // to test if properly connected:
      //   console.log(await DB.findOne());
    } catch (e) {
      console.error(
        `Unable to establich a collection handle in GamesDAO: ${e}`
      );
    }
  }

  static async newGame(white, black, custom = {}) {
    try {
      return await DB.insertOne({ white, black, config });
    } catch (e) {
      console.error(`Unable to create new Game: ${e}`);
    }
  }

  static async getGameById(id) {
    try {
      return await DB.findOne(ObjectId(id));
    } catch (error) {
      console.error(`Unable to fetch game by id: ${error}`);
      return { error };
    }
  }

  static async getRandomGame() {
    try {
      return await DB.findOne();
    } catch (error) {
      console.error(`Unable to fetch random game: ${error}`);
      return { error };
    }
  }
}

module.exports = { GamesDAO };
