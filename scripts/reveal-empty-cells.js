export function revealEmptyCells(gridArray, clickedCellId, gridDefinition) {

    const columnCount = gridDefinition.columnCount;
 
    const collectAll = []

    const unrevealedEmptyNeighbors = [
        gridArray[clickedCellId - 1],
        ...getUnrevealedAndEmptyNeighbors(clickedCellId - 1)
    ]

    while(unrevealedEmptyNeighbors.length) { 
        unrevealedEmptyNeighbors.forEach((cell) => {
            cell.state = "revealed"
            document.getElementById(cell.uid).classList.add("cleared", "empty")
            collectAll.push(cell)            
        })
        unrevealedEmptyNeighbors.length = 0
        collectAll.forEach((cell) => {
            if(!unrevealedEmptyNeighbors.includes(cell)) {
                unrevealedEmptyNeighbors.push(...getUnrevealedAndEmptyNeighbors(cell.uid - 1))
            } 
        })
    }
 
    function getUnrevealedAndEmptyNeighbors(index) {

        let unrevealedEmptyNeighbors = []

        if (gridArray[index].isEdgePiece.topLeftCorner) {
            isEmptyAndNotRevealed(gridArray[index + 1]) && unrevealedEmptyNeighbors.push(gridArray[index + 1])
            isEmptyAndNotRevealed(gridArray[index + columnCount]) && unrevealedEmptyNeighbors.push(gridArray[index + columnCount])
            isEmptyAndNotRevealed(gridArray[index + columnCount + 1]) && unrevealedEmptyNeighbors.push(gridArray[index + columnCount + 1])
        } else if (gridArray[index].isEdgePiece.topRightCorner) {
            isEmptyAndNotRevealed(gridArray[index - 1]) && unrevealedEmptyNeighbors.push(gridArray[index - 1])
            isEmptyAndNotRevealed(gridArray[index + columnCount]) && unrevealedEmptyNeighbors.push(gridArray[index + columnCount])
            isEmptyAndNotRevealed(gridArray[index + columnCount - 1]) && unrevealedEmptyNeighbors.push(gridArray[index + columnCount - 1])
        } else if (gridArray[index].isEdgePiece.bottomLeftCorner) {
            isEmptyAndNotRevealed(gridArray[index + 1]) && unrevealedEmptyNeighbors.push(gridArray[index + 1])
            isEmptyAndNotRevealed(gridArray[index - columnCount]) && unrevealedEmptyNeighbors.push(gridArray[index - columnCount])
            isEmptyAndNotRevealed(gridArray[index - columnCount + 1]) && unrevealedEmptyNeighbors.push(gridArray[index - columnCount + 1])
        } else if (gridArray[index].isEdgePiece.bottomRightCorner) {
            isEmptyAndNotRevealed(gridArray[index - 1]) && unrevealedEmptyNeighbors.push(gridArray[index - 1])
            isEmptyAndNotRevealed(gridArray[index - columnCount]) && unrevealedEmptyNeighbors.push(gridArray[index - columnCount])
            isEmptyAndNotRevealed(gridArray[index - columnCount - 1]) && unrevealedEmptyNeighbors.push(gridArray[index - columnCount - 1])
        } else if (gridArray[index].isEdgePiece.left) {
            isEmptyAndNotRevealed(gridArray[index + 1]) && unrevealedEmptyNeighbors.push(gridArray[index + 1])
            isEmptyAndNotRevealed(gridArray[index - columnCount]) && unrevealedEmptyNeighbors.push(gridArray[index - columnCount])
            isEmptyAndNotRevealed(gridArray[index + columnCount]) && unrevealedEmptyNeighbors.push(gridArray[index + columnCount])
            isEmptyAndNotRevealed(gridArray[index - columnCount + 1]) && unrevealedEmptyNeighbors.push(gridArray[index - columnCount + 1])
            isEmptyAndNotRevealed(gridArray[index + columnCount + 1]) && unrevealedEmptyNeighbors.push(gridArray[index + columnCount + 1])
        } else if (gridArray[index].isEdgePiece.right) {
            isEmptyAndNotRevealed(gridArray[index - 1]) && unrevealedEmptyNeighbors.push(gridArray[index - 1])
            isEmptyAndNotRevealed(gridArray[index - columnCount]) && unrevealedEmptyNeighbors.push(gridArray[index - columnCount])
            isEmptyAndNotRevealed(gridArray[index + columnCount]) && unrevealedEmptyNeighbors.push(gridArray[index + columnCount])
            isEmptyAndNotRevealed(gridArray[index - columnCount - 1]) && unrevealedEmptyNeighbors.push(gridArray[index - columnCount - 1])
            isEmptyAndNotRevealed(gridArray[index + columnCount - 1]) && unrevealedEmptyNeighbors.push(gridArray[index + columnCount - 1])
        } else if (gridArray[index].isEdgePiece.top) {
            isEmptyAndNotRevealed(gridArray[index + 1]) && unrevealedEmptyNeighbors.push(gridArray[index + 1])
            isEmptyAndNotRevealed(gridArray[index - 1]) && unrevealedEmptyNeighbors.push(gridArray[index - 1])
            isEmptyAndNotRevealed(gridArray[index + columnCount]) && unrevealedEmptyNeighbors.push(gridArray[index + columnCount])
            isEmptyAndNotRevealed(gridArray[index + columnCount + 1]) && unrevealedEmptyNeighbors.push(gridArray[index + columnCount + 1])
            isEmptyAndNotRevealed(gridArray[index + columnCount - 1]) && unrevealedEmptyNeighbors.push(gridArray[index + columnCount - 1])
        } else if (gridArray[index].isEdgePiece.bottom) {
            isEmptyAndNotRevealed(gridArray[index + 1]) && unrevealedEmptyNeighbors.push(gridArray[index + 1])
            isEmptyAndNotRevealed(gridArray[index - 1]) && unrevealedEmptyNeighbors.push(gridArray[index - 1])
            isEmptyAndNotRevealed(gridArray[index - columnCount]) && unrevealedEmptyNeighbors.push(gridArray[index - columnCount])
            isEmptyAndNotRevealed(gridArray[index - columnCount + 1]) && unrevealedEmptyNeighbors.push(gridArray[index - columnCount + 1])
            isEmptyAndNotRevealed(gridArray[index - columnCount - 1]) && unrevealedEmptyNeighbors.push(gridArray[index - columnCount - 1])
        }   else {
            isEmptyAndNotRevealed(gridArray[index + 1]) && unrevealedEmptyNeighbors.push(gridArray[index + 1])
            isEmptyAndNotRevealed(gridArray[index - 1]) && unrevealedEmptyNeighbors.push(gridArray[index - 1])
            isEmptyAndNotRevealed(gridArray[index - columnCount]) && unrevealedEmptyNeighbors.push(gridArray[index - columnCount])
            isEmptyAndNotRevealed(gridArray[index + columnCount]) && unrevealedEmptyNeighbors.push(gridArray[index + columnCount])
            isEmptyAndNotRevealed(gridArray[index - columnCount + 1]) && unrevealedEmptyNeighbors.push(gridArray[index - columnCount + 1])
            isEmptyAndNotRevealed(gridArray[index - columnCount - 1]) && unrevealedEmptyNeighbors.push(gridArray[index - columnCount - 1])
            isEmptyAndNotRevealed(gridArray[index + columnCount + 1]) && unrevealedEmptyNeighbors.push(gridArray[index + columnCount + 1])
            isEmptyAndNotRevealed(gridArray[index + columnCount - 1]) && unrevealedEmptyNeighbors.push(gridArray[index + columnCount - 1])
        }   

        // helper function to check if cell is empty and not revealed
        function isEmptyAndNotRevealed(cell) {
            return (cell.type === "empty" && cell.state != "revealed")
        }

        return unrevealedEmptyNeighbors;

    }



}

