import React, {useEffect} from 'react'
import "./SearchAlgorithm.css"
import Pig from "../../assets/icons/SVG/pig.svg"
import Pizza from "../../assets/icons/SVG/pizza.svg"

import {getShortestPath} from "./SearchAlgorithmLogic"
function SearchAlgorithm() {
  var leftDown=false;
  var rightDown=false;
  var eraseWalls=false;
  var markerSelected=false;
  var lastHoveredSquare=false;
  var numRows=10;
  var numCols=20;

    window.addEventListener("mousedown", function(e){
      e.preventDefault();
      switch(e.button){
        case 0:
          leftDown=true;

          if (markerSelected){
            var mousecoords=getMouseLoc(e);
            dragMarker(markerSelected, mousecoords);
          }
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
        createSquares(numCols, numRows);
        

        document.getElementById("search_board").addEventListener("contextmenu", function(e){
        
      
          e.preventDefault();
          return false;
        })

        addStartMarker(20);
        addEndMarker(30);

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
            square.addEventListener("mousedown",function(e){
              if (e.which===1){
                if (!isMarker(this)){
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
                }
              }
              
            })
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
    
    square.append(createMarker("start_marker"));
  }

  function addEndMarker(square_id){
    let square=document.getElementById(square_id);
    
    square.append(createMarker("end_marker"));
  }

  function createMarker(markerSelected){
    //start_marker or end_marker
    let marker_class;
    let marker_image;
    if (markerSelected=="start_marker"){
      marker_class="start_marker"
      marker_image=Pig;
    }
    if (markerSelected=="end_marker"){
      marker_class="end_marker"
      marker_image=Pizza;

    }

    let marker= document.createElement("div");
    marker.classList.add(marker_class);
    marker.classList.add("marker");
    let markerImage=document.createElement("img");
    markerImage.classList.add("marker_image")
    marker.append(markerImage);
    markerImage.src=marker_image;
   
    return marker;
  }
  function squareMouseDown(){
   
    
  }

  function startSearch(){
    getShortestPath(getMapState());
  }

  
  function isMarker(square){
    if (!square.firstChild){
      return false;
    }
    if (square.firstChild.classList.contains("start_marker" )){
      return true;
    }
    if (square.firstChild.classList.contains("end_marker" )){
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
    let board_state=[];
    
    for (let j=0;j<numCols;j++){
    
      let board_row=[]
      for (let i=numRows-1;i>=0;i--){
        let square_id=i*numCols+j;
        let current_square=document.getElementById(square_id);
        if (current_square.style.backgroundColor==="blue"){
          board_row.push(2)
        }
        else if (!current_square.firstChild){
          board_row.push(0)
        }
        else if (current_square.firstChild.classList.contains("start_marker")){
          board_row.push(1)
        }
        else if (current_square.firstChild.classList.contains("end_marker")){
          board_row.push(3);
        }
        else{
        }
      }

      board_state.push(board_row);
    }
    return board_state;
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
   
            <div id="start_button" className="button" onClick={startSearch}> <div>Start</div></div>

        </div>

        <div id="placeable_elements">
          
        </div>
    </div>

    
  )
}

export default SearchAlgorithm