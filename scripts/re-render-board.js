import { gameOver } from "./game-over.js";

export function reRenderBoard(gridArray) {

    console.log("reRenderBoard() called")

    const cells = document.querySelectorAll(".cell");

    // console.log(cells)

    cells.forEach((cell) => {
        cell.innerHTML = gridArray[cell.id - 1].content;
        cell.classList.add(gridArray[cell.id - 1].type, gridArray[cell.id - 1].state)
    })
}