import { cellPixels } from "./cell-pixels.js";
import { defineGrid } from "./define-grid.js";
import { buildGridArray } from "./build-grid-array.js";

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector("#menu");
const difficultyForm = document.querySelector("#difficulty-form");
const newGameBtn = document.querySelector("#new-game-button");
const cellSize = 2; // see cell-pixels.js
const gridSizesObject = defineGrid(cellPixels[cellSize]);
const gridArray = buildGridArray(gridSizesObject);
const cellDivs = document.querySelectorAll(".cell");

// console.log(gridSizesObject)

$(document).ready(function () {
  $(hamburger).click(function () {
    $(this).toggleClass("is-active");
    $(menu).slideToggle();
    $(difficultyForm).slideToggle();
  });

});

newGameBtn.addEventListener("click", function (event) { 
  event.preventDefault();
});



