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
}

module.exports = { GamesDAO };
