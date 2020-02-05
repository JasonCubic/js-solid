const interfaceCalculatePay = require('./pay-formulas/interface-calculate-pay.js');

function calculatePay(employee) {
  const payFunction = interfaceCalculatePay.getPayFunctionByType(employee.type);
  return payFunction(employee);
}

module.exports = calculatePay;

// open-closed principal: You should be able to extend the behavior of a system without having to modify that system.

// to add in a new employee type of COMMISSIONED we can use 'setPayFunctionByType' in the interface

