import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { checkFormFill } from './checkFormFilelds';
import throttle from 'lodash.throttle';
import parseStorage from './parseStorage';
import { priceEl } from './totalPrice';
import { orderEl } from './cartMarcup';
const formEl = document.querySelector('.shopping-cart-form');
const throttleOnInput = throttle(onInput, 500);
const STORAGE_KEY = 'feedback-form-state';
let formState = {};

const history = parseStorage('history');
let allHistory = [];
if (history) {
  allHistory = Array.isArray(history) ? [...history] : [history];
}

formEl.addEventListener('input', throttleOnInput);
formEl.addEventListener('submit', onSubmit);

if (localStorage.getItem(STORAGE_KEY)) {
  formState = parseStorage(STORAGE_KEY);
  fillFormFields(formState, formEl);
}

function fillFormFields(storageValue, form) {
  const formStateKeys = Object.keys(storageValue);
  for (const key of formStateKeys) {
    form.elements[key].value = storageValue[key];
  }
}

function onInput(e) {
  formState[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formState));
}

function onSubmit(e) {
  e.preventDefault();
  if (!parseStorage('order')) {
    Notify.failure('Please add items to cart');
  }
  if (checkFormFill(e.currentTarget) && parseStorage('order')) {
    let data = parseStorage(STORAGE_KEY);
    data.order = parseStorage('order').map(item => [item.id, item.shop]);

    console.log(data);
    e.currentTarget.reset();
    const history = {
      login: data.email,
    };
    history.order = parseStorage('order').map(item => [
      item.img,
      item.name,
      item.price,
    ]);
    allHistory.shift(history);
    localStorage.setItem('history', JSON.stringify(allHistory));
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem('order');
    formState = {};
    orderEl.innerHTML = '';
    priceEl.style.display = 'none';
  }
}
