import React from "react";
import { useState } from "react";
import ButtonTic from "./components/ButtonTic";

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill());
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) return;

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (squares[a] && squares[a] === squares[b] && squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(squares);
  let status = "";

  winner
    ? (status = `Winner: ${winner}`)
    : (status = `Next Player: ${xIsNext ? "X" : "O"}`);

  return (
    <>
      <h1>{status}</h1>
      <div className="flex flex-wrap w-[105px] h-[105px]">
        <ButtonTic btnText={squares[0]} btnEvent={() => handleClick(0)} />
        <ButtonTic btnText={squares[1]} btnEvent={() => handleClick(1)} />
        <ButtonTic btnText={squares[2]} btnEvent={() => handleClick(2)} />
        <ButtonTic btnText={squares[3]} btnEvent={() => handleClick(3)} />
        <ButtonTic btnText={squares[4]} btnEvent={() => handleClick(4)} />
        <ButtonTic btnText={squares[5]} btnEvent={() => handleClick(5)} />
        <ButtonTic btnText={squares[6]} btnEvent={() => handleClick(6)} />
        <ButtonTic btnText={squares[7]} btnEvent={() => handleClick(7)} />
        <ButtonTic btnText={squares[8]} btnEvent={() => handleClick(8)} />
      </div>
    </>
  );
};

export default App;
