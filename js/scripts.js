function counter(number) {
  if (number.trim().length === 0) {
    return "Please enter a number";
  }
  let countedArray = [];
  let numberInt = parseInt(number);
  for (let i = 0; i <= numberInt; i++) {
    countedArray.push(i.toString());
  }
  return countedArray;
}

function rogifyNumbers(number) {
  let finalArray = [];
  let  counterString = counter(number); 

  for (let i = 0; i < counterString.length; i++) {
    if (counterString[i].includes(3)) {
      finalArray.push(" Won't you be my neighbor?");
    } else if (counterString[i].includes(2)) {
      finalArray.push(" Boop!");
    } else if (counterString[i].includes(1)) {
      finalArray.push(" Beep!");
    } else {
      finalArray.push(" " + counterString[i]);
    }
  }
  return finalArray.toString();
}