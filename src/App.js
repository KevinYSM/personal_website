import './App.css';
import Chessboard from "./components/chessboard/chessboard/chessboard";
//import 'bootstrap/dist/css/bootstrap.min.css';

import MobileNavbar from "./components/navbar/mobile/navbar";
import Endcredits from "./components/endcredits/endcredits";

import PieceObject from "./components/chessboard/logic/pieceobject"
//import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useEffect, useState } from 'react';
import ChessBoard from "./pages/chesspage"
function App() {
        var pieceSelected=false;

       


  return (
    <div className="App" >
        <MobileNavbar/>
       
        <ChessBoard/>
        <Endcredits/>
       
      
      
    </div>
  );
}



export default App;
