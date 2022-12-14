export function getGameBoardSizes(cellPixelSize) {

  // const gridWidth = parseFloat(window.innerWidth);
  // const gridHeight = parseFloat(window.innerHeight) * 0.8;

  const gridWidth = document.querySelector("#game-grid").offsetWidth;
  const gridHeight = document.querySelector("body").offsetHeight * .8;

  let columnCount = Math.floor(gridWidth / cellPixelSize);
  let rowCount = Math.floor(gridHeight / cellPixelSize);
  let cellCount = columnCount * rowCount;

  const gridDefinition = {
    columnCount: columnCount,
    rowCount: rowCount,
    cellCount: cellCount,
  }

  // console.log('gridDefinition: ', gridDefinition)

  return (gridDefinition);
}
