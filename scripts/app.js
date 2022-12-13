import { gameBoardSizes } from "./get-game-board-sizes.js";
import { buildGridArray } from "./build-grid-array.js";
import { userSettings, difficulty } from "./get-user-settings.js";
import { buildGame } from "./build-game.js";
import { placeMines } from "./place-mines.js";
import { placeNumbers } from "./place-numbers.js";
import { placeEmpties } from "./place-empties.js";
import { timer } from "./timer.js";

// EVENTS ---------------------------

// HAMBURGER MENU ---------------------------

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector("#menu");
const difficultyForm = document.querySelector("#difficulty-form");

$(document).ready(function () {
  $(hamburger).click(function () {
    $(this).toggleClass("is-active");
    $(menu).slideToggle();
    $(difficultyForm).slideToggle();
  });

});

// End Hamburger Menu ---------------------------

// NEW GAME BUTTON ---------------------------

const newGameBtn = document.querySelector("#new-game-button");
const gridDefinition = gameBoardSizes(userSettings.cellPixelSize);
const gridArray = []
const gameBoard = document.querySelector("#game-grid");
const flagCounter = document.querySelector("#flag-counter");
let gameTimer;


newGameBtn.addEventListener("click", function (event) {
  event.preventDefault();
  flagCounter.textContent = 0;
  timer("new-game", 0, newGameBtn); 

  // document.querySelector("footer").style = "display: none";
  
  gameBoard.innerHTML = `
    <div class="loading">
      <p>Rendering Game</p>
      <img src="/assets/loading.svg" alt="rendering game">
    </div>
    `;
  setTimeout(() => {
    gridArray.length = 0;
    difficulty();
    buildGridArray(gridDefinition, gridArray)


    placeMines(gridArray, difficulty());
    placeNumbers(gridArray, gridDefinition);
    placeEmpties(gridArray);

    buildGame(gridArray, userSettings.cellPixelSize, gridDefinition);

  }, 0);
});

// End New Game Button ---------------------------

// HANDLE CELL CLICKS ---------------------------

const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {

  cell.addEventListener("click", function (event) {
    event.preventDefault();
    handleCellClicks(event);
  })

})

// End Handle Cell Click ---------------------------