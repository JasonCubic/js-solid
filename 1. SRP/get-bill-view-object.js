
function formatCurrency(number) {
  return (number).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

function makeBillObj(itemCollection) {
  return {
    items: itemCollection.map((row) => ({
      quantity: row.quantity,
      description: row.description,
      total: formatCurrency(row.quantity * row.price),
    })),
    total: itemCollection.reduce((accumulator, item) => accumulator += item.quantity * item.price, 0),
  }
}

module.exports = makeBillObj;
