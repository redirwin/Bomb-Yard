export function buildGridArray(gridSizes) {
    let gridArray = []

    for (let i = 0; i < gridSizes.cellCount; i++) {
        gridArray.push(
            {
                cellNumber: i + 1,
                x: i % gridSizes.columnCount + 1,
                y: Math.floor(i / gridSizes.columnCount) + 1,
            }
        );
    }

    gridArray.forEach((cell) => {
        console.log(cell.cellNumber + " (" + cell.x + ", " + cell.y + ")")
    })

}


