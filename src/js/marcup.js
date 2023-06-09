import { options1, options2, getResponse } from './get';
const link1El = document.querySelector('.shop1');
const link2El = document.querySelector('.shop2');
const ulEl = document.querySelector('.foods-list');

function createMarkup1(res) {
  const marcup = res.hints
    .map(
      data =>
        `<li class="foods-item" data-shop="shop1"> <img class= "img" src="${
          data.food.image
            ? data.food.image
            : 'https://lh3.googleusercontent.com/mMthq-KCDtUe5hN7KdvJ-ne9HhENGRgFVSPMkSunFI2svPaCmg1R6e8iP-KZ36zElzPWS2upAGPL0cf_AuNS'
        }" alt="${data.food.label}" loading="lazy"/> <h3 data-id="${
          data.food.foodId
        }">${data.food.label}</h3> 
        <p>Price: <span class = "price">${(
          data.food.nutrients.ENERC_KCAL / 100
        ).toFixed(2)}</span>$</p><button class = "add-button" type= "button">
        Add to Cart</button></li>`
    )
    .join('');
  return marcup;
}

function createMarkup2(res) {
  const marcup = res.feed
    .map(data => {
      const numberOfServings =
        data &&
        data.content &&
        data.content.details &&
        data.content.details.numberOfServings;
      return `<li class="foods-item" data-shop="shop2"> <img class="img" src="${
        data.display.images[0]
      }" alt="${
        data.display.displayName
      }" loading="lazy" width="300" /> <h3 data-id="${data['tracking-id']}">${
        data.display.displayName
      }</h3> 
      <p>Price: <span class="price">${
        numberOfServings !== undefined ? numberOfServings : '5'
      }</span>$</p><button class="add-button" type="button">
      Add to Cart</button></li>`;
    })
    .join('');

  return marcup;
}

async function onClickShop1RenderMarcup() {
  const data = await getResponse(options1);
  const marcup = createMarkup1(data);
  ulEl.innerHTML = marcup;
  ulEl.id = 'shop1';
  link2El.style.fontSize = 'inherit';
  link1El.style.fontSize = '24px';
}

async function onClickShop2RenderMarcup() {
  const data = await getResponse(options2);
  const marcup = createMarkup2(data);
  ulEl.innerHTML = marcup;
  ulEl.id = 'shop2';
  link1El.style.fontSize = 'inherit';
  link2El.style.fontSize = '24px';
}

export { onClickShop1RenderMarcup, onClickShop2RenderMarcup, ulEl };
