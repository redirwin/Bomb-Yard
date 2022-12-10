export function buildGridArray(gridDefinition, gridArray) {
    // clear gridArray
    gridArray.length = 0;

    for (let i = 0; i < gridDefinition.cellCount; i++) {
        gridArray.push(
            {
                uid: i + 1,
                x: i % gridDefinition.columnCount + 1,
                y: Math.floor(i / gridDefinition.columnCount) + 1,
                type: "empty", // empty, mine, number, 
                content: "",
                state: "hidden", // hidden, revealed, flagged, exploded
                hasEmptyNeighbor: false,
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

    return gridArray;

}
