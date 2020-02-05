// faked mssql library

function connect(connectionString) {
  return true;
}

function query(sqlQuery) {
  console.log(sqlQuery, '\n');
  return true;
}

module.exports.connect = connect;
module.exports.query = query;
