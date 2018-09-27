const makePrimesTo = num => {
  const makeNumbersTo = num => {
    let numbers = [];
    for (let i = 2; i <= num; i++) {
      numbers.push(i);
    }
    return numbers;
  }

  const removeMultiple = (numbers, p) => {
for (let i = 0; i < numbers.length; i++) {
  if ((numbers[i] !== p) && (numbers[i] % p === 0)) {
    numbers.splice(i, 1);
  }
}
return numbers;
}

  let numbers = makeNumbersTo(num);
  for (let i = 0; i < numbers.length; i++) {
    while (numbers[i]**2 <= num) {
      removeMultiple(numbers, numbers[i]);
      i++;
    }
  }
  return numbers;
}
module.exports = makePrimesTo;
