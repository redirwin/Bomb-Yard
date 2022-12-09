export function placeMines(gridArray, difficulty) {

  const mineCounter = document.querySelector("#mine-counter");

  let mineCount = Math.floor(gridArray.length * difficulty);

  mineCounter.innerHTML = mineCount;

  gridArray.forEach((cell) => {
    if (cell.type === "mine") {
      cell.type = "empty";
      cell.content = "";
    }
  })

while (mineCount > 0) {
    let randomCell = Math.floor(Math.random() * gridArray.length);

    if (gridArray[randomCell].type !== "mine") {
      gridArray[randomCell].type = "mine";
      mineCount--;
    }
  }

    gridArray.forEach((cell, index) => {
        cell.type === "mine" && (cell.content = "💣")
    })

}
