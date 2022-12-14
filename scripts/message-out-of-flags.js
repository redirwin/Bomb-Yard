import { timer } from "./timer.js";
import { checkBoard } from "./check-board.js";

export function outOfFlagsMessage(flagCounter, mineCounter) {
  timer("pause");

  const inGameMessage = document.querySelector(".in-game-message");
  const gridCover = document.querySelector("#grid-cover");
  const minesMatchBtns = document.querySelector(".mines-match-buttons");

  gridCover.style.display = "block";
  inGameMessage.style.display = "block";

  inGameMessage.innerHTML = `
    <p>You've placed all your cones. Ready to check the board?</p>
    <div class="mines-match-buttons">
      <button id="check-board">Check Board</button>
      <button id="keep-working">Keep Working</button>
    </div>
  `;

  inGameMessage.addEventListener("click", (e) => {
    if (e.target.id === "check-board") {
      console.log(e.target.id);
      // do this
    } else if (e.target.id === "keep-working") {
      console.log(e.target.id);
      gridCover.style.display = "none";
      inGameMessage.style.display = "none";
    }
  });
}


