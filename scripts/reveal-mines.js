import { gameOverSequence } from "./game-over-sequence.js"
import { updateBoard } from "./update-board.js"

export function revealMines(gridArray, clickedCellId) {

    const allGameBoardCells = Array.from(document.querySelectorAll(".cell"))
    const mineCells = allGameBoardCells.filter(cell => gridArray[cell.id - 1].type === "mine")

    mineCells.forEach(cell => {
        cell.classList.add("exploded", "revealed")
        gridArray[clickedCellId - 1].state = "exploded"
        gridArray[clickedCellId - 1].content = "💥"
        
    })

    updateBoard(gridArray, "mine click")
    gameOverSequence()

}
