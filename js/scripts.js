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
  let newArray = counter(number); 

  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i].includes(3)) {
      finalArray.push(" won't you be my neighbor?");
    } else if (newArray[i].includes(2)) {
      finalArray.push(" Boop!");
    } else if (newArray[i].includes(1)) {
      finalArray.push(" Beep!");
    } else {
      finalArray.push(" " + newArray[i]);
    }
  }
  return finalArray.toString();
}