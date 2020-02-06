
function saveOneColumnData(pgClient, tableName, columnName, dataArr) {
  returnArr = [];
  for (let j = 0; j < dataArr.length; j++) {
    const selectQueryString = `INSERT INTO ${tableName}(${columnName}) VALUES ('${dataArr[j]}');`;
    const results = pgClient.query(selectQueryString);
    returnArr.push(results);
  }
  return returnArr;
}

module.exports = saveOneColumnData;
