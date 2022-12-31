import React, { useEffect, useState } from 'react';

function Gamelogic() {

        useEffect(() => {
                addPiecesLogic();
                   //document.getElementById("board").addEventListener("contextmenu", {highlightSquare});
                   },[]);

        document.addEventListener("mouseup", docMouseUp);
        document.addEventListener("mousemove", docMouseMove);
        document.addEventListener("mousedown", docMouseDown);
        document.addEventListener("keydown", docKeyDown);
        document.addEventListener("keyup", docKeyUp);
        var pieceSelected=false;
        var mousedown=false;


        function addPiecesLogic(){
                let trayPieces=document.getElementsByClassName("traySquare");
        
                for (var i=0;i<trayPieces.length;i++){
                        let trayPiece=trayPieces[i]
                        addLogic(trayPiece);
                }
                
        }
        function addLogic(piece){
                let pieceImage=piece.firstChild;
                
                pieceImage.addEventListener("mousedown", clickPiece);
                pieceImage.addEventListener("mouseup", releasePiece);
        
                pieceImage.addEventListener("touchstart", clickPiece);
                pieceImage.addEventListener("touchend", releasePiece);
                
        }
        function clickPiece(){
                pieceSelected=this.classList[1];
                console.log(pieceSelected);
                
        }
        function releasePiece(){
                pieceSelected=false;
              
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

        function createPiece(piece){
                let pieceImage=document.createElement("img"); 
                pieceImage.src="chess_pieces/default/"+piece+".svg";
                pieceImage.setAttribute("class","pieceImage");
                pieceImage.classList.add(piece);
                return pieceImage;
        }

        
  return (
    <div>gamelogic</div>
  )
}

export default Gamelogic