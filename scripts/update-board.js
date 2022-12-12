export function updateBoard(gridArray, reason) {

    const cells = document.querySelectorAll(".cell");

    cells.forEach((cell) => {

        // if reason is empty cell click, AND 
        // (if matching array spot type is "empty", or if it is a "number" and it has been verified as adjacent to an empty cell)
        // then update the board
            if (
                (reason === "empty cell click" &&
                gridArray[cell.id - 1].type === "empty") ||
                (gridArray[cell.id - 1].type === "number" &&
                gridArray[cell.id - 1].verifiedAdjacentEmpty)
            ) {
                cell.innerHTML = gridArray[cell.id - 1].content;
                cell.classList.add(
                gridArray[cell.id - 1].type,
                gridArray[cell.id - 1].state
                );
            }
        
        // if reason is mine click, AND if matching array spot type is "mine"
            if (reason === "mine click" && gridArray[cell.id - 1].type === "mine") {
                cell.innerHTML = gridArray[cell.id - 1].content;
                cell.classList.add(gridArray[cell.id - 1].type, gridArray[cell.id - 1].state)                
            }


        // if reason is number click, AND if matching array spot type is number AND state is revealed
            if (reason === "number click" && gridArray[cell.id - 1].type === "number" && gridArray[cell.id - 1].state === "revealed") {
                cell.innerHTML = gridArray[cell.id - 1].content;
                cell.classList.add(gridArray[cell.id - 1].type, gridArray[cell.id - 1].state, "no-borders")                
            }

    })



}