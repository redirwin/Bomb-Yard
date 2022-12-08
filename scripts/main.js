const hambuger = document.querySelector(".hamburger");
const menu = document.querySelector("#menu");
const menuItems = document.querySelectorAll(".menu-item");
const difficultyForm = document.querySelector("#difficulty-form");

const numOfRows = 0;
const numOfColumns = 0;
const difficulty = 0;

$(document).ready(function () {
  $(".hamburger").click(function () {
    $(this).toggleClass("is-active");
    $("#menu").slideToggle();
    $(difficultyForm).slideToggle();
      // $(this).css('position', 'fixed');
      // $(this).css('right', '1.25rem');
  });
});





function setRowsAndColumns() {
  // set numOfColumns and numOfRows based on input and difficulty
}
