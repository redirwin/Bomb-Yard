export function placeNumbers(gridArray, gridDefinition) {

    gridArray.forEach((cell, index) => {
   
        let adjacentMines = 0;

        if (cell.type !== "mine") {

            if (cell.isEdgePiece.topLeftCorner) {
                if (gridArray[index + 1].type === "mine") adjacentMines++;
                if (gridArray[index + gridDefinition.columnCount].type === "mine") adjacentMines++;
                if (gridArray[index + gridDefinition.columnCount + 1].type === "mine") adjacentMines++;
            } else if (cell.isEdgePiece.topRightCorner) {
                if (gridArray[index - 1].type === "mine") adjacentMines++;
                if (gridArray[index + gridDefinition.columnCount].type === "mine") adjacentMines++;
                if (gridArray[index + gridDefinition.columnCount - 1].type === "mine") adjacentMines++;
            } else if (cell.isEdgePiece.bottomLeftCorner) {
                if (gridArray[index + 1].type === "mine") adjacentMines++;
                if (gridArray[index - gridDefinition.columnCount].type === "mine") adjacentMines++;
                if (gridArray[index - gridDefinition.columnCount + 1].type === "mine") adjacentMines++;
            } else if (cell.isEdgePiece.bottomRightCorner) {
                if (gridArray[index - 1].type === "mine") adjacentMines++;
                if (gridArray[index - gridDefinition.columnCount].type === "mine") adjacentMines++;
                if (gridArray[index - gridDefinition.columnCount - 1].type === "mine") adjacentMines++;
            } else if (cell.isEdgePiece.left) {
                if (gridArray[index + 1].type === "mine") adjacentMines++;
                if (gridArray[index - gridDefinition.columnCount].type === "mine") adjacentMines++;
                if (gridArray[index - gridDefinition.columnCount + 1].type === "mine") adjacentMines++;
                if (gridArray[index + gridDefinition.columnCount].type === "mine") adjacentMines++;
                if (gridArray[index + gridDefinition.columnCount + 1].type === "mine") adjacentMines++;
            } else if (cell.isEdgePiece.right) {
                if (gridArray[index - 1].type === "mine") adjacentMines++;
                if (gridArray[index - gridDefinition.columnCount].type === "mine") adjacentMines++;
                if (gridArray[index - gridDefinition.columnCount - 1].type === "mine") adjacentMines++;
                if (gridArray[index + gridDefinition.columnCount].type === "mine") adjacentMines++;
                if (gridArray[index + gridDefinition.columnCount - 1].type === "mine") adjacentMines++;
            } else if (cell.isEdgePiece.top) {
                if (gridArray[index - 1].type === "mine") adjacentMines++;
                if (gridArray[index + 1].type === "mine") adjacentMines++;
                if (gridArray[index + gridDefinition.columnCount].type === "mine") adjacentMines++;
                if (gridArray[index + gridDefinition.columnCount + 1].type === "mine") adjacentMines++;
                if (gridArray[index + gridDefinition.columnCount - 1].type === "mine") adjacentMines++;
            } else if (cell.isEdgePiece.bottom) {
                if (gridArray[index - 1].type === "mine") adjacentMines++;
                if (gridArray[index + 1].type === "mine") adjacentMines++;
                if (gridArray[index - gridDefinition.columnCount].type === "mine") adjacentMines++;
                if (gridArray[index - gridDefinition.columnCount + 1].type === "mine") adjacentMines++;
                if (gridArray[index - gridDefinition.columnCount - 1].type === "mine") adjacentMines++;
            } else {
                if (gridArray[index - 1].type === "mine") adjacentMines++;
                if (gridArray[index + 1].type === "mine") adjacentMines++;
                if (gridArray[index - gridDefinition.columnCount].type === "mine") adjacentMines++;
                if (gridArray[index - gridDefinition.columnCount + 1].type === "mine") adjacentMines++;
                if (gridArray[index - gridDefinition.columnCount - 1].type === "mine") adjacentMines++;
                if (gridArray[index + gridDefinition.columnCount].type === "mine") adjacentMines++;
                if (gridArray[index + gridDefinition.columnCount + 1].type === "mine") adjacentMines++;
                if (gridArray[index + gridDefinition.columnCount - 1].type === "mine") adjacentMines++;
            }            
            
            if (adjacentMines) {
                cell.type = "number";
                cell.content = adjacentMines;
            } 
            // else cell.content = "";
        }
 
    });

    // console.log(gridArray[0])

}