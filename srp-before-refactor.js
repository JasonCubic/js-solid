const makeBillTable = require('./1. SRP/make-bill-table.js');


const bill = [
  { quantity: 1, description: 'edamame', price: 9.72 },
  { quantity: 3, description: 'kimo', price: 10.50 },
  { quantity: 4, description: 'A la Carte Sushi', price: 12.99 },
];


console.log('\nmakeBillTable before srp refactor: ');

console.log(makeBillTable(bill));
