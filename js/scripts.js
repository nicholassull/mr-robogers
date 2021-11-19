function arrayMaker(input) {
  let numberArray= []
  const maxNumber = parseInt(input);
  for (let i = 0; i <= maxNumber; i +=1) {
    numberArray.push(i.toString());
  }
  return numberArray;
}

function friendlyRobot (numberArray) {
  let newArray = []
  numberArray.forEach(function(element) {
    if (element.includes('3')) {
      newArray.push("Won't you be my neighbor?");
    } else if (element.includes('2')) {
      newArray.push("Boop!");
    }
    return newArray;
  });
}