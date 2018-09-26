// module.exports =
function getZerosCount(number, base) {

  const makePrimesTo = num => {
    const makeNumbersTo = num => {
      let numbers = [];
      for (let i = 2; i <= num; i++) {
        numbers.push(i);
      }
      return numbers;
    }

    const removeMultiple = (numbers, p) => {
      numbers.forEach((number, i) => {
        if ((number !== p) && (number % p === 0)) {
          numbers.splice(i,1);
        }
      });
      console.log('prime numbers: ', numbers);
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

  console.log('rlog() check');
  console.log('rlog(16,2) = ', rlog(16,2));
  console.log('rlog(0,2) = ', rlog(0,2));
  console.log('rlog(1,2) = ', rlog(1,2));


  const factorize = num => {
    let powers = {};
    const primes = makePrimesTo(num);
      primes.forEach(prime => {
        // if (num % prime === 0) {
        // let power = Math.floor(Math.log(num) / Math.log(prime));
        let power = rlog(num, prime);
        powers[prime] = power;
        console.log('prime: ', prime, ' power: ', power);
        num = num / (prime ** power);
        console.log('new number: ', num);
      });
    return powers;
  }

  let factorizedBase = factorize(base);

  console.log('factorize number: ', factorizedNumber);






}

getZerosCount(50, 50);
