//getAverage() from scores array return the average of the scores.
//getGrade() from a score value 
//hasPassingGrade() return true or false by evaluating getGrade of

function getAverage(scores){
let sum =0;
for(const scor of scores){
  sum += scor;
}
let average = sum / scores.length;
return(average);
}

function getGrade(score){
  if(score === 100){
    return "A++";
  }
  else if(score>=90 && score<=99){
    return "A";
  }
    else if(score>=80 && score<=89){
    return "B";
  }
    else if(score>=70 && score<=79){
      return "C";
    }
    else if(score>=60 && score<=69){
      return "D";
    }
    else if(score >=0 && score<=59){
      return "F";
    }
}

function hasPassingValue(scores){
  if(getGrade(getAverage(scores) !== "F")){
    return true;
  }
  else {
    return false;
  }
}
let scores = [10, 80, 50, 70, 90];
console.log(scores);
let score = getAverage(scores)
console.log("\nAverage: "+getAverage(scores));
console.log("\nGrade: "+getGrade(score))
console.log(hasPassingValue(scores)? "You have passed! " : "You have Failed.");

