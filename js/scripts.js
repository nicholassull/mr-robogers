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
      console.log(newArray);
    } else {
      newArray.push(element);
      console.log(newArray);
    }
    return newArray;
  });
}