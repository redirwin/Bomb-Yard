import { handleCellClicks } from "./handle-cell-clicks.js";

export function buildGame(gridArray, cellSize, gridDefinition) {
  const gameGrid = document.querySelector("#game-grid");
  const gridCover = document.querySelector("#grid-cover");
  gridCover.style.display = "none";

  let boardContent = "";

  gridArray.forEach((cell) => {
    boardContent += `
            <span class="cell" id="${cell.uid}"></span> 
        `;

    if (cell.isRowEnd) {
      boardContent += `<br/>`;
    }
  });

  gameGrid.innerHTML = boardContent;

  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.style.width = cellSize + "px";
    cell.style.height = cellSize + "px";
    cell.addEventListener("click", function (event) {
      event.preventDefault();
      handleCellClicks(event, gridArray, gridDefinition);
    });

    cell.addEventListener("contextmenu", function (event) {
      event.preventDefault();
      handleCellClicks(event, gridArray, gridDefinition);
    });

    cell.addEventListener('long-press', function(event) {
      event.preventDefault();
      handleCellClicks(event, gridArray, gridDefinition);
    });

  });

//   timer("new game", 0);



  // HANDLE STARTING GAME CLICK ---------------------------

    // HELPS WITH DEBUGGING
    // cell.addEventListener("mouseover", () => {
    //     console.log(cell.id)
    // })

  return;
}