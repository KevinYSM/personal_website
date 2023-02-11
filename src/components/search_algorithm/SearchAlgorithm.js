import React, {useEffect} from 'react'
import "./SearchAlgorithm.css"
import Pig from "../../assets/icons/SVG/pig.svg"
function SearchAlgorithm() {
  var leftDown=false;
  var rightDown=false;
  var eraseWalls=false;
  var markerSelected=false;
  var lastHoveredSquare=false;

    window.addEventListener("mousedown", function(e){
      e.preventDefault();
      switch(e.button){
        case 0:
          leftDown=true;
          break;
        case 1:
          rightDown=true;
          break;
      }
      return false;
    })

 
    window.addEventListener("mouseup", function(e){
      document.body.style.cursor = 'default';
      e.preventDefault();
      switch(e.button){
        case 0:
          if (markerSelected){
            
            lastHoveredSquare.appendChild(createMarker(markerSelected))
            document.getElementById("draggable").remove();
          }
          leftDown=false;
          markerSelected=false;
          lastHoveredSquare=false;
          break;
        case 1:
          rightDown=false;
          markerSelected=false;
          lastHoveredSquare=false;
          break;
      }
    
      return false;
    })

    window.addEventListener("mousemove", function(e){
      e.preventDefault();
      if (leftDown && markerSelected){
        var mousecoords=getMouseLoc(e);
        dragMarker(markerSelected, mousecoords);
      }
    })

  

   

    window.oncontextmenu=function(){
      rightDown=false;

    }
    useEffect(() => {
        createSquares(20, 10);
        document.getElementById("search_board").addEventListener("contextmenu", function(e){
        
      
          e.preventDefault();
          return false;
        })
        addStartMarker(20);
        //document.getElementById("board").addEventListener("contextmenu", {highlightSquare});
        },[]);
  
  function getMouseLoc(e) {
    return {
        x: e.pageX,
        y: e.pageY
    };
}
  function returnFalse(){
    return false;
  }
  function createSquares(num_rows, num_cols){
    let num_squares=num_cols*num_rows;
    const board = document.getElementById("search_board");
    board.style.gridTemplateColumns="1fr ".repeat(num_rows);
    for (let i=0;i<num_squares;i++){
            let square = document.createElement("div");
            square.classList.add("search_square");
            square.setAttribute("id", i);
  
            square.addEventListener("mouseover", squareMouseOver)
            square.addEventListener("mousedown",squareMouseDown)
            square.ondragstart=function(){
              return false;
            }
            
            //Add event Listeners
          
            board.appendChild(square);
    }
  }
  function squareMouseOver(){
    if (leftDown & !markerSelected){
      updateWall(this);
    }
    if (leftDown && markerSelected){

      lastHoveredSquare=this;
    }
    
  }

  function addStartMarker(square_id){
    let square=document.getElementById(square_id);
    
    square.append(createMarker(markerSelected));
  }

  function createMarker(markerSelected){
    let startMarker= document.createElement("div");
    startMarker.classList.add("start_marker");
    let startImage=document.createElement("img");
    startImage.classList.add("start_image")
    startMarker.append(startImage);
    startImage.src=Pig;
    return startMarker;
  }
  function squareMouseDown(){
    if (!isStartMarker(this)){
      if (this.style.backgroundColor=="blue"){
        eraseWalls=true;
      }
      else{
        eraseWalls=false;
      }
      updateWall(this);
    }

    else{
      markerSelected=this.firstChild.classList[0];
      this.firstChild.remove();
      if (markerSelected){
        var mousecoords=getMouseLoc(this);
        dragMarker(markerSelected, mousecoords);
      }
      
    }
    
  }

  function isStartMarker(square){
    if (!square.firstChild){
      return false;
    }
    if (square.firstChild.classList.contains("start_marker")){
      return true;
    }
    return false;
  }

  function updateWall(square){
    if (eraseWalls){
      if (square.style.backgroundColor=="blue"){
        square.style.backgroundColor="white"
      }
    }

    else{
      if (square.style.backgroundColor!="blue"){
        square.style.backgroundColor="blue"
      }
    }

    
  }
  function getMapState(){
    
  }

  function dragMarker(markerSelected, mousecoords){
    document.body.style.cursor = 'grabbing';
    var draggedPiece= document.getElementById("draggable");
    if (!draggedPiece){
            draggedPiece=document.createElement("div");
            draggedPiece.classList.add("draggedPiece");
            draggedPiece.setAttribute("id","draggable");
            draggedPiece.style.position = "absolute";
            draggedPiece.style.pointerEvents = "none";

            draggedPiece.appendChild(createMarker(markerSelected));
            document.body.append(draggedPiece);
    }
    let imgWidth=draggedPiece.clientHeight;
    draggedPiece.style.left = (mousecoords.x -imgWidth/2) + 'px'; //to center the image to the mouse
    draggedPiece.style.top = (mousecoords.y -imgWidth/2) + 'px';
            
  
}

  return (
    <div id="search_algorithm_component">
        <div id="search_board_container">
          <div id="search_board" onContextMenu={returnFalse}></div>
        </div>

        <div id="settings_panel">
            <div></div>
        </div>
        <div id="control_panel">
            <div className="button"> <div>Start</div></div>
            
        </div>

        <div id="placeable_elements">
          
        </div>
    </div>

    
  )
}

export default SearchAlgorithm