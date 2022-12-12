
import { updateBoard } from "./update-board.js"

export function revealClickedNumber(gridArray, clickedCellId) {
    gridArray[clickedCellId - 1].state = "revealed"
    
    updateBoard(gridArray, "number click")
}