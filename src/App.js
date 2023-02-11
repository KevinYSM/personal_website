import './App.css';
import Chessboard from "./components/chessboard/chessboard/chessboard";
//import 'bootstrap/dist/css/bootstrap.min.css';

import MobileNavbar from "./components/navbar/mobile/navbar";
import Endcredits from "./components/endcredits/endcredits";
import SearchAlgorithm from "./components/search_algorithm/SearchAlgorithm"
import Projects from "./components/projects/Projects"

import PieceObject from "./components/chessboard/logic/pieceobject"
//import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useEffect, useState } from 'react';
import ChessBoard from "./pages/chesspage"
function App() {
        var pieceSelected=false;

  let main_component=<ChessBoard/>;
  switch(window.location.pathname){
    case "/chessboard":
      main_component=<ChessBoard/>
      break
    case "/search_algorithms":
      main_component=<SearchAlgorithm/>
      break
    case "/projects":
      main_component=<Projects/>
      break
     

  }
  console.log(main_component)


  return (
    <div className="App" >
        <MobileNavbar/>
        
        {main_component}
        
        <Endcredits/>
       
      
      
    </div>
  );
}



export default App;
