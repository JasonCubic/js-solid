// faked redis library

function hset(hashKey, hashName, hashValue) {
  console.log(`client.hset("${hashKey}", "${hashName}", "${hashValue}");\n`);
}

function hkeys(hashKey) {
  console.log(`client.hkeys("${hashKey}", (err, replies) => { <data results here> });\n`);
}


function createClient(connectionString) {
  return { hset, hkeys };
}


module.exports.createClient = createClient;
