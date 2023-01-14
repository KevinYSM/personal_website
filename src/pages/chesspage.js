import React from 'react';

import Board from "../components/chessboard/chessboard/chessboard";


import PieceTray from "../components/chessboard/piecetray/piecetray"
import Square from "../components/chessboard/square/square"
import Gamelogic from "../components/chessboard/logic/user_pieceinteractions";

import ChessBoard from "./chesspage"
function chessboard() {
  return (
    <div id="chessboard">
       <Gamelogic/>
        
      <Board num_rows={8} num_cols={8} />
      
      
    </div>
  )
}

export default chessboard