const redis = require('./3. LSP/redis/redis.js');


const client = redis.createClient();
const userName = 'Peter Gibbons';
const roleName = 'Worker Drone';
const hashKey = 'admin_roles';


console.log('\nsaving an admin role');
client.hset(hashKey, userName, `{ "roleName": "${roleName}", "lastModified": "${new Date().toISOString()}" }`);


console.log('getting admin roles');
client.hkeys(hashKey);
