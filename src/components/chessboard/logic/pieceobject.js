import React from "react";
class ChessPiece extends React.Component{
    constructor(props){
        super();
        this.pieceName=props.pieceName;
        this.hasMoved=false;
        this.location=false;
        this.image=this.createPieceImage(props.pieceName);
    }

    createPieceImage(pieceName){
        let pieceImage=document.createElement("img"); 
        pieceImage.src="chess_pieces/default/"+pieceName+".svg";
        pieceImage.setAttribute("class","pieceImage");
        pieceImage.classList.add(pieceName);
        console.log(pieceImage)
        return pieceImage;
    }
    
    releasePiece(){
        //pieceSelected=false;
      
    }

    render(){
        return (
            <div className="piece">
                <div className="pieceImage">
                    <div>{this.createPieceImage("wpawn")}</div>
                </div>
            </div>
        )
    }

    

}
export default ChessPiece;