import parseStorage from './parseStorage';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const storageKey = 'order';
const order = parseStorage(storageKey);
let allOrder = [];
if (order) {
  allOrder = Array.isArray(order) ? [...order] : [order];
}

console.log('allOrder', allOrder);

function onClickAddToCartButtonEl(event) {
  const foodItemEl = event.target.closest('.foods-item');
  const imgEl = foodItemEl.querySelector('.img');
  const imgUrl = imgEl.getAttribute('src');

  const nameEl = foodItemEl.querySelector('h3');
  const foodName = nameEl.textContent;
  const dataId = nameEl.getAttribute('data-id');

  const priceEl = foodItemEl.querySelector('.price');
  const price = priceEl.textContent;

  const shop = foodItemEl.getAttribute('data-shop');

  if (allOrder) {
    const checkShop = allOrder.map(item => item.shop === shop);
    const allFromSameStore = checkShop.every(el => el === true);
    if (allFromSameStore) {
      console.log(allFromSameStore);
      const existingOrderIndex = allOrder.findIndex(
        order => order.id === dataId
      );
      if (existingOrderIndex !== -1) {
        allOrder[existingOrderIndex].count += 1;
        localStorage.setItem('order', JSON.stringify(allOrder));
        Notify.success('the product has been added to the cart');
      } else {
        const order = {
          name: foodName,
          id: dataId,
          img: imgUrl,
          price: price,
          shop: shop,
          count: 1,
        };

        allOrder.push(order);
        localStorage.setItem('order', JSON.stringify(allOrder));
        Notify.success('the product has been added to the cart');
      }
    } else {
      Notify.failure('you can order goods only from one store');
    }
  }
}

export { order, onClickAddToCartButtonEl };
