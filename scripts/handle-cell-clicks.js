import { revealEmpties } from "./reveal-empties.js"
import { revealMines } from "./reveal-mines.js"
import { revealClickedNumber } from "./reveal-clicked-number.js"
import { gameOverSequence } from "./game-over-sequence.js"

export function handleCellClicks(event, gridArray, gridDefinition) {   

    let flagCounter = parseInt(document.querySelector("#flag-counter").textContent)
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
            gameOverSequence()
            return
        }
    }

    if (event.type === "contextmenu" || event.type === "long-press") {
        event.target.classList.toggle("flagged")
        gridArray[clickedCellId - 1].flagged = !gridArray[clickedCellId - 1].flagged
    } 


          
    if (gridArray[clickedCellId - 1].flagged) {
        document.querySelector("#flag-counter").textContent = flagCounter + 1
    } else {
        document.querySelector("#flag-counter").textContent = flagCounter - 1
    }

}
