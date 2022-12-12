import { revealEmpties } from "./reveal-empties.js"
import { revealMines } from "./reveal-mines.js"
import { revealClickedNumber } from "./reveal-clicked-number.js"
import { timer } from "./timer.js"
import { gameOver } from "./game-over.js"


export function handleCellClicks(event, gridArray, gridDefinition) {   

    const mineCounter = parseInt(document.querySelector("#mine-counter").textContent)
    const clickedCellId = event.target.id


    if (event.type === "click" && !event.target.classList.contains("flagged")) {
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
            gameOver()
            return
        }
    }

    if (event.type === "contextmenu") {
        event.target.classList.toggle("flagged")
        gridArray[clickedCellId - 1].flagged = !gridArray[clickedCellId - 1].flagged

        if (gridArray[clickedCellId - 1].flagged) {
            document.querySelector("#mine-counter").textContent = mineCounter - 1
        } else {
            document.querySelector("#mine-counter").textContent = mineCounter + 1
        }

    }

}