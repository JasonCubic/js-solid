const calculateHourlyPay = require('./pay-formulas/calculate-hourly-pay.js');
const calculateSalariedPay = require('./pay-formulas/calculate-salaried-pay.js');

function calculatePay(employee) {
  switch(employee.type) {
    case 'HOURLY':
      return calculateHourlyPay(employee);
      break;
    case 'SALARIED':
      return calculateSalariedPay(employee);
      break;
    default:
      throw new Error(`employee type ${employee.type} not found`);
  }
}

module.exports = calculatePay;

// open-closed principal: You should be able to extend the behavior of a system without having to modify that system.

// if we wanted to add in a new employee type of COMMISSIONED we would have to modify this code
