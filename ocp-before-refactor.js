const getPayByEmployee = require('./2. OCP/switch-get-pay-by-employee.js');


const employee = {
  name: 'Peter Gibbons',
  type: 'SALARIED',
  manager: 'Bill Lumbergh',
  company: 'Initech',
  responsibilities: 'TPS report cover sheets',
};


console.log('\ngetPayByEmployee before ocp refactor: ', getPayByEmployee(employee));
