export function getShortestPath(mapState){
    let numCols=mapState.length;
    let numRows=mapState[1].length;
    let visitedNodes = Array(numCols).fill().map(() => Array(numRows).fill(-1));
    let sparseVisitedNodes=Array(numCols).fill().map(() => Array(numRows).fill(-1));
    let startingPos=getStartingSquare(mapState);
    console.log(visitedNodes)
    let reachedEnd=false;
    let nodeQueue=[startingPos]
    visitedNodes[startingPos[0]][startingPos[1]]=[0,[startingPos[0]][startingPos[1]]];
    sparseVisitedNodes[startingPos[0]][startingPos[1]]=0;
    let transposed_output = sparseVisitedNodes[0].map((_, colIndex) => sparseVisitedNodes.map(row => row[colIndex]));
    let finalPath=[];
   
    while (reachedEnd!=true){
        if (nodeQueue.length==0){
            break;
        }
        let currentNode=nodeQueue.shift();

        if (mapState[currentNode[0]][currentNode[1]]===3){
            reachedEnd=true;
            finalPath.unshift(currentNode);
            console.log(currentNode)
            let pathCompleted=false;
            let previousNode;
            while (pathCompleted==false){
                previousNode=visitedNodes[currentNode[0]][currentNode[1]][1]
                finalPath.unshift(previousNode);
                currentNode=previousNode;
                if (previousNode==startingPos){
                    pathCompleted=true;
                }
            }
        }
        else{
    
            let adjacentNodes=getAdjacentNodes(mapState, visitedNodes, currentNode, sparseVisitedNodes);
        
            for (let j=0;j<adjacentNodes.length;j++){
                let potentialNextNode=adjacentNodes[j];
                if (visitedNodes[potentialNextNode[0]][potentialNextNode[1]]===-1) //If node is unvisited, add to nodeQueue
                {
                    let updatedVisitedNode=[false,false]
                    updatedVisitedNode[0]=visitedNodes[currentNode[0]][currentNode[1]][0]+1;
                    updatedVisitedNode[1]=currentNode;
                    sparseVisitedNodes[potentialNextNode[0]][potentialNextNode[1]]=visitedNodes[potentialNextNode[0]][potentialNextNode[1]][0];
                    visitedNodes[potentialNextNode[0]][potentialNextNode[1]]=updatedVisitedNode;
                    nodeQueue.push(potentialNextNode);
                }
            }
            
        }

    }
    console.log(visitedNodes)
    console.log(finalPath)
    highlightFinalPath(finalPath)

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

function highlightFinalPath(finalPath){
    for (let i=0; i<finalPath.length; i++){
        let currentSquare=getSquare(finalPath[i]);
        currentSquare.style.backgroundColor="red";

    }
}

function getSquare(coordinates) //use cookies for this
{
    let numRows=10;
    let numCols=20;
    let x_coordinate=coordinates[0];
    let y_coordinate=coordinates[1];

    return (document.getElementById(x_coordinate+(numRows-y_coordinate-1)*numCols))
}
function getAdjacentNodes(mapState, visitedNodes, currentSquare, sparseVisitedNodes){
    let adjacentNodes=[]
    let numCols=mapState.length;
    let numRows=mapState[1].length;
    let pos_change=[[-1,0],[1,0],[0,-1],[0,1]]
    let nextSquare;
  
    for (let i=0;i<pos_change.length;i++){
        
        nextSquare=[ (currentSquare[0]+pos_change[i][0]) , (currentSquare[1]+pos_change[i][1]) ]
        if (nextSquare[0]<numCols && nextSquare[0]>=0) //within bounds
        {
            if (nextSquare[1]<numRows && nextSquare[1]>=0) //within bounds
            {
                
                if (mapState[nextSquare[0]][nextSquare[1]]!=2) //not a wall
                {
                    if (visitedNodes[nextSquare[0]][nextSquare[1]]===-1) //not visited
                    {
                       
                        adjacentNodes.push(nextSquare)
                    } 
                }
                
            }
        }
    }
    return adjacentNodes;
}