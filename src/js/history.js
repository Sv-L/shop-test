import parseStorage from './parseStorage';
const ulHistoryEl = document.querySelector('.history');
const allHistory = parseStorage('history');

function creatmarc(allHist) {
  const marcup = allHist
    .map(function (order) {
      return `<li class = "history-item"><ul class= "order-history">${createMarkupHistory(
        order
      )}</ul><p class="">Total price: <span class="">${totalPrice(order)}</span>$</p></li>`;
    })
    .join('');
  return marcup;
}

function createMarkupHistory(historyOrder) {
  const marcup = historyOrder.order
    .map(
      food =>
        `<li class="order-item"> <img class= "img-history" src="${food[0]}"/> <div class ="history-wrap"> <p>${food[1]}</p>
            <p>Price: <span class = "price">${food[2]}</span>$</p> </div></li>`
    )
    .join('');
  return marcup;
}

function RenderMarkupCart(order) {
  if (order && order.length !== 0) {
    const historyMarcup = creatmarc(order);
    ulHistoryEl.innerHTML = historyMarcup;
  }
}

RenderMarkupCart(allHistory);

function totalPrice(item) {
  const order = item.order;
  const prices = order.map(order => order[2]);
  const totalPrice = prices.reduce((previousValue, number) => {
    return previousValue + Number(number);
  }, 0);

  return totalPrice.toFixed(2);
}
