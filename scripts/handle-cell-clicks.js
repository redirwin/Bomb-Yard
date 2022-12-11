import { reRenderBoard } from "./re-render-board.js"
import { revealEmpties } from "./reveal-empties.js"
import { revealNumbersAdjacentEmpties } from "./reveal-numbers-adjacent-empties.js"
import { revealMines } from "./reveal-mines.js"
import { gameOver } from "./game-over.js"


export function handleCellClicks(event, gridArray, gridDefinition) {
    const clickedCellId = event.target.id

    if(gridArray[clickedCellId - 1].type === "empty") {
        revealEmpties(gridArray, clickedCellId, gridDefinition)
        revealNumbersAdjacentEmpties(gridArray, clickedCellId, gridDefinition)
        reRenderBoard(gridArray)
        return
    }

    if(gridArray[clickedCellId - 1].type === "number") {
        return
    }

    if(gridArray[clickedCellId - 1].type === "mine") {
        revealMines(gridArray, clickedCellId)
        reRenderBoard(gridArray)
        gameOver()
        return
    }

}