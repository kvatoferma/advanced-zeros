// module.exports =
function getZerosCount(number, base) {

  const makePrimesTo = num => {
    const makeNumbersTo = num => {
      let numbers = [];
      for (let i = 2; i <= num; i++) {
        numbers.push(i);
      }
      console.log('plain numbers: ', numbers);
      return numbers;
    }

    const removeMultiple = (numbers, p) => {
  for (let i = 0; i < numbers.length; i++) {
    if ((numbers[i] !== p) && (numbers[i] % p === 0)) {
      numbers.splice(i, 1);
    }
  }
  console.log('prime numbers without multiples: ', numbers);
  return numbers;
}


/*
    const removeMultiple = (numbers, p) => {
      numbers.forEach((number, i) => {
        if ((number !== p) && (number % p === 0)) {
          numbers.splice(i,1);
        }
      });
      console.log('prime numbers: ', numbers);
      return numbers;
    }
*/
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
        if (power > 0) {
          powers[prime] = power;
        }
        num = num / (prime ** power);
        console.log('num in factorize: ', num);
      });
    return powers;
  }

/*
  const factorize = num => {
    let powers = {};
    const primes = makePrimesTo(num);
      primes.forEach(prime => {
        // if (num % prime === 0) {
        // let power = Math.floor(Math.log(num) / Math.log(prime));
        let power = rlog(num, prime);
        if (power > 0) {
          powers[prime] = power;
        }
        num = num / (prime ** power);
      });
    return powers;
  }
*/

  let factorizedBase = factorize(base);
  console.log('factorize: ', factorizedBase);
  let maxDivider = parseInt(Object.keys(factorizedBase).pop());
  let powerOfMaxDivider = factorizedBase[maxDivider];
  // console.log('powerOfMaxDivider: ', powerOfMaxDivider);

  const countPowerOfDividers = (number, base) => {
    let power = 1;
    let sum = 0;
    while (Math.floor(number / (base ** power) > 0)) {
      sum += Math.floor(number / (base ** power));
      power++;
    }
    return { 'base': base, 'sum': sum }
  }

  // console.log('base and sum: ', JSON.stringify(countPowerOfDividers(700, 3)));

  let res = countPowerOfDividers(number, maxDivider);
  res.power = powerOfMaxDivider;
  console.log('res: ', res);


  console.log('factorize number: ', factorizedBase);






}

getZerosCount(120, 10);
