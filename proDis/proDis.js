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




let cartPro = [];

// get item form local storage......

function getItem(){
  const id = JSON.parse(localStorage.getItem('singlePro'))
  
  const product = JSON.parse(localStorage.getItem('products'))
  const singleItem = JSON.parse(localStorage.getItem('singleItem'))
  singleItem.forEach(item => {
    cartPro.push(item)
    
  });
  
  const data = product.find( product =>{
    
    return product.id == id
    
  })
  displayPro(data)
  
  
  
}

// display product at ui............

function displayPro(data){
  
  const img = '.'+ data.image;
  
  document.querySelector('.main-img img').src = img;

  document.querySelector('.pro-discripation .name span').textContent += data.title;
  document.querySelector('.pro-discripation .cost span').textContent += data.price;
  
  document.querySelector('.sub-img img:nth-child(1)').src = '.'+ data.subImage.img1;
  document.querySelector('.sub-img img:nth-child(2)').src = '.'+ data.subImage.img2;
  document.querySelector('.sub-img img:nth-child(3)').src = '.'+ data.subImage.img3;
  document.querySelector('.sub-img img:nth-child(4)').src = '.'+ data.subImage.img4;
  document.querySelector('.pro-details p').textContent = data.details;
  
  
  
}
// image chage in imge gallary.............

document.querySelector('.sub-img').addEventListener('click',changeImg )

function changeImg(e){
  const mainImg = document.querySelector('.main-img img')
  mainImg.src = e.target.src 
  
}

// data arrange for next cart page.....

document.querySelector('.pro-details button').addEventListener('click',cartpage)

function cartpage(){
  const ids = JSON.parse(localStorage.getItem('singlePro'))
  const product = JSON.parse(localStorage.getItem('products'))
  const data = product.find( product =>{
    return product.id == ids
    
  })
  const id = data.id
  const amount = document.querySelector('.quantity .amount').textContent;
  const size = document.querySelector('.size select').value;
  const color = document.querySelector('.color select').value;
  
  const img = data.image
  const title = data.title
  const price = data.price

  let singleItem = {id,amount,size,color,img,title,price};
  
  cartPro = [...cartPro,singleItem]
  
  console.log(cartPro);
  LocalStorage.saveLS(cartPro)
  window.location.href = '../cartPage/cart.html'
  
} 


// quantity increase or decrease............
let amount = 1;
document.getElementById('increase').addEventListener('click',()=>{
  amount +=1
  document.querySelector('.amount').textContent = amount;
})
document.getElementById('decrease').addEventListener('click',()=>{
  
  if(amount < 1){
    amount = 1;
  }
  amount -=1
  document.querySelector('.amount').textContent = amount;
})


// data store in localStorage for next cart page.....


class LocalStorage{
  static saveLS(cartPro){
    
    localStorage.setItem('singleItem',JSON.stringify(cartPro))
  }
}

// function fire after domcontentloaded ........

document.addEventListener('DOMContentLoaded',()=>{
  getItem();
  getCartItem()
  
 
})