import http from "../http-common.js";

class GameDataService {
  get(id) {
    return http.get(`/games/id/${id}`);
  }

  getRnd() {
    return http.get(`/games/rnd`);
  }
}

export default new GameDataService();
