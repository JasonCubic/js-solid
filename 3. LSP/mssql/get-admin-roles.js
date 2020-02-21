const mssql = require('./library/mssql.js');


function getAdminRoles() {
  mssql.connect('mssql://username:password@localhost/database');
  const selectQueryString = `
    SELECT
      [USER_NAME],
      [ROLE_NAME],
      [LAST_MODIFIED_TIMESTAMP]
    FROM [ADMIN_ROLES_TABLE]`;
  const selectResult = mssql.query(selectQueryString);
  return selectResult;
}

module.exports = getAdminRoles;
