export function getDifficultyLevel(level) {  
    
  let difficultyLevel = "";

  level === "1" && (difficultyLevel = .10);
  level === "2" && (difficultyLevel = .15);
  level === "3" && (difficultyLevel = .20);

  return difficultyLevel;

}
