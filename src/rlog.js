const rlog = (num, base) => {
  if (num == 0) return NaN;
  if (num == 1) return 0;
  let power = 0;
  while (num % base === 0) {
    power++;
    num /= base;
  }
  return power;
}

module.exports = rlog;
