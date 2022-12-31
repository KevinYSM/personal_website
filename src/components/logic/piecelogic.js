import React, { useEffect, useState } from 'react';

function Gamelogic() {

        useEffect(() => {
                addPieces();
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
                addLogic(square);
                square.appendChild(createPiece(piece));
                
                            
        }
        
        function createPiece(piece){
                let pieceImage=document.createElement("img"); 
                pieceImage.src="chess_pieces/default/"+piece+".svg";
                pieceImage.setAttribute("class","pieceImage");
                pieceImage.classList.add(piece);
                
                return pieceImage;
        }

        function addPiecesLogic(){
                let trayPieces=document.getElementsByClassName("traySquare");
        
                for (var i=0;i<trayPieces.length;i++){
                        let trayPiece=trayPieces[i]
                        addLogic(trayPiece);
                }
                
        }
        function addLogic(piece){
               
                
                piece.addEventListener("mousedown", clickPiece);
                piece.addEventListener("mouseup", releasePiece);
                
                piece.addEventListener("touchstart", clickPiece);
                piece.addEventListener("touchend", releasePiece);
                
        }
        function clickPiece(){
             
                pieceSelected=this.firstChild.classList[1];
                
                if (!this.classList.contains("traySquare")){
                        this.firstChild.remove();
                }
                
                
        }
        function releasePiece(){
                //pieceSelected=false;
              
        }

        function docMouseUp(){
                mousedown=false;
                if(document.getElementById("draggable")){
                        document.getElementById("draggable").remove();
                }
                document.body.style.cursor = 'default';
                
                if (pieceSelected){
                        let square_id=document.getElementById("hovered_square").innerHTML;
                   
                        if (square_id){
                                addPiece(document.getElementById(square_id),pieceSelected);
                        }
                }
                pieceSelected=false;
        
        }
        function docMouseMove(event){
                event.preventDefault();
                if (mousedown && pieceSelected){
                        var mousecoords=getMouseLoc(event);
                       
                        dragPiece(pieceSelected, mousecoords);
                }
                
        }
        function docMouseDown(event){
                event.preventDefault();
                mousedown=true;
                if (pieceSelected){
                        var mousecoords=getMouseLoc(event);
                       
                        dragPiece(pieceSelected, mousecoords);
                }
                
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