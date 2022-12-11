import { revealEmptyCells } from "./reveal-empty-cells.js"

export function handleCellClicks(event, gridArray, gridDefinition) {
    const clickedCellId = event.target.id


    gridArray[clickedCellId - 1].type === "empty" && revealEmptyCells(gridArray, clickedCellId, gridDefinition)
}