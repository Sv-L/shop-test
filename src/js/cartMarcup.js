import parseStorage from './parseStorage';
const orderEl = document.querySelector('.order-list');
const storageKey = 'order';
const order = parseStorage(storageKey);

function createMarkupCart(order) {
  const marcup = order
    .map(
      food =>
        `<li class="foods-item-card"> <img class= "img-card" src="${food.img}" alt="${food.name}" loading="lazy"/> <div class ="wrap"> <p data-id="${food.id}">${food.name}</p>
            <p>Price: <span class = "price">${food.price}</span>$</p> </div>  <div class="counter">
        <button type="button" data-action="decrement">-</button> <span class="counter-value">${food.count}</span>
          <button type="button" data-action="increment">+</button>
      </div> <button class="delete-btn" type="button" data-action="delete">X</button></li>`
    )
    .join('');
  return marcup;
}

function RenderMarkupCart(order) {
  if (order && order.length !== 0) {
    const orderMarcup = createMarkupCart(order);
    orderEl.innerHTML = orderMarcup;
  }
  if (!order || order.length === 0) {
    orderEl.innerHTML = '<li><p>Your shopping cart is empty</p></li>';
  }
}
RenderMarkupCart(order);
export { order, RenderMarkupCart, createMarkupCart, orderEl };
