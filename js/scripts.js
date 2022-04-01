function counter(number) {
  if (number.trim().length === 0) {
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
  return countedArray.toString("");
}

function rogifyNumbers(number) {
  let finalArray = [];
  let newArray = counter(number); 

  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i].includes(3)) {
      finalArray.push("won't you be my neighbor?");
    } else if (newArray[i].includes(2)) {
      finalArray.push("boop");
    } else if (newArray[i].includes(1)) {
      finalArray.push("beep");
    } else {
      finalArray.push(newArray[i]);
    }
  }
  return finalArray.toString();
}