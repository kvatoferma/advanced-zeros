module.exports =
function getZerosCount(number, base) {
  const factorize = require('./factorize');
  const countNumberSeries = require('./countNumberSeries');
  let factorizedBase = factorize(base);
  let maxDivider = parseInt(Object.keys(factorizedBase).pop());
  let powerOfMaxDivider = factorizedBase[maxDivider];
  let sumOfNumberSeries = countNumberSeries(number, maxDivider);
  let zeros = Math.floor(sumOfNumberSeries / powerOfMaxDivider);
  return zeros;
}
