
function formatCurrency(number) {
  return (number).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

function makeBillTable(itemCollection) {
  let total = 0;
  let html = '<table>';
  for (let j = 0; j < itemCollection.length; j++) {
    html += '<tr class="bill-item-row">';
    html += '<td class="bill-item-quantity">';
    html += itemCollection[j].quantity;
    html += '</td>';
    html += '<td class="bill-item-description">';
    html += itemCollection[j].description;
    html += '</td>';
    html += '<td class="bill-item-row-total pull-right">';
    html += formatCurrency(itemCollection[j].quantity * itemCollection[j].price);
    total += itemCollection[j].quantity * itemCollection[j].price;
    html += '</td>';
    html += '</tr>';
  }
  html += '<tr class="total-item-row">';
  html += '<td colspan="2" class="pull-right">Total:</td>';
  html += '<td class="bill-total pull-right">';
  html += total;
  html += '</td>';
  html += '</tr>';
  html += '</table>';
  return html;
}

module.exports = makeBillTable;
