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
  console.log(countedArray);
}