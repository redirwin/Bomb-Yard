import { timer } from "./timer.js";
// import { buildContextOptions } from "./build-context-options.js";

export function gameOverSequence() {
   
    console.log("GAME OVER!")
    const gridCover = document.querySelector("#grid-cover");

    gridCover.style.display = "block";

    timer("game-over")
    // buildContextOptions("game-over")

}