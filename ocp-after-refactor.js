const getPayByEmployee = require('./2. OCP/ocp-get-pay-by-employee.js');
const interfaceCalculatePay = require('./2. OCP/pay-formulas/interface-calculate-pay');


// changed Peter Gibbons to a commissioned employee
const employee = {
  name: 'Peter Gibbons',
  type: 'COMMISSIONED',
  manager: 'Bill Lumbergh',
  company: 'Initech',
  responsibilities: 'TPS report cover sheets',
};


// add COMMISSIONED employee type pay function
interfaceCalculatePay.setPayFunctionByType('COMMISSIONED', (employee) => `${employee.name} paid per each commission`);


console.log('getPayByEmployee after ocp refactor: ', getPayByEmployee(employee));