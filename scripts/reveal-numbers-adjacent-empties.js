// reveals numbers adjacent to cleared empty cells

export function revealNumbersAdjacentEmpties(adjacentNumbers, gridArray) {
    adjacentNumbers.forEach((cell) => {
        cell.state = "revealed"
    })
}