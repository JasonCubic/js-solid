// faked postgresql library

function connect(connectionString) {
  return true;
}

function query(queryString) {
  console.log(queryString);
  return true;
}

function end() {
  return true;
}

function Client() {
  return { connect, query, end };
}

module.exports.Client = Client;
