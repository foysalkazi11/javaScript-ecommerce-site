
let cartItem = []

// get data from localStorage......

function getItem(){
  const data = JSON.parse(localStorage.getItem('singleItem'))
  displayPro(data);
  showTotla(data);
  
  
}

// data display at ui.....

function displayPro(item){
  item.forEach(item => {
    const img = '.'+ item.img;
  
      document.querySelector('.single-item').innerHTML +=`
      <div class = 'single-pro'>
      <div class="img-dis">
      <div class="img">
        <img src="${img}" alt="">
      </div>
      <div class="dis">
        <p>${item.title}</p>
        <p>Price Tk : ${item.price} </p>
        <i class="far fa-trash-alt icon-remove" data-id = ${item.id}></i>
        
      </div>
      </div>
      <p class="item-quantity">${item.amount}</p>
      <p class="item-size">${item.size}</p>
      <p class="item-color">${item.color}</p>
      <p class="item-cost">Tk : ${item.price}</p>
      </div>
        `;
      })
  
}
// count total amount.....

function showTotla(item){
  
  let totalPrice = 0
  let totalItem = 0
  item.map(item =>{
    totalPrice += item.amount * item.price
    totalItem += 1
  })
  
  document.querySelector('.total p:nth-child(2)').textContent = totalPrice;
  document.querySelector('.total-item p').textContent = totalItem;
}

// remove item from cart.........
document.querySelector('.single-item').addEventListener('click',removeItem)
function removeItem(e){
  if(e.target.classList.contains('icon-remove'))
  e.target.parentElement.parentElement.parentElement.remove();
  const id = e.target.dataset.id;
  
  removeLS(id)
  
  
}

// remove from local Storage.....
function removeLS(id){
  
  let data = JSON.parse(localStorage.getItem('singleItem'));
  data = data.filter(data =>data.id != id)
  pushLS(data)
  showTotla(data);
  
}
// store in local storage...........
function pushLS(data){
  localStorage.setItem('singleItem',JSON.stringify(data));
  
}


document.addEventListener('DOMContentLoaded',()=>{
  getItem(); 
  

})

