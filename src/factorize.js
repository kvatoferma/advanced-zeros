const makePrimesTo = require('./makePrimesTo');
const rlog = require('./rlog');

const factorize = num => {
  let powers = {};
  const primes = makePrimesTo(num);
    primes.forEach(prime => {
      let power = rlog(num, prime);
      if (power > 0) {
        powers[prime] = power;
      }
      num = num / (prime ** power);
    });
  return powers;
}

module.exports = factorize;
