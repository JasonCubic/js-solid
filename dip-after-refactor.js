const { Client } = require('./5. DIP/library/pg.js');
const saveOneColumnData = require('./5. DIP/save-one-column-data.js');


const client = new Client();
client.connect();


const tableName = 'xmen_table';
const jsonColumnName = 'xmen_info';
const jsonSuperHeroArr = [
  JSON.stringify({ name: 'Cyclops', role: 'Leader' }),
  JSON.stringify({ name: 'Storm', role: 'Member' }),
  JSON.stringify({ name: 'Professor X', role: 'Teacher', age: 65 }),
  JSON.stringify({ name: 'Wolverine', powers: [ 'Adamantium Claws', 'Super healing' ], real_name: 'logan' }),
];

console.log('\nsaving superheroes');
saveOneColumnData(client, tableName, jsonColumnName, jsonSuperHeroArr);

client.end();


// Dependency inversion principle
  // One should depend upon abstractions, concretions.
  // used to decouple software
  // DI makes your functions becomes pure from a functional programming standpoint


// Consider
  // in functional programming you are not supposed to mutate state.  at all.  no logs, no persistent data storage, nothing.
    // obviously for most cases you can't do that and have a program.
    // so the usual compromise is that at your interfaces you do the impure work.
      // for example:
        // save records to the database
        // update logs using a log library
        // even getting date information such as Date.now()
    // Every interface becomes a sort of API interface to your program.
    // You typically don't test the interfaces, you test your code.
    // Doing this makes your code testable.  You can pass in all the mocks or fake data you need for your test.
      // we could make a fake client and call saveOneColumnData and see if it executed the correct behavior
