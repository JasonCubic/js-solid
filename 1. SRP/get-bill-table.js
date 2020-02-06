
function getBillTable(billObj) {
  let html = '<table>';
  for (let j = 0; j < billObj.items.length; j++) {
    html += '<tr class="bill-item-row">';
    html += '<td class="bill-item-quantity">';
    html += billObj.items[j].quantity;
    html += '</td>';
    html += '<td class="bill-item-description">';
    html += billObj.items[j].description;
    html += '</td>';
    html += '<td class="bill-item-row-total pull-right">';
    html += billObj.items[j].total;
    html += '</td>';
    html += '</tr>';
  }
  html += '<tr class="total-item-row">';
  html += '<td colspan="2" class="pull-right">Total:</td>';
  html += '<td class="bill-total pull-right">';
  html += billObj.total;
  html += '</td>';
  html += '</tr>';
  html += '</table>';
  return html;
}

module.exports = getBillTable;
