export function getDifficultyLevel() { 

  const levelsContainer = document.querySelector(".select-level");
  const levelDiv = document.querySelectorAll(".level");

  levelDiv.forEach((level) => {
    level.addEventListener("click", function (event) {
      event.preventDefault();
      levelDiv.forEach((item) => {
        item.classList.remove("selected");
      }); 
      level.classList.add("selected");
    })
  });
  
  let level = levelsContainer.querySelector(".selected").getAttribute("data-level");
  console.log(level)
    
  let difficultyLevel = "1";

  level === "1" && (difficultyLevel = .10);
  level === "2" && (difficultyLevel = .15);
  level === "3" && (difficultyLevel = .20);

  return difficultyLevel;

}
