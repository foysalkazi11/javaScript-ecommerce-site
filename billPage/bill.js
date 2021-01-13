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


let shippingData = [];
//form validation and go to order page
const patterns = {
  name:/^[a-z\s\-]{2,}$/i,
  businessName:/^[a-z\s\-]{2,}$/i,
  lastName:/^[a-z\s\-]{2,10}$/i,
  username:/^[\w\-\.]{5,12}$/,
  number:/^[\d]{11}$/,
  password:/^(?=.*\d).{8,12}$/,
  conformPassword:/^(?=.*\d).{8,12}$/,
  email:/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
  address2:/^[.\s,.'-]{0,}$/,
  address:/^[a-zA-Z0-9\s,.'-]{3,}$/

};

const form = document.querySelector('form');
form.addEventListener('submit',nextPage)
function nextPage(e){
  e.preventDefault()
  
  form.querySelectorAll('input').forEach(input => regexCheck(input))
  
  
}


function regexCheck(data){
  const name = document.getElementById('name');
  const number = document.getElementById('number');
  const email = document.getElementById('email');
  
  const businessName = document.getElementById('businessName');
  const address = document.getElementById('address');


  if(patterns[data.id].test(data.value)){
    data.className = 'success'
    data.nextElementSibling.className = 'display-none'

    if(name.className && number.className && email.className && businessName.className && address.className === 'success'){
      sentdata()
    }else{
      console.log('all inputs is not valid');
    }
  }else{
    data.className = 'error'
    data.nextElementSibling.className = 'display'
  }
}

//push to local Storage
function sentdata(){
  const name = document.getElementById('name').value;
  const number = document.getElementById('number').value;
  const email = document.getElementById('email').value;
  const businessName = document.getElementById('businessName').value;
  const address = document.getElementById('address').value;

  const data = {name,number,email,businessName,address}

  shippingData.push(data);
  saveLS(shippingData)
  window.location.href = '../orderPage/order.html'
    
  form.querySelectorAll('input').forEach(input => input.value = '')
  
}

function saveLS(data){
  localStorage.setItem('shippingData',JSON.stringify(data));
}

function alert(){
    
    document.querySelector('.add-alert').classList.add('active')
    setTimeout(() => {
      document.querySelector('.add-alert').classList.remove('active')
    }, 3000);
  }

