const factorize = require('../js/factorize');
const countNumberSeries = require('../js/countNumberSeries');

module.exports = function getZerosCount(number, base) {

  let factorizedBase = factorize(base);
  let maxDivider = parseInt(Object.keys(factorizedBase).pop());
  let powerOfMaxDivider = factorizedBase[maxDivider];
  let sumOfNumberSeries = countNumberSeries(number, maxDivider);
  let zeros = Math.floor(sumOfNumberSeries / powerOfMaxDivider);
  return zeros;
}
