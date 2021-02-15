import React, { useState } from "react"
import Square from "./Square"

export default function Board() {
    const [boardSquares, setboardSquares ] = useState(Array(9).fill(null)) // <-- Here we said we filled an array with 9 null values
    const [xIsNext, setXIsNext] = useState(true)

    const handleClick = (index) => {

    //Copy of board state
    const squares = [...boardSquares]

    // if the index of the borad is fillen, return !
    if(squares[index]) return;
    
    //add X or O
    squares[index] = xIsNext ? "X" : "O";

    // set state of the board
    setboardSquares(squares);

    // set state of the turn
    setXIsNext(!xIsNext)
    }

    //Create board

    // Create a render square function
     // take in an index
      // return a square with correct value and function 
    const renderSquare = (index) => {
        return <Square value={boardSquares[index]} onClick={() => handleClick(index)} /> 
    }

    //Initialize status
    let status;
    const winner = calculateWinner(boardSquares);
    status = winner ? `Winner is: ${winner}` : `Next player: ${xIsNext ? "X" : "O"}`

    return (
        <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
    )

    //Function that calculates winner
    function calculateWinner(squares) {
     // Get our set of winning lines
        const winningLines = [
            [0, 1, 2]
            [3, 4, 5]
            [6, 7, 8]
            [0, 3, 6]
            [1, 4, 7]
            [2, 5, 8]
            [0, 4, 8]
            [2, 4, 6]
        ]
     // Loop throuh this set
     for (let i = 0; i < winningLines.length; i++) {
        // Check to see if values in our squares arra fulfill the winning request
        const [a, b, c] = winningLines[i]; // Lines i is array of winningLines a, b, c = equal to EXAMPLE: 0, 1, 2 
        // if, return winner
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
      }
     // Else return nothing
        return null
    }
}