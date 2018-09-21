module.exports =
function getZerosCount(number, base) {
//   console.log('number = ', number);
//   console.log('base = ', base);

  const countDigits = number => {
    return number.toString().length;
  }

  const transformTo10 = (number, base) => {
    const digitQuantity = countDigits(number);
    const digits = number .toString()
                        .split('')
                        .map(digit => parseInt(digit));
    // console.log('digits: ', digits);
    // return digits.reduce((sum, digit, i) => {
    //   console.log('i = ', 0);
    //   sum += Math.floor(digit * base ** (digitQuantity - i - 1));
    //   return sum;
    // }, 0);
    let sum = 0;
    for (var i = 0; i < digitQuantity; i++) {
      // console.log('i = ', i);
      sum += Math.floor(digits[i] * base ** (digitQuantity - i - 1));
    }
    return sum;


    //
    // for (var i = 1; i <= digitQuantity ; i++) {
    //   result += Math.floor(number * base ** (digitQuantity - i) / 10 ** (digitQuantity - i));
    // }
    // return result;
  }




// console.log('tranform 2x1010011 into 123: ', transformTo10(11111111, 2));
// console.log('tranform 0x32 into 50: ', transformTo10(32, 16));


//
  const number10 = transformTo10(number, base);
  // console.log('number10: ', number10);
  let zeros = 0;
  let j = 5;
  while (number10 / j >= 1) {
    zeros += Math.floor(number10 / j);
    j *= 5;
  }
return zeros;
}

//
// const zerosCount = getZerosCount(46899647, 232);
// console.log('result actual: ', zerosCount);
// console.log('result expected: ', '1674985');


// it('2', () => {
  // assert.equal(zerosCount, 1674985);
// });
