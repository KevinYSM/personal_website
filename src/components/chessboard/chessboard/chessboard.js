
import React, { useEffect, useState } from 'react';
import './chessboard.css'
import Gamelogic from "../../logic/user_pieceinteractions";


export default function Chessboard(props) {
        
        var num_cols=props.num_cols;
        var num_rows=props.num_rows;
useEffect(() => {
        createSquares(num_rows, num_cols);
        spiralRenderSquares(27, "clockwise"); //make this trigger on display
   
        //document.getElementById("board").addEventListener("contextmenu", {highlightSquare});
        },[]);
  return (

    <div id="chessboard_container">
        
        <div id="board" onContextMenu={e=>highlightSquare(e)}></div>

        <div id="hovered_square"></div>
    </div>
  )
  
}


function setupBoard(){
        addPiece(1,"wpawn")
}
function addPiece(){}

function createSquares(num_cols, num_rows){
        let num_squares=num_cols*num_rows;
        const board = document.getElementById("board");
        board.style.gridTemplateColumns="1fr ".repeat(num_rows);

        for (let i=0;i<num_squares;i++){
                let square = document.createElement("div");
                square.classList.add("square");
                square.setAttribute("id", i);
                square.classList.add("clear");
                square.classList.add(getSquareColor(i, num_rows));

                
                //Add event Listeners
                square.addEventListener("click", clickSquare);
                square.addEventListener("mouseover",updateHoverSquare)
                square.addEventListener("mouseleave", updateLeaveSquare)
                board.appendChild(square);
        }


}

const timer = ms => new Promise(res => setTimeout(res, ms))
async function spiralRenderSquares(starting_square, turning_direction){      
        //directions: left, down, right, up
        let clockwise_order=["right","down","left","up"];
        let anticlockwise_order=["left", "down","right","up"];
        let order_selected;
        let num_steps=1;
 
        let next_square=starting_square;
        let next_turn;
        if (turning_direction==="clockwise"){
              
                order_selected=clockwise_order;
                if (starting_square===27){
                        next_turn=0;
                }
                else if (starting_square===28){
                        next_turn=1;
                }
                else if (starting_square===36){
                        next_turn=2;
                }
                else{
                        next_turn=3;
                }
                
        }
        else{
                order_selected=anticlockwise_order;
                if (starting_square===27){
                        next_turn=1;
                }
                else if (starting_square===28){
                        next_turn=0;
                }
                else if (starting_square===36){
                        next_turn=3;
                }
                else{
                        next_turn=2;
                }
        }
        let num_squares=0;
        for (let i=1;i<9;i++){
                for (let j=0; j<2;j++){
                        for (let k=0;k<num_steps;k++){
                                
                                makeSquareVisible(document.getElementById(next_square));
                                num_squares+=1
                        
                                if(order_selected[next_turn]==="left"){
                                        next_square-=1;
                                }
                                else if(order_selected[next_turn]==="right"){
                                        next_square+=1;
                                }
                                else if(order_selected[next_turn]==="up"){
                                        next_square=next_square-8;
                                }
                                else if(order_selected[next_turn]==="down"){
                                        next_square=next_square+8
                                }
                                await timer(30);
                        }
                        next_turn=(next_turn+1)%4;

                        if (i===8){
                                break;
                        }
                        
                }
                num_steps=num_steps+1;

        }
}


function getSquareId(column, row){
        //square id 0 has column 1 row 1
        let square_id=column-1+8*row
        return square_id;
}

function updateLeaveSquare(){
        document.getElementById("hovered_square").innerHTML=false;
}
function updateHoverSquare(){
        
        document.getElementById("hovered_square").innerHTML=this.id;
      
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

    function makeSquareVisible(square){
        square.classList.remove("clear")
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

   