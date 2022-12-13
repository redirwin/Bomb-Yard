// import { getUserSettings } from "./get-user-settings.js";
import { getGameBoardSizes } from "./get-game-board-sizes.js";
import { getGridArray } from "./get-grid-array.js";
import { getDifficultyLevel } from "./get-difficulty-level.js";
import { getCellPixelSize } from "./get-cell-pixel-size.js";
import { buildGame } from "./build-game.js";
import { placeMines } from "./place-mines.js";
import { placeNumbers } from "./place-numbers.js";
import { placeEmpties } from "./place-empties.js";
import { timer } from "./timer.js";
import { buildDropDownSelector } from "./build-drop-down-selector.js";

const newGameBtn = document.querySelector("#new-game-button");
const gridArray = [];
const cellPixelSize = getCellPixelSize();
const gridDefinition = getGameBoardSizes(cellPixelSize);
const gameBoard = document.querySelector("#game-grid");
const flagCounter = document.querySelector("#flag-counter");
const difficultyOptions = document.querySelectorAll(`.option`);
let difficultySelection = "1";

// UI COMPONENTS ---------------------------
buildDropDownSelector();

// NEW GAME BUTTON ---------------------------

newGameBtn.addEventListener("click", function (event) {
  event.preventDefault();
  flagCounter.textContent = 0;
  timer("new-game", 0, newGameBtn);

  gameBoard.innerHTML = `
    <div class="loading">
      <p>Rendering Game</p>
      <img src="/assets/loading.svg" alt="rendering game">
    </div>
    `;
  setTimeout(() => {
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
  }, 0);
});

// HANDLE CELL CLICKS ---------------------------

const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
  cell.addEventListener("click", function (event) {
    event.preventDefault();
    handleCellClicks(event);
  });
});

// DIFFICULTY LEVEL DROPDOWN EVENT LISTNER  ---------------------------

difficultyOptions.forEach((option) => {
  option.addEventListener(`click`, () => {
    option.classList.contains("first") && (difficultySelection = "1");
    option.classList.contains("second") && (difficultySelection = "2");
    option.classList.contains("third") && (difficultySelection = "3");
  });
});

// End Difficulty Level Dropdown Event Listener ---------------------------
