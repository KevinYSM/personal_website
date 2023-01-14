import React, { useEffect, useState } from 'react';
import PieceObject from "./pieceobject";

function Piecelogic() {

        var board_setup=[
                ["r","n","b","q","k","b","n","r"],
                ["p","p","p","p","p","p","p","p"],
                [],
                [],
                [],
                [],
                ["P","P","P","P","P","P","P","P"],
                ["R","N","B","Q","K","B","N","R"]
        ]
        const useMousePosition = () => {
                const [
                  mousePosition,
                  setMousePosition
                ] = React.useState({ x: null, y: null });
                React.useEffect(() => {
                  const updateMousePosition = ev => {
                    setMousePosition({ x: ev.clientX, y: ev.clientY });
                  };
                  window.addEventListener('mousemove', updateMousePosition);
                  return () => {
                    window.removeEventListener('mousemove', updateMousePosition);
                  };
                }, []);
               
                return mousePosition;
        }
        const mousePosition = useMousePosition();
        const [chessBoard,setChessBoard]=useState(board_setup)
        const [selectedPiece,setSelectedPiece]=useState([0,0]);
        const [releaseSquare,setReleaseSquare]=useState();
        useEffect(()=>{
              
        },[chessBoard])


        useEffect(()=>{
        
                let square=document.getElementById(selectedPiece[1])
          
                if (square){
                        if (!square.classList.contains("traySquare")){
                                square.firstChild.remove();
                        }
                }
                highlightSquare(1);
                
        },[selectedPiece])

        useEffect(()=>{
                if (releaseSquare){
                        addPiece(document.getElementById(releaseSquare),selectedPiece[0])
                        console.log(document.getElementById(releaseSquare))
                        highlightSquare(1);
                }
            
                
        },[releaseSquare])

        useEffect(()=>{

        })
        useEffect(() => {
                addTrayPieces();
                addPiecesLogic();
                addBoardPieces();

                   //document.getElementById("board").addEventListener("contextmenu", {highlightSquare});
                   },[]);

 
        document.addEventListener("mouseup", docMouseUp);
        document.addEventListener("mousemove", docMouseMove);
        document.addEventListener("mousedown", docMouseDown);
        document.addEventListener("keydown", docKeyDown);
        document.addEventListener("keyup", docKeyUp);
        var pieceSelected=false;
        var mousedown=false;

        function addTrayPieces(){
    
                let trayPieces=document.getElementsByClassName("traySquare");
                
                for (var i=0;i<trayPieces.length;i++){
                        let trayPiece=trayPieces[i]
                        let pieceType=trayPiece.id;
                     
        
                        addPiece(trayPiece, pieceType);
                }
        }

        const timer = ms => new Promise(res => setTimeout(res, ms))
        async function addBoardPieces(){
                await timer(30);

                for (let i=0;i<board_setup.length;i++){
                        let row=board_setup[i];
                        for (let j=0;j<row.length;j++){
                                addPiece(document.getElementById(i*8+j),row[j])
                        }
                }
                
        }
        
        function addPiece(square, piece){
                
                if (square)
                {
                        if (square.hasChildNodes()) {
                                square.removeChild(square.firstChild);
                            }
                        
                        square.appendChild(createPiece(translateLetters(piece)));
                }
         
                
                            
        }

        function translateLetters(letter){
                if (letter==="p"){
                        return "bpawn";
                }
                else if (letter==="r"){
                        return "brook";
                }
                else if (letter==="n"){
                        return "bknight";
                }
                else if (letter==="b"){
                        return "bbishop";
                }
                else if (letter==="q"){
                        return "bqueen";
                }
                else if (letter==="k"){
                        return "bking";
                }
                else if (letter==="P"){
                        return "wpawn";
                }
                else if (letter==="R"){
                        return "wrook";
                }
                else if (letter==="N"){
                        return "wknight";
                }
                else if (letter==="B"){
                        return "wbishop";
                }
                else if (letter==="Q"){
                        return "wqueen";
                }
                else if (letter==="K"){
                        return "wking";
                }
                else{
                        return letter;
                }
                
        }
        
        function createPiece(piece){
                let newPiece=document.createElement("div");
                newPiece.classList.add(piece)
                let pieceImage=document.createElement("img"); 
                pieceImage.src="chess_pieces/default/"+piece+".svg";
                pieceImage.setAttribute("class","pieceImage");
                

                newPiece.appendChild(pieceImage);
                addLogic(newPiece);
                return newPiece;
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
                pieceSelected=this.classList[0];
                setSelectedPiece([this.classList[0], this.parentElement.id])
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
                        console.log(pieceSelected);
                        let square_id=document.getElementById("hovered_square").innerHTML;
                        console.log(square_id)
                        if (square_id){
                                setReleaseSquare(square_id);
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
                        setReleaseSquare(false);
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
                        draggedPiece=document.createElement("div");
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

        function highlightSquare(square_id){
                let highlightColour="red";
                let square=document.getElementById(square_id)
                if (square){
                        if ( square.style.backgroundColor==highlightColour){
                                if (square.classList.contains("white")){
                                        square.style.backgroundColor=document.documentElement.style.getPropertyValue('--colourWhite');
                                }
                                else{
                                        square.style.backgroundColor=document.documentElement.style.getPropertyValue('--colourBlack');
                                }
                        }
                 
                        else{
                                square.style.backgroundColor=highlightColour;
                        }
                }
                
        }
        
  return (
    <div></div>
  )
}

export default Piecelogic