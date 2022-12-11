export function placeEmpties(gridArray) {
    gridArray.forEach((cell, index) => {
        if (cell.type === "") {
            cell.type= "empty";
            cell.content = "";
        }
    })
}