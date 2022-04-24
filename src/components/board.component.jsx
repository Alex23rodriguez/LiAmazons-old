import { useEffect, useState } from "react";

import "./board.styles.css";
import Square from "./square.component.jsx";

import { queenPositions } from "../utils/defaults.js";
import { moveToId, createDiagonalsDict } from "../utils/logic";

const Board = (props) => {
  const [queens, setQueens] = useState(queenPositions[props.size]);
  const [arrows, setArrows] = useState([]);
  const [turn, setTurn] = useState(0);
  const [squares, setSquares] = useState();
  const [canMove, setCanMove] = useState([]);
  const [highlightedSq, setHighlightedSq] = useState([]);
  const [selected, setSelected] = useState();
  const diagonalsDict = createDiagonalsDict(props.size);

  const calculateMoves = (index, qns) => {
    qns = qns || queens; // override state queens if state has not been updated
    let ans = [];
    let diagonals = diagonalsDict[index];
    for (let dir of Object.keys(diagonals)) {
      let temp = [];
      for (let i of diagonals[dir]) {
        if (i < index) {
          // before
          if (qns[0].includes(i) || qns[1].includes(i) || arrows.includes(i)) {
            temp = [];
          } else {
            temp.push(i);
          }
        } else if (i > index) {
          //after
          if (qns[0].includes(i) || qns[1].includes(i) || arrows.includes(i)) {
            break;
          } else {
            temp.push(i);
          }
        }
      }
      ans = ans.concat(temp);
    }
    return ans;
  };

  const makeClickHandler = (i) => () => {
    // unclick
    if (i === selected) {
      setSelected();
      setCanMove([]);
      setHighlightedSq([]);
    }
    // click on queen
    else if (queens[turn].includes(i) && highlightedSq.length !== 2) {
      setSelected(i);
      setCanMove(calculateMoves(i, queens));
      setHighlightedSq([i]);
    } // click on canMove
    else if (canMove.includes(i) && selected !== undefined) {
      let q = Array.from(queens[turn]).filter((j) => j !== selected);
      q.push(i);
      let qns = turn === 0 ? [q, queens[1]] : [queens[0], q];

      setQueens(qns);
      setSelected();
      setCanMove(calculateMoves(i, qns));
      setHighlightedSq([selected, i]);
    } // place arrow
    else if (canMove.includes(i) && selected === undefined) {
      let h = Array.from(highlightedSq);
      h.push(i);
      setArrows(arrows.concat(i));
      setCanMove([]);
      setTurn(1 - turn);
      setHighlightedSq(h);
    } else {
      console.log("other case!");
    }
  };

  useEffect(() => {
    console.log("calling use effect on board component");
    let new_squares = [];
    for (var i = 0; i < props.size * props.size; i++) {
      new_squares.push(
        <Square
          key={i}
          color={
            (highlightedSq.includes(i) ? "H" : "") +
            ((i + Math.floor(i / props.size)) % 2)
          }
          queen={queens[0].includes(i) ? 1 : queens[1].includes(i) ? 2 : 0}
          arrow={arrows.includes(i)}
          handleClick={makeClickHandler(i)}
          // handleClick={(i) => console.log("clicked on ", i)}
          canMove={canMove.includes(i)}
        />
      );
    }
    setSquares(new_squares);
  }, [selected, arrows, queens]);

  return <div className={`board size${props.size}`}>{squares}</div>;
};
export default Board;
