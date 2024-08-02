import React, { useState } from "react";
import Cell from "./Cell";

function Board() {
  const [boardMatrix, setBoardMatrix] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);

  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (row, col) => {
    if (boardMatrix[row][col] || calculateWinner()) return;

    const newBoardMatrix = boardMatrix.map((r, i) =>
      r.map((cell, j) => (i === row && j === col ? (isXNext ? 'X' : 'O') : cell))
    );
    setBoardMatrix(newBoardMatrix);
    setIsXNext(!isXNext);
  };

  const calculateWinner = () => {
    const lines = [
      // Horizontal
      [boardMatrix[0][0], boardMatrix[0][1], boardMatrix[0][2]],
      [boardMatrix[1][0], boardMatrix[1][1], boardMatrix[1][2]],
      [boardMatrix[2][0], boardMatrix[2][1], boardMatrix[2][2]],
      // Vertical
      [boardMatrix[0][0], boardMatrix[1][0], boardMatrix[2][0]],
      [boardMatrix[0][1], boardMatrix[1][1], boardMatrix[2][1]],
      [boardMatrix[0][2], boardMatrix[1][2], boardMatrix[2][2]],
      // Diagonal
      [boardMatrix[0][0], boardMatrix[1][1], boardMatrix[2][2]],
      [boardMatrix[0][2], boardMatrix[1][1], boardMatrix[2][0]],
    ];
    
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (a && a === b && a === c) return a;
    }
    return null;
  };

  const winner = calculateWinner();
  const status = winner ? `Winner: ${winner}` : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-semibold mb-4">{status}</h1>
      <div className="grid grid-cols-3 gap-1 w-72 h-72">
        {boardMatrix.map((row, rowIndex) =>
          row.map((value, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              value={value}
              onClick={() => handleClick(rowIndex, colIndex)}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Board;
