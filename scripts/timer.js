let gameTimer;

export function timer(action) {

  if (action === "new-game") {
    document.querySelector("#timer").textContent = 0;
    clearInterval(gameTimer);
    let time = 0;
    gameTimer = setInterval(function () {
      time++;
      document.querySelector("#timer").textContent = time;
      // console.log(time);
    }, 1000);
  }



  if (action === "game-over") {
    clearInterval(gameTimer);
    console.log("Final Time: " + document.querySelector("#timer").textContent);
  }

}
