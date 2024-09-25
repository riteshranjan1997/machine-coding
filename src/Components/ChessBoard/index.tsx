import React, { useState } from "react";

// Component for a single chess square
const Square = ({ black, isSelected, onClick }: any) => {
  const style = {
    width: "50px",
    height: "50px",
    backgroundColor: black ? "black" : "white",
    outline: isSelected ? "3px solid red" : "1px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "18px",
  };

  return <div style={style} onClick={onClick}></div>;
};

// Component for the chessboard
const ChessBoard = () => {
  const [selectedCell, setSelectedCell] = useState<any>();

  const handleClick = (row: number, col: number) => {
    setSelectedCell({ row, col });
  };

  const createBoard = () => {
    const board = [];
    for (let row = 0; row < 8; row++) {
      const squares = [];
      for (let col = 0; col < 8; col++) {
        const black = (row + col) % 2 === 1; // Alternate colors
        const isSelected =
          selectedCell &&
          selectedCell?.row === row &&
          selectedCell?.col === col;
        squares.push(
          <Square
            key={`${row}-${col}`}
            black={black}
            isSelected={isSelected}
            onClick={() => handleClick(row, col)}
          />
        );
      }
      board.push(
        <div key={row} style={{ display: "flex" }}>
          {squares}
        </div>
      );
    }
    return board;
  };

  return (
    <div>
      <h1>Chess Board</h1>
      <div style={{ display: "inline-block" }}>{createBoard()}</div>
      {selectedCell && (
        <p>
          Selected Cell: Row {selectedCell.row + 1}, Column{" "}
          {selectedCell.col + 1}
        </p>
      )}
    </div>
  );
};

export default ChessBoard;
