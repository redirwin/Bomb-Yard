import { revealEmpties } from "./reveal-empties.js"
import { revealMines } from "./reveal-mines.js"
import { revealClickedNumber } from "./reveal-clicked-number.js"


export function handleCellClicks(event, gridArray, gridDefinition) {
    const clickedCellId = event.target.id

    console.log(gridArray[event.target.id - 1].type)


    if(gridArray[clickedCellId - 1].type === "empty") {
        revealEmpties(gridArray, clickedCellId, gridDefinition)
        return
    }

    if(gridArray[clickedCellId - 1].type === "number") {
        revealClickedNumber(gridArray, clickedCellId)
        return
    }

    if(gridArray[clickedCellId - 1].type === "mine") {
        revealMines(gridArray, clickedCellId)
        return
    }

}