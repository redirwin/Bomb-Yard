// import { getUserSettings } from "./get-user-settings.js";
import { getGameBoardSizes } from "./get-game-board-sizes.js";
import { getGridArray } from "./get-grid-array.js";
import { getDifficultyLevel } from "./get-difficulty-level.js";
import { getCellPixelSize } from "./get-cell-pixel-size.js";
import { buildGame } from "./build-game.js";
import { placeMines } from "./place-mines.js";
import { placeNumbers } from "./place-numbers.js";
import { placeEmpties } from "./place-empties.js";
import { buildDropDownSelector } from "./build-drop-down-selector.js";
// import { buildContextOptions } from "./build-context-options.js";
import { timer } from "./timer.js";
import { handleInGameOptions } from "./handle-in-game-options.js";

const newGameBtn = document.querySelector(".new-game-button");
const gridArray = [];
const cellPixelSize = getCellPixelSize();
const gridDefinition = getGameBoardSizes(cellPixelSize);
const flagCounter = document.querySelector("#flag-counter");
// const difficultyOptions = document.querySelectorAll(`.option`);
let difficultySelection = "1";

// UI COMPONENTS ---------------------------

window.addEventListener('load', (event) => {
  buildDropDownSelector();
  getDifficultyLevel()
  // levelSettings();
  // buildContextOptions("default");
  newGame();
});



// NEW GAME BUTTON ---------------------------

export function newGame() {
  newGameBtn.addEventListener("click", function (event) {
    event.preventDefault();
    
    flagCounter.textContent = 0;
    timer("new-game", 0, newGameBtn);

    gridArray.length = 0;
    getGridArray(gridDefinition, gridArray);
    placeMines(
      gridArray,
      getDifficultyLevel(difficultySelection),
      cellPixelSize
    );
    placeNumbers(gridArray, gridDefinition);
    placeEmpties(gridArray);

    buildGame(gridArray, getCellPixelSize(), gridDefinition);

    handleInGameOptions(event);

  });

}

// HANDLE CELL CLICKS ---------------------------

const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
  cell.addEventListener("click", function (event) {
    event.preventDefault();
    handleCellClicks(event);
  });
});


// IN GAME OPTIONS MENU ---------------------------

const inGameOptions = document.querySelectorAll(".in-game-option");

inGameOptions.forEach((option) => {
  option.addEventListener("click", function (event) {
    event.preventDefault();
    handleInGameOptions(event);
  });
});
