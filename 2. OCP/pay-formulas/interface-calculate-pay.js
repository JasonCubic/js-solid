
const payTypes = {
  HOURLY: require('./calculate-hourly-pay.js'),
  SALARIED: require('./calculate-salaried-pay.js'),
};

function getPayFunctionByType(type) {
  if (!payTypes[type]) {
    throw new Error(`unable to get type because type ${type} not found`);
    return;
  }
  return payTypes[type];
}

function setPayFunctionByType(type, payFunction) {
  if (!type) {
    throw new Error(`unable to set type because type ${type} is not a valid type`);
    return;
  }
  if (!payFunction) {
    throw new Error(`unable to set function for type ${type} because the function is not a valid`);
    return;
  }
  payTypes[type] = payFunction;
}

module.exports.getPayFunctionByType = getPayFunctionByType;
module.exports.setPayFunctionByType = setPayFunctionByType;

