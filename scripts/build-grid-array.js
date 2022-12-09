export function buildGridArray(gridSizes) {
    let gridArray = []

    for (let i = 0; i < gridSizes.cellCount; i++) {
        gridArray.push(
            {
                uid: i + 1,
                x: i % gridSizes.columnCount + 1,
                y: Math.floor(i / gridSizes.columnCount) + 1,
                isRowEnd: (i + 1) % gridSizes.columnCount === 0,
                type: "empty",
                content: "",
                cleared: false,
                flagged: false,
                color: ""
            }
        );
    }

    // console.log(gridArray)

    return gridArray;

}


