export function buildGameGrid(gridArray, gridDefinition, cellSize) {

    console.log(gridDefinition)
   
    const gameGrid = document.querySelector("#game-grid");

    let content = "";

    gridArray.forEach((cell, index) => {
        content += `
            <span class="cell" id="${cell.uid}"></span>
        `

      if (cell.isRowEnd) {
            content += `<br/>`
        }

    })

    gameGrid.innerHTML = content;

    const cells = document.querySelectorAll(".cell");

    cells.forEach((cell) => {
        cell.style.width = cellSize + "px";
        cell.style.height = cellSize + "px";
    })

    return;
}