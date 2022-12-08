const hambuger = document.querySelector(".hamburger");
const menu = document.querySelector("#menu");
const menuItems = document.querySelectorAll(".menu-item");
const difficultyForm = document.querySelector("#difficulty-form");
const newGameBtn = document.querySelector("#new-game-button");

const numOfRows = 0;
const numOfColumns = 0;
const difficulty = 0;

$(document).ready(function () {
  $(".hamburger").click(function () {
    $(this).toggleClass("is-active");
    $("#menu").slideToggle();
    $(difficultyForm).slideToggle();
  });
});

console.log($(window).height());

newGameBtn.addEventListener("click", function (event) { 
  event.preventDefault();
});





function setRowsAndColumns() {
  // set numOfColumns and numOfRows based on input and difficulty
}
