import { RenderMarkupCart } from './cartMarcup';
import parseStorage from './parseStorage';
import { renderTotalPrice } from './totalPrice';

const orderEl = document.querySelector('.order-list');
const storageKey = 'order';
let order = parseStorage(storageKey);

const orderListEl = document.querySelector('.order-list');
orderListEl.addEventListener('click', onClickOrderListEl);

function onClickOrderListEl(event) {
  const targetEl = event.target;
  const li = targetEl.closest('li');
  const dataId = li.querySelector('p[data-id]').getAttribute('data-id');
  const existingOrderIndex = order.findIndex(food => food.id === dataId);

  if (
    targetEl.tagName === 'BUTTON' &&
    targetEl.parentElement.classList.contains('counter')
  ) {
    const counterValueEl =
      targetEl.parentElement.querySelector('.counter-value');
    let counterValue = parseInt(counterValueEl.textContent);

    if (targetEl.dataset.action === 'increment') {
      counterValue++;
      order[existingOrderIndex].count += 1;
      localStorage.setItem('order', JSON.stringify(order));
      renderTotalPrice(order);
    } else if (targetEl.dataset.action === 'decrement' && counterValue > 1) {
      counterValue--;
      order[existingOrderIndex].count -= 1;
      localStorage.setItem('order', JSON.stringify(order));
      renderTotalPrice(order);
    }
    counterValueEl.textContent = counterValue;
  }
  if (targetEl.tagName === 'BUTTON' && targetEl.dataset.action === 'delete') {
    const orderAbd = order.filter(food => food.id !== dataId);
    order = [...orderAbd];
    localStorage.setItem('order', JSON.stringify(order));

    RenderMarkupCart(order);
    renderTotalPrice(order);

    if (order.length === 0) {
      localStorage.removeItem('order');
    }
  }
}
