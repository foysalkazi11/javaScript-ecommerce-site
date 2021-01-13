// barger menu togggle........
const menu = document.querySelector('.nav-menu i');
const menuClose = document.querySelector('.close-btn-menu i');
const containerMenu = document.querySelector('.menu-container');

menu.addEventListener('click',() =>{
showCard(menuContainer)
});
  
menuClose.addEventListener('click',()=>{
hideCard(menuContainer)
});

function showCard(menuContainer){
  menuContainer.classList.add('show-card');
  
}
    
function hideCard(menuContainer){
menuContainer.classList.remove('show-card');
}

// get data cart data from localstaorage and show to ui...............
function getCartItem(){
  const data = JSON.parse(localStorage.getItem  ('singleItem'))
  showTotla(data);
  
}

// display cart item
function showTotla(item){
    
  let totalItem = 0
  item.map(item=>{
    totalItem += 1
     
  })
  
  document.querySelector('.total-item p').textContent = totalItem;
}

document.addEventListener('DOMContentLoaded',()=>{
  getCartItem()
})

// form validation ................
const patterns = {
  name:/^[a-z\s\-]{2,}$/i,
  number:/^[\d]{11}$/,
  email:/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
  address2:/^[.\s,.'-]{0,}$/,
  address:/^[a-zA-Z0-9\s,.'-]{3,}$/,
  message:/^[a-zA-Z0-9\s,.'-]{3,}$/

};

const form = document.querySelector('form');
form.addEventListener('submit',e =>{
  e.preventDefault();
  form.querySelectorAll('input').forEach(input => validation(input));
})

function validation(data){
  
  const name = document.getElementById('name');
  const number = document.getElementById('number');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  

  if(patterns[data.id].test(data.value)){
    data.className = 'success'
    data.nextElementSibling.className = 'display-none'
    
    if(name.className && number.className && email.className && message.className === 'success'){
      submitdata()
    }else{
      console.log('all inputs is not valid');
    }
  }else{
    data.className = 'error'
    data.nextElementSibling.className = 'display'
  }
  if(message.value === ''){
    message.className = 'error'
    message.nextElementSibling.className = 'display'
  }else{
    message.className = 'success'
    message.nextElementSibling.className = 'display-none'
  }
}

// submit message...........
function submitdata(){

  document.querySelector('.pop-up').classList.add('show-pop-up')
  document.querySelector('.overlay').classList.add('show-overlay')
  
}

// close display overlay

document.querySelector('.pop-up button').addEventListener('click',()=>{
  document.querySelector('.pop-up').classList.remove('show-pop-up')
  document.querySelector('.overlay').classList.remove('show-overlay')
})
document.querySelector('.pop-up i').addEventListener('click',()=>{
  document.querySelector('.pop-up').classList.remove('show-pop-up')
  document.querySelector('.overlay').classList.remove('show-overlay')
})
