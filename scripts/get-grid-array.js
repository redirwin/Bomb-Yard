export function getGridArray(gridDefinition, gridArray) {
    // clear gridArray
    gridArray.length = 0;

    for (let i = 0; i < gridDefinition.cellCount; i++) {
        gridArray.push(
            {
                type: "", // empty, mine, number, 
                state: "hidden", // hidden, revealed, flagged, exploded
                content: "",
                verifiedAdjacentEmpty: false,
                flagged: false,
                
                uid: i + 1,
                x: i % gridDefinition.columnCount + 1,
                y: Math.floor(i / gridDefinition.columnCount) + 1,
            }
        );
    }

    // assign edges
    gridArray.forEach((cell) => {
        cell.isEdgePiece = {
            left: cell.x === 1,
            right: cell.x === gridDefinition.columnCount,
            top: cell.y === 1,
            bottom: cell.y=== gridDefinition.rowCount,
            topLeftCorner: cell.x === 1 && cell.y === 1,
            topRightCorner: cell.x === gridDefinition.columnCount && cell.y === 1,
            bottomLeftCorner: cell.y === gridDefinition.rowCount && cell.x === 1,
            bottomRightCorner: cell.y === gridDefinition.rowCount && cell.x === gridDefinition.columnCount,
        }
    })

    // console.log(gridArray)
    return gridArray;

}
