import React, { useEffect, useState } from 'react';
import "./piecetray.css"
import wpawn from "../../../assets/icons/chess_pieces/default/wpawn.svg"
function Piecetray() {
        document.addEventListener("mouseup", docMouseUp);
        document.addEventListener("mousemove", docMouseMove);
        document.addEventListener("mousedown", docMouseDown);
        document.addEventListener("keydown", docKeyDown);
        document.addEventListener("keyup", docKeyUp);
        var pieceSelected=false;
        var mousedown=false;
        useEffect(() => {
             addPieces();
                //document.getElementById("board").addEventListener("contextmenu", {highlightSquare});
                },[]);
        function clickPiece(){
                pieceSelected=this.classList[1];
                console.log(pieceSelected);
                
        }
        function releasePiece(){
                pieceSelected=false;
              
        }
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
        pieceImage.addEventListener("mousedown", clickPiece);
        pieceImage.addEventListener("mouseup", releasePiece);

        pieceImage.addEventListener("touchstart", clickPiece);
        pieceImage.addEventListener("touchend", releasePiece);
        return pieceImage;
}
function docMouseUp(){
        mousedown=false;
        document.getElementById("draggable").remove();
        document.body.style.cursor = 'default';
       

}
function docMouseMove(event){
        
        if (mousedown && pieceSelected){
                var mousecoords=getMouseLoc(event);
                console.log(mousecoords);
                dragPiece(pieceSelected, mousecoords);
        }
        
}
function docMouseDown(){
        mousedown=true;
      
        
}

function docKeyDown(){

}
function docKeyUp(){

}

function getMouseLoc(e) {
        return {
            x: e.pageX,
            y: e.pageY
        };
    }
function dragPiece(pieceSelected, mousecoords){
        document.body.style.cursor = 'grabbing';
        var draggedPiece= document.getElementById("draggable");
        if (!draggedPiece){
                var draggedPiece=document.createElement("div");
                draggedPiece.classList.add("draggedPiece");
                draggedPiece.setAttribute("id","draggable");
                draggedPiece.style.position = "absolute";
                draggedPiece.style.pointerEvents = "none";

                draggedPiece.appendChild(createPiece(pieceSelected));
                document.body.append(draggedPiece);
        }
        let squareSize= document.documentElement.style.getPropertyValue('--squareSize');
        let imgWidth=draggedPiece.clientHeight;
        draggedPiece.style.left = (mousecoords.x -imgWidth/2) + 'px'; //to center the image to the mouse
        draggedPiece.style.top = (mousecoords.y -imgWidth/2) + 'px';
                
      
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