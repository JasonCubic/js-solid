const redis = require('./redis.js');

const client = redis.createClient();
const hashKey = 'admin_roles';

function saveAdminRole(userName, roleName) {
  client.hset(hashKey, userName, `{ "roleName": "${roleName}", "lastModified": "${new Date().toISOString()}" }`);
}

function getAdminRoles() {
  client.hkeys(hashKey);
}


module.exports.saveAdminRole = saveAdminRole;
module.exports.getAdminRoles = getAdminRoles;
