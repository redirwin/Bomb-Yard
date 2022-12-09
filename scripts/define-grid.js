export function defineGrid(cellPixels) {

  // const gridWidth = parseFloat(window.innerWidth);
  // const gridHeight = parseFloat(window.innerHeight) * 0.8;

  const gridWidth = document.querySelector("#game-grid").offsetWidth;
  const gridHeight = document.querySelector("body").offsetHeight * .8;

  let columnCount = Math.floor(gridWidth / cellPixels);
  let rowCount = Math.floor(gridHeight / cellPixels);
  let cellCount = columnCount * rowCount;

  // console.log("columnCount: " + columnCount);
  // console.log("rowCount: " + rowCount);
  // console.log("cellCount: " + cellCount);

  return ({
    columnCount: columnCount,
    rowCount: rowCount,
    cellCount: cellCount,
  });
}
