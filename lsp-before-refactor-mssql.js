const saveAdminRole = require('./3. LSP/mssql/save-admin-role.js');
const getAdminRoles = require('./3. LSP/mssql/get-admin-roles.js');


const userName = 'Peter Gibbons';
const roleName = 'Worker Drone';


console.log('saving an admin role');
saveAdminRole(userName, roleName);


console.log('getting admin roles');
getAdminRoles();
