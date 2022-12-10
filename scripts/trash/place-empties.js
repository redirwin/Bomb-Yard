function placeEmpties(gridArray, gridDefinition) {
    // console.log("in place empties")

    const columnCount = gridDefinition.columnCount;

    gridArray.forEach((arraySpot, index) => {
        arraySpot.hasEmptyNeighbor = false;

        if (
            // if cell is empty and next cell is empty
            arraySpot.type === "empty" &&
            index + 1 < gridArray.length &&
            gridArray[index + 1].type === "empty"
        ) {
            arraySpot.hasEmptyNeighbor = true;
        } else if (
            // if cell is empty and previous cell is empty
            arraySpot.type === "empty" &&
            index - 1 >= 0 &&
            gridArray[index - 1].type === "empty"
        ) {
            arraySpot.hasEmptyNeighbor = true;
        } else if (
            // if cell is empty and cell below is empty
            arraySpot.type === "empty" &&
            index + columnCount < gridArray.length &&
            gridArray[index + columnCount].type === "empty"
        ) {
            arraySpot.hasEmptyNeighbor = true;
        } else if (
            // if cell is empty and cell above is empty
            arraySpot.type === "empty" &&
            index - columnCount >= 0 &&
            gridArray[index - columnCount].type === "empty"
        ) {
            arraySpot.hasEmptyNeighbor = true;
        } else if (
            // if cell is empty and cell below and to the right is empty
            arraySpot.type === "empty" &&
            index + columnCount + 1 < gridArray.length &&
            gridArray[index + columnCount + 1].type === "empty"
        ) {
            arraySpot.hasEmptyNeighbor = true;
        } else if (
            // if cell is empty and cell below and to the left is empty
            arraySpot.type === "empty" &&
            index + columnCount - 1 < gridArray.length &&
            gridArray[index + columnCount - 1].type === "empty"
        ) {
            arraySpot.hasEmptyNeighbor = true;
        } else if (
            // if cell is empty and cell above and to the right is empty
            arraySpot.type === "empty" &&
            index - columnCount + 1 >= 0 &&
            gridArray[index - columnCount + 1].type === "empty"
        ) {
            arraySpot.hasEmptyNeighbor = true;
        } else if (
            // if cell is empty and cell above and to the left is empty
            arraySpot.type === "empty" &&
            index - columnCount - 1 >= 0 &&
            gridArray[index - columnCount - 1].type === "empty"
        ) {
            arraySpot.hasEmptyNeighbor = true;
        }    

    })
}