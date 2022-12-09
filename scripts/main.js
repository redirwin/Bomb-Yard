import { defineGrid } from "./define-grid.js";
import { buildGridArray } from "./build-grid-array.js";
import { cellPixelSize } from "./get_user_settings.js";
import { buildGameGrid } from "./build-game-grid.js";

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector("#menu");
const difficultyForm = document.querySelector("#difficulty-form");
const newGameBtn = document.querySelector("#new-game-button");
const gridDefinition = defineGrid(cellPixelSize());
const gridArray = buildGridArray(gridDefinition);


$(document).ready(function () {
  $(hamburger).click(function () {
    $(this).toggleClass("is-active");
    $(menu).slideToggle();
    $(difficultyForm).slideToggle();
  });

});

buildGameGrid(gridArray, gridDefinition, cellPixelSize());

newGameBtn.addEventListener("click", function (event) { 
  event.preventDefault();
});



