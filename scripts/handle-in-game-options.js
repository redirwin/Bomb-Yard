const levelSelectorDiv = document.querySelector(".select-level");
const primaryNewGameButton = document.querySelector(".new-game-button");
const inGameOptionsDiv = document.querySelector(".in-game-options-container");




export function handleInGameOptions(event) {

console.log(event.target.classList)


    if (event.target.classList.contains("new-game-button")) {
        // console.log("new game")
        primaryNewGameButton.classList.add("hide");
        levelSelectorDiv.classList.add("hide");
        inGameOptionsDiv.classList.remove("hide");
    }


    if (event.target.classList.contains("in-game-first")) {
        // console.log("exit") 
        primaryNewGameButton.classList.remove("hide");
        levelSelectorDiv.classList.remove("hide");
        inGameOptionsDiv.classList.add("hide");
    }

return


}