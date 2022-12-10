export function handleCellClicks(event, gridArray) {
    const targetGridIndex = event.target.id - 1


    gridArray[targetGridIndex].type === "empty" && revealEmptyCells(targetGridIndex, gridArray)
}