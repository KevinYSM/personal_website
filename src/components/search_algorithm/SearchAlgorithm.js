import React, {useEffect} from 'react'
import "./SearchAlgorithm.css"
function SearchAlgorithm() {

    useEffect(() => {
        createSquares(5, 5);

        
        //document.getElementById("board").addEventListener("contextmenu", {highlightSquare});
        },[]);
  return (
    <div id="search_algorithm_component">SearchAlgorithm
        <div id="search_board">

        </div>

        <div id="settings_panel">
            <div></div>
        </div>
        <div id="control_panel">
            <div className="button"> Start</div>
            <div className="button"></div>
            <div className="button"></div>
        </div>
    </div>

    
  )

  function createSquares(num_rows, num_cols){
    let num_squares=num_cols*num_rows;
    const board = document.getElementById("search_board");
    board.style.gridTemplateColumns="1fr ".repeat(num_rows);

    for (let i=0;i<num_squares;i++){
            let square = document.createElement("div");
            square.classList.add("square");
            square.setAttribute("id", i);
  


            
            //Add event Listeners
          
            board.appendChild(square);
    }
  }
}

export default SearchAlgorithm