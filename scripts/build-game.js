import { handleCellClicks } from "./handle-cell-clicks.js";

export function buildGame(gridArray, cellSize) {
  
    const gameGrid = document.querySelector("#game-grid");

    let content = "";

    gridArray.forEach((cell) => {
        content += `
            <span class="cell" id="${cell.uid}">${cell.content}</span> 
        `
        // in production if cell is not cleared, no content should show except flags (if flagged)

      if (cell.isRowEnd) {
            content += `<br/>`
        }

    })

    gameGrid.innerHTML = content;

    const cells = document.querySelectorAll(".cell");

    cells.forEach((cell) => {
        cell.style.width = cellSize + "px";
        cell.style.height = cellSize + "px";
        cell.addEventListener("click", function (event) {
            event.preventDefault();
            handleCellClicks(event, gridArray);
        })
    })

    return;
}