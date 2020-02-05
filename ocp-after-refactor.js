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


console.log('\ngetPayByEmployee after ocp refactor: ', getPayByEmployee(employee));

// Other examples of open closed principle:
  // plugins!  for example: minecraft, wordpress, chrome, vsCode, etc, etc,

// kinda:
  // react high order components (it's a wrapper so you can use a simple view component)
  // composable components (reusable components)
