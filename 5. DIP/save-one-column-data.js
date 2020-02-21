
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

// what is functional programming?

// what is a pure function?
// What makes code testable?
//    Kent Beck - Test Desiderata - https://www.youtube.com/playlist?list=PLlmVY7qtgT_lkbrk9iZNizp978mVzpBKl


// "Object-oriented programming makes code understandable by encapsulating moving parts.
//  Functional programming makes code understandable by minimizing moving parts."
//    - Michael Feathers

