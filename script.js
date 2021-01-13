
const navMenu = document.querySelector('.nav-menu i');
const closeMenu = document.querySelector('.close-btn-menu i');
const menuContainer = document.querySelector('.menu-container');
const productDisplay = document.querySelectorAll('.product-display')





// get product from json data..............


  async function getProduct(){
    try {
          
      let respones = await fetch('products.json');
      let data = await respones.json()
      return data

    } catch (error) {
      console.log(error);
    }
  }



// display product in UI ....................

  
  function displayProduct(products){
    let link = '';
    products.forEach(product => {
      if(product.catagoryTemp === 'trending'){
        link = document.getElementById('trending');
        disPro(product,link)
      }
      if(product.catagoryTemp === 'recommend'){
        link = document.getElementById('recommend');
        disPro(product,link)
      }
      if(product.catagoryTemp === 'computer'){
        link = document.getElementById('computer');
        disPro(product,link)
      }
      if(product.catagoryTemp === 'mobile'){
        link = document.getElementById('mobile');
        disPro(product,link)
      }
    });
    
    
    
  }
  
  function disPro(product,link){
    
    link.innerHTML += `
    <div class="product-item">
    <div class="img-container">
    <img class = 'item-img' src=${product.image} alt="" data-id = ${product.id}>
    <div class="product-dis">
      <h4>${product.title}</h4>
      <p class="price">$${product.price}</p>
    </div>
    </div>
    </div>
    `;
    
  }

  
  // open and close menu bar........

  navMenu.addEventListener('click',() =>{
  showCard(menuContainer)});
    
  closeMenu.addEventListener('click',()=>{
  hideCard(menuContainer)});
    

  function showCard(menuContainer){
  menuContainer.classList.add('show-card');
    
  }

  function hideCard(menuContainer){
  menuContainer.classList.remove('show-card');
    
  }
  

  // selected porduct sent to local storage and go to next page.........

    productDisplay.forEach(prodis =>{
      prodis.addEventListener('click',e=>{
        if (e.target.classList.contains('item-img')) {
          
          const id = e.target.dataset.id;
          
          singlePro(id)
          window.location.href= 'proDis/proDis.html'
              
        }
      })

    })
      
  


// get data cart data from localstaorage and show to ui...............

function getCartItem(){
  const data = JSON.parse(localStorage.getItem  ('singleItem'))
  showTotla(data);
  
}

function showTotla(item){
    
  let totalItem = 0
  item.map(item=>{
    totalItem += 1
     
  })
  
  document.querySelector('.total-item p').textContent = totalItem;

}


//  local strage method.............

 function saveLocalStorage(products){
  localStorage.setItem('products',JSON.stringify(products))
 }

 function singlePro (cart){
  localStorage.setItem('singlePro',JSON.stringify(cart))
 }
 function getCartItem(){
  const data = JSON.parse(localStorage.getItem  ('singleItem'))
  showTotla(data);
  
}



// mobile menu nev bar.............
const icon = document.querySelectorAll('.menu-item ul li i');
console.log(icon);

icon.forEach(icon =>{
icon.addEventListener('click',e => {
  
    e.target.classList.toggle('active-icon')
    e.target.nextElementSibling.classList.toggle('show');
  
  
})
})



// function fire after domcontentloaded................

document.addEventListener('DOMContentLoaded',()=>{
  
  getProduct()
  .then(products => {
    
    displayProduct(products);
    saveLocalStorage(products);
    getCartItem()

    // slick slider.................

    $('.slick-slider').slick({
      dots:true, 
      autoplay: true,
      autoplaySpeed: 2000,
      speed:1000,
      prevArrow:$('.slider .left-icon'),
      nextArrow:$('.slider .right-icon')
    });

    $('#trending').slick({
      slidesToShow: 5,
      slidesToScroll: 3,
     
      infinite: true,
      prevArrow:$('.trending-icon .trending-left'),
      nextArrow:$('.trending-icon .trending-right'),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true
            
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
    $('#recommend').slick({
      slidesToShow: 5,
      slidesToScroll: 3,
     
      infinite: true,
      prevArrow:$('.recommend-icon .recommend-left'),
      nextArrow:$('.recommend-icon .recommend-right'),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true
            
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
    $('#computer').slick({
      slidesToShow: 5,
      slidesToScroll: 3,
     
      infinite: true,
      prevArrow:$('.computer-icon .computer-left'),
      nextArrow:$('.computer-icon .computer-right'),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true
            
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
    $('#mobile').slick({
      slidesToShow: 5,
      slidesToScroll: 3,
     
      infinite: true,
      prevArrow:$('.mobile-icon .mobile-left'),
      nextArrow:$('.mobile-icon .mobile-right'),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true
            
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
    
    
  })

});

