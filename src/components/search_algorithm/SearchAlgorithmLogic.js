export function getShortestPath(mapState){
    let numCols=mapState.length;
    let numRows=mapState[1].length;
    let vistedNodes = Array(numCols).fill().map(() => Array(numRows).fill(-1));
 
    let startingPos=getStartingSquare(mapState);

    let reachedEnd=false;
    let nodeQueue=[startingPos]
    vistedNodes[startingPos[0]][startingPos[1]]=0;
    while (reachedEnd!=true | nodeQueue!=[]){
        for (let i=0; i<nodeQueue.length;i++){
            let node=nodeQueue[i];
            if (mapState[node[0]][node[1]]===3){
                reachedEnd=true;
            }
            else{
                nodeQueue.concat(getAdjacentNodes(mapState, vistedNodes, node));
            }
            vistedNodes[node[0]][node[1]]
        }
    }
    console.log(vistedNodes)



}

function getStartingSquare(mapState){
    let numCols=mapState.length;
    let numRows=mapState[1].length;

  

    for (let i=0;i<numCols; i++){
        for (let j=0;j<numRows;j++){
            if (mapState[i][j]==1){
                return [i,j]
            }
    }
    }
}

function getAdjacentNodes(mapState, visitedNodes, currentSquare){
    let adjacentNodes=[]
    let numCols=mapState.length;
    let numRows=mapState[1].length;
    let pos_change=[[-1,0],[1,0],[0,-1],[0,1]]
    let nextSquare;

    for (let i=0;i<pos_change.length;i++){
        nextSquare=[ (currentSquare[0]+pos_change[i][0]) , (currentSquare[1]+pos_change[i][1]) ]
        if (nextSquare[0]<numRows && nextSquare[0]>=0){
            if (nextSquare[1]<numCols && nextSquare[1]>=0){
                if (mapState[nextSquare[0]][nextSquare[1]]!=2){
                    if (visitedNodes[nextSquare[0]][nextSquare[1]]===-1){
                        adjacentNodes.push(nextSquare)
                    }
                    
                }
                
            }
        }
    }
    return adjacentNodes;
}