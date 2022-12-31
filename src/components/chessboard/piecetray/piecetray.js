import React, { useEffect, useState } from 'react';
import "./piecetray.css"
import wpawn from "../../../assets/icons/chess_pieces/default/wpawn.svg"

function Piecetray() {
        
        
        
        useEffect(() => {
             addPieces();
                //document.getElementById("board").addEventListener("contextmenu", {highlightSquare});
                },[]);
        
function addPieces(){
    
        let trayPieces=document.getElementsByClassName("traySquare");
        
        for (var i=0;i<trayPieces.length;i++){
                let trayPiece=trayPieces[i]
                let pieceType=trayPiece.id;
             

                addPiece(trayPiece, pieceType);
        }
}

function addPiece(square, piece){
        if (square.hasChildNodes()) {
                square.removeChild(square.firstChild);
            }
        square.appendChild(createPiece(piece));
                    
}

function createPiece(piece){
        let pieceImage=document.createElement("img"); 
        pieceImage.src="chess_pieces/default/"+piece+".svg";
        pieceImage.setAttribute("class","pieceImage");
        pieceImage.classList.add(piece);
        return pieceImage;
}


  return (

    <div id="piecetray_container">
        <div id="piecetray">
                <div className="row white">
                        <div id="wpawn" className="square traySquare"></div>   
                        <div id="wknight" className="square traySquare"></div> 
                        <div id="wbishop" className="square traySquare"></div> 
                        <div id="wrook" className="square traySquare"></div> 
                        <div id="wqueen" className="square traySquare"></div> 
                        <div id="wking" className="square traySquare"></div>      
                </div>

                <div className="row black">
                        <div id="bpawn" className="square traySquare"></div>   
                        <div id="bknight" className="square traySquare"></div> 
                        <div id="bbishop" className="square traySquare"></div> 
                        <div  id="brook" className="square traySquare"></div> 
                        <div id="bqueen" className="square traySquare"></div> 
                        <div id="bking" className="square traySquare"></div> 
                </div>
        </div>
    </div>
  )
  
}




export default Piecetray