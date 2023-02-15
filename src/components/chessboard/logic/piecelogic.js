import React from 'react'

function PieceLogic() {
  
  return (
  <></>
  )
}

export function getLegalMoves(piece, square_id, board_state){
  if (piece && square_id){
          let pieceColour=piece.slice(0,1)
          let pieceType=piece.substring(1)

          if (pieceType==="pawn"){

            return pawnLogic(pieceColour,  square_id, board_state)
          }
  }

  return [4,5]

}

export function pawnLogic(pieceColour, square_id, board_state){
  let direction;
  let possibleMoves=[];
  let legalMoves=[];
  let pieceRank=getRank(square_id)
  if (pieceColour=="w"){
    direction = 1;
    if (pieceRank==2){
      possibleMoves.push(square_id+16);
    }
  }
  else{
    direction = -1;
  }
  console.log(getRank(square_id))


  return legalMoves;
}


function isSquareOccupied(square_id, board_state){
  if (board_state){}
}
function getRank(square_id){
  let rank = Math.floor((63-square_id)/8)+1;
  return rank;
}

