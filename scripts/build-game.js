import { handleCellClicks } from "./handle-cell-clicks.js";

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

  contextOptions.innerHTML = `
  <div id="pause-game"><i class="fa fa-pause" aria-hidden="true"></i></div>
    <div id="undo"><i class="fas fa-undo"></i></div>
    <div id="check-board"><i class="fa fa-check" aria-hidden="true"></i><br></div>
    <div id="end-game"><i class="fa-solid fa-stop"></i></div>
  `

  contextOptions.addEventListener("click", function (event) {

    if (event.target.id === "undo") {
      console.log("undo");
    }

    if (event.target.id === "check-board") {
      console.log("check board");
    }

    if (event.target.id === "end-game") {
      console.log("end game");
    }

    if (event.target.id === "pause-game") {
      console.log("pause game");
    }

  })

  // HANDLE STARTING GAME CLICK ---------------------------

  return;
}