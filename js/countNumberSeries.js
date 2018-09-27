const countNumberSeries = (number, base) => {
  let power = 1;
  let sum = 0;
  while (Math.floor(number / (base ** power) > 0)) {
    sum += Math.floor(number / (base ** power));
    power++;
  }
  return sum;
}

module.exports = countNumberSeries;
