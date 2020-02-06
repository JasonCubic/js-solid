
const saveSuperheroes = require('./5. DIP/save-superheroes.js');


const jsonSuperHeroArr = [
  JSON.stringify({ name: 'Cyclops', role: 'Leader' }),
  JSON.stringify({ name: 'Storm', role: 'Member' }),
  JSON.stringify({ name: 'Professor X', role: 'Teacher', age: 65 }),
  JSON.stringify({ name: 'Wolverine', powers: [ 'Adamantium Claws', 'Super healing' ], real_name: 'logan' }),
];

console.log('\nsaving superheroes');
saveSuperheroes(jsonSuperHeroArr);

