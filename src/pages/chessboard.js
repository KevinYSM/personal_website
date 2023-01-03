import React, { useEffect, useState } from 'react';

import Board from "../components/chessboard/chessboard/chessboard";

import MobileNavbar from "../components/navbar/mobile/navbar";
import Endcredits from "../components/endcredits/endcredits";
import PieceTray from "../components/chessboard/piecetray/piecetray"
import Square from "../components/chessboard/square/square"
import Gamelogic from "../components/logic/piecelogic";

import ChessBoard from "../pages/chessboard"
function chessboard() {
  return (
    <div>
       <Gamelogic/>
        <MobileNavbar/>
      <Board num_rows={8} num_cols={8} />
      <PieceTray/>
      <Endcredits/>
    </div>
  )
}

export default chessboard