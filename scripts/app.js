import { gridSettings } from "./get-grid-settings.js";
import { buildGridArray } from "./build-grid-array.js";
import { userSettings, difficulty } from "./get-user-settings.js";
import { buildGameGrid } from "./build-game-grid.js";
import { placeMines } from "./place-mines.js";
import { placeNumbers } from "./place-numbers.js";


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
const gridDefinition = gridSettings(userSettings.cellPixelSize);
const gridArray = buildGridArray(gridDefinition);
const gameGrid = document.querySelector("#game-grid");

newGameBtn.addEventListener("click", function (event) {
  event.preventDefault();

  gameGrid.innerHTML = `
    <div class="loading">
      <p>Rendering Game</p>
      <img src="/assets/loading.svg" alt="rendering game">
    </div>
    `;
  setTimeout(() => {
    difficulty();
    placeMines(gridArray, difficulty());
    placeNumbers(gridArray);
    buildGameGrid(gridArray, gridDefinition, userSettings.cellPixelSize);
  }, 1500);
});

// End New Game Button ---------------------------