function counter(number) {
  if (number.trim().length === 0){
    return "Please enter a number";
  }
  let countedArray = [];
  let numberArray = number.split(" ");
  let intArray = numberArray.map(function(number) {
    return parseInt(number);
  });
  for (let i = 0; i < intArray; i++) {
    countedArray.push(i);
  }
  countedArray.push(intArray[0]);
  return countedArray;
}

function rogifyNumbers(number) {

  let finalArray = [];
  let countedArray = counter(number);
  

  for (let i = 0; i < countedArray.length; i++) {
    if (countedArray[i] === 3) {
      finalArray.push("won't you be my neighbor?");
      countedArray.shift();
      console.log(countedArray);
    }
  }
  return finalArray;
}