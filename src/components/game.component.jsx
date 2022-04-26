import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import GameDataService from "../services/game.service.js";
import Board from "./board.component.jsx";

const Game = () => {
  const [game, setGame] = useState();
  let { id } = useParams();

  const getGame = () => {
    if (id === "rnd") {
      console.log(`getting random game`);
      GameDataService.getRnd()
        .then((response) => {
          setGame(response.data);
        })
        .catch((e) => {
          console.error(e);
        });
    } else if (id === "local") {
      setGame({ moves: [] });
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

  return game ? (
    <div>
      <Board size={10} />
    </div>
  ) : (
    <div>Game not found</div>
  );
  //   return { json: "test" };
};

export default Game;
