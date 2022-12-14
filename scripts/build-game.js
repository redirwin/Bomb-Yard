import { handleCellClicks } from "./handle-cell-clicks.js";
// import { buildContextOptions } from "./build-context-options.js";

const gameGrid = document.querySelector("#game-grid");
const gridCover = document.querySelector("#grid-cover");
const contextOptions = document.querySelector("#context-options");


export function buildGame(gridArray, cellSize, gridDefinition) {
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

  // buildContextOptions("in-game")

  // contextOptions.addEventListener("click", function (event) {

  //   // console.log(event.target)

  //   if (event.target.id === "undo") {
  //     console.log("undo");
  //   }

  //   if (event.target.id === "end-game") {
  //     console.log("end game");
  //   }

  //   if (event.target.id === "pause-game") {
  //     console.log("pause game");
  //   }

  // })

  // HANDLE STARTING GAME CLICK ---------------------------

  return;
}