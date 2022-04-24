import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import GameDataService from "../services/game.service.js";

const Game = () => {
  const [game, setGame] = useState();
  let { id } = useParams();

  const getGame = () => {
    if (id === "rnd") {
      console.log(`no id param. getting random game`);
      GameDataService.getRnd()
        .then((response) => {
          setGame(response.data);
        })
        .catch((e) => {
          console.error(e);
        });
    } else {
      console.log(`the id param is ${id}`);
      GameDataService.get(id)
        .then((response) => {
          setGame(response.data);
        })
        .catch((e) => {
          console.error(e);
        });
    }
  };

  useEffect(() => {
    getGame();
  }, []);

  return game ? <div>{game.moves}</div> : <div>Game not found</div>;
  //   return { json: "test" };
};

export default Game;
