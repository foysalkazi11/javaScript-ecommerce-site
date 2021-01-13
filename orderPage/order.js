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


// tab content toggel

const icons = document.querySelectorAll('.method i'); icons.forEach(icon =>{icon.addEventListener('click',toggelContent)})

function toggelContent(e){
  
 e.target.classList.toggle('active-icon');
 e.target.parentElement.nextElementSibling.classList.toggle('active-content');

}

// poduct display summery.............
document.querySelector('.order i').addEventListener('click',(e)=>{
  e.target.classList.toggle('active-icon');
 e.target.parentElement.nextElementSibling.classList.toggle('active-display');
})

// show shipping address
function showData(){
  const data =JSON.parse(localStorage.getItem('shippingData'));
 
  data.forEach(data =>{
    document.querySelector('.adds').innerHTML =`
    <div class="name">
    <h4>Name : </h4>
    <p>${data.name}</p>
    </div>
    <div class="mobil">
    <h4>Mobile Number : </h4>
    <p>${data.number}</p>
    </div>
    <div class="email">
    <h4>Email : </h4>
    <p>${data.email}</p>
    </div>
    <div class="business-name">
    <h4>Business Name : </h4>
    <p>${data.businessName}</p>
    </div>
    <div class="address">
    <h4>Address : </h4>
    <p>${data.address}</p>
    </div>
    `;

  })
  
}

//submit order
document.querySelectorAll('.payment-option button').forEach(Option =>{
  Option.addEventListener('click',()=>{
    document.querySelector('.pop-up').classList.add('show-pop-up')
    document.querySelector('.overlay').classList.add('show-overlay')
  })
})
// close display overlay

document.querySelector('.pop-up button').addEventListener('click',()=>{
  document.querySelector('.pop-up').classList.remove('show-pop-up')
  document.querySelector('.overlay').classList.remove('show-overlay')
})
document.querySelector('.pop-up i').addEventListener('click',()=>{
  document.querySelector('.pop-up').classList.remove('show-pop-up')
  document.querySelector('.overlay').classList.remove('show-overlay')
})

document.addEventListener('DOMContentLoaded',()=>{
  showData()
})



