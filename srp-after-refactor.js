
const getBillObject = require('./1. SRP/get-bill-view-object.js');
const getBillTable = require('./1. SRP/get-bill-table.js');

const bill = [
  { quantity: 1, description: 'edamame', price: 9.72 },
  { quantity: 3, description: 'kimo', price: 10.50 },
  { quantity: 4, description: 'A la Carte Sushi', price: 12.99 },
];


console.log('\ngetBillObject after srp refactor: ');

// console.log('bill object: ', getBillObject(bill));

console.log(getBillTable(getBillObject(bill)));


// Single responsibility principle
// that every module, class, or function should have responsibility over a single part of the functionality provided by the software,
// and that responsibility should be entirely encapsulated by the class, module or function

// pieces of your software should have a "don't know and don't care" attitude about things that they are not responsible for.
