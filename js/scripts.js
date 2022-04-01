function counter(number) {
  if (number.trim().length === 0) {
    return "Please enter a number";
  }
  let countedArray = [];
  let numberArray = number.split("");
  let intArray = numberArray.map(function(number) {
    return parseInt(number);
  });
  for (let i = 0; i < intArray; i++) {
    countedArray.push(i);
  }
  countedArray.push(intArray[0]);
  return countedArray.toString("");
}

function rogifyNumbers(number) {

  let finalArray = [];
  let countedArray = counter(number);
  

  for (let i = 0; i < countedArray.length; i++) {
    if (countedArray[i].includes("3")) {
      finalArray.push("won't you be my neighbor?");
    } else if (countedArray[i].includes("2")) {
      finalArray.push("boop");
    }
  }
  return finalArray;
}