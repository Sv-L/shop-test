import {
  onClickShop1RenderMarcup,
  onClickShop2RenderMarcup,
} from './js/marcup';
import { ulEl } from './js/marcup';
import { onClickAddToCartButtonEl } from './js/addToCart';

const shop1El = document.querySelector('[data-shop="Shop1"]');
const shop2El = document.querySelector('[data-shop="Shop2"]');

onClickShop1RenderMarcup();
shop1El.addEventListener('click', onClickShop1RenderMarcup);
shop2El.addEventListener('click', onClickShop2RenderMarcup);
ulEl.addEventListener('click', function (event) {
  if (event.target && event.target.classList.contains('add-button')) {
    onClickAddToCartButtonEl(event);
  }
});
