
const userSettings = {}

userSettings.cellPixelSize = cellPixelSize();
userSettings.difficulty = difficulty();




function cellPixelSize() {   
    const cellPixelsArray = [35, 40, 45];
    return 40;

}


function difficulty() {

  const difficulty = document.getElementById("difficulty").value;

  let DifficultyValue = 0;

  difficulty === "easier" && (DifficultyValue = .10)
  difficulty === "intermediate" && (DifficultyValue = .15)
  difficulty === "expert" && (DifficultyValue = .20)

  return DifficultyValue;

}

// console.log('userSettings: ', userSettings)

export { userSettings, difficulty };