
function saveOneColumnData(pgClient, tableName, columnName, dataArr) {
  for (let j = 0; j < dataArr.length; j++) {
    const selectQueryString = `INSERT INTO ${tableName}(${columnName}) VALUES ('${dataArr[j]}');`;
    pgClient.query(selectQueryString);
  }
  return true;
}

module.exports = saveOneColumnData;
