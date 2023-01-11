import './App.css';
import MobileNavbar from "./components/navbar/mobile/navbar";
import Endcredits from "./components/endcredits/endcredits";
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useEffect, useState } from 'react';
import ChessBoard from "./pages/chessboard"
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
