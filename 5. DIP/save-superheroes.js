const { Client } = require('./library/pg.js');

function saveSuperheroes(superheroes) {
  const client = new Client();
  client.connect();
  for (let j = 0; j < superheroes.length; j++) {
    const selectQueryString = `INSERT INTO xmen_table(xmen_info) VALUES ('${superheroes[j]}');`;
    client.query(selectQueryString);
  }
  client.end();
}

module.exports = saveSuperheroes;