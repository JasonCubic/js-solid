const mssql = require('./library/mssql.js');


function saveAdminRole(userName, roleName) {
  mssql.connect('mssql://username:password@localhost/database');
  const insertQueryString = `INSERT INTO [ADMIN_ROLES_TABLE] (
    [USER_NAME],
    [ROLE_NAME],
    [LAST_MODIFIED]
  ) VALUES (
    "${userName}",
    "${roleName}",
    "${new Date().toISOString()}"
  )`;
  const insertResult = mssql.query(insertQueryString);
  return insertResult;
}

module.exports = saveAdminRole;