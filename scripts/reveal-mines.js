import { reRenderBoard } from "./re-render-board.js"

export function revealMines(gridArray, clickedCellId) {
    gridArray.forEach(cell => {
        if (cell.type === "mine") {
            cell.state = "revealed"
        }
    })
    gridArray[clickedCellId - 1].state = "exploded"
    gridArray[clickedCellId - 1].content = "💥"
    
    reRenderBoard(gridArray)


}
