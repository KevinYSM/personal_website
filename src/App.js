import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useEffect, useState } from 'react';
import ChessBoard from "./pages/chessboard"
function App() {
        var pieceSelected=false;

       


  return (
    <div className="App" >
        <ChessBoard/>
       
      
      
    </div>
  );
}



export default App;
