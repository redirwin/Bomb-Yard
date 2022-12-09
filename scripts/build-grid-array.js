export function buildGridArray(gridSizes) {
    let gridArray = []

    for (let i = 0; i < gridSizes.cellCount; i++) {
        gridArray.push(
            {
                uid: i + 1,
                x: i % gridSizes.columnCount + 1,
                y: Math.floor(i / gridSizes.columnCount) + 1,
                type: "empty", // empty, mine, number, 
                content: "",
                state: "hidden", // hidden, revealed, flagged, exploded
                color: "",
            }
        );
    }

    // assign edges
    gridArray.forEach((cell) => {
        cell.isEdgePiece = {
            left: cell.x === 1,
            right: cell.x === gridSizes.columnCount,
            top: cell.y === 1,
            bottom: cell.y=== gridSizes.rowCount,
            topLeftCorner: cell.x === 1 && cell.y === 1,
            topRightCorner: cell.x === gridSizes.columnCount && cell.y === 1,
            bottomLeftCorner: cell.y === gridSizes.rowCount && cell.x === 1,
            bottomRightCorner: cell.y === gridSizes.rowCount && cell.x === gridSizes.columnCount,
        }
    })

    // console.log(gridArray)

    return gridArray;

}
