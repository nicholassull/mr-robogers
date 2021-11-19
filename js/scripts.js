function arrayMaker(input) {
  let numberArray= []
  const maxNumber = parseInt(input);
  for (let i = 0; i <= maxNumber; i +=1) {
    numberArray.push(i.toString());
  }
  return numberArray;
}

function friendlyRobot (numberArray) {
  numberArray.forEach(function(element) {
    if (element.includes("0")) {
      console.log('Found it!')
    }
  });
}