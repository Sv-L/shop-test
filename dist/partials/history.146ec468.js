!function(){let r=document.querySelector(".history"),t=function(r){try{return JSON.parse(localStorage.getItem(r))}catch(r){console.log(r)}}("history");!function(t){if(t&&0!==t.length){let e=function(r){let t=r.map(function(r){return`<li class = "history-item"><ul class= "order-history">${function(r){let t=r.order.map(r=>`<li class="order-item"> <img class= "img-history" src="${r[0]}"/> <div class ="history-wrap"> <p>${r[1]}</p>
            <p>Price: <span class = "price">${r[2]}</span>$</p> </div></li>`).join("");return t}(r)}</ul><p class="">Total price: <span class="">${function(r){let t=r.order,e=t.map(r=>r[2]),i=e.reduce((r,t)=>r+Number(t),0);return i.toFixed(2)}(r)}</span>$</p></li>`}).join("");return t}(t);r.innerHTML=e}}(t)}();
//# sourceMappingURL=history.146ec468.js.map
