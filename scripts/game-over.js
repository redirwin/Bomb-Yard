import { handleCellClicks } from "./handle-cell-clicks.js";

export function gameOver(gridArray, gridDefinition) {
    console.log("GAME OVER!")
    const gridCover = document.querySelector("#grid-cover");

    gridCover.style.display = "block";
    
}