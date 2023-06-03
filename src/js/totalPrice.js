import { order } from './cartMarcup';
const totalPriceEl = document.querySelector('.totalprice');
const priceEl = document.querySelector('.totalprice-text');

function renderTotalPrice(order) {
  if (order) {
    const totalPrice = order.reduce((total, food) => {
      const all = total + Number(food.price) * Number(food.count);
      return parseFloat(all.toFixed(2));
    }, 0);
    totalPriceEl.innerHTML = totalPrice;
    priceEl.style.display = 'block';
    if (totalPrice === 0) {
      priceEl.style.display = 'none';
    }
  } else {
    priceEl.style.display = 'none';
  }
}
renderTotalPrice(order);
export { renderTotalPrice, priceEl };
