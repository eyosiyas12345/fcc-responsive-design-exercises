console.log("hie");
const character = "!";
const totalRowsnumber = 10;
const inverted = true;
let rows = [];

function drawPyramid(rownumber){
  return(" ".repeat(totalRowsnumber-rownumber) + character.repeat(2*rownumber-1) + " ".repeat(totalRowsnumber-rownumber));
}

for( let i = 1; i< totalRowsnumber; i++){
  if(inverted){
    rows.unshift(drawPyramid(i));
  }
  else {
    rows.push(drawPyramid(i));
  }
}

for(const row of rows){
  console.log(row);
}

