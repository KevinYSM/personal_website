
import React, { useEffect, useState } from 'react';
import './chessboard.css'

export default function Chessboard(props) {
        
        var num_cols=props.num_cols;
        var num_rows=props.num_rows;
useEffect(() => {
        createSquares(num_rows, num_cols);
        //document.getElementById("board").addEventListener("contextmenu", {highlightSquare});
        },[]);
  return (

    <div id="board_container">
        <div id="board" onContextMenu={e=>highlightSquare(e)}></div>

    </div>
  )
  
}




function createSquares(num_cols, num_rows){
        let num_squares=num_cols*num_rows;
        const board = document.getElementById("board");
        board.style.gridTemplateColumns="1fr ".repeat(num_rows);

        for (let i=0;i<num_squares;i++){
                let square = document.createElement("div");
                square.classList.add("square");
                square.setAttribute("id", "square"+i);
                square.classList.add(getSquareColor(i, num_rows));

                
                //Add event Listeners
                square.addEventListener("click", clickSquare);
                
                board.appendChild(square);
        }


}

function getSquareColor(square_id, num_cols) {
        let row = Math.floor(square_id / num_cols);
    
        if (row % 2 === 0) { //if an even row (0, 2, 4, etc.)
            if (square_id % 2 === 0) {
                return "white";
            }
            else {
                return "black";
            }
        }
        else { //if an odd row (1, 3, 5, etc.)
    
            if (square_id % 2 === 1) {
                return "white";
            }
            else {
                return "black";
            }
        }
    }

    function clickSquare(){
        var clickColor="blue"
        if (this.style.backgroundColor===clickColor)
        {
                if (this.classList.contains("white")){
                        this.style.backgroundColor="white";
                }
                else{
                        this.style.backgroundColor="black";
                }
        }
        else{
                this.style.backgroundColor=clickColor;
        }
        
    }

    function highlightSquare(){
        
    }

   