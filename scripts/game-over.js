import { timer } from "./timer.js";

export function gameOver() {
   
    console.log("GAME OVER!")
    const gridCover = document.querySelector("#grid-cover");

    gridCover.style.display = "block";

    timer("game-over")

}