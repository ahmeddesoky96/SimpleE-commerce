let userInfo=document.querySelector("#user-info")
let userName=document.querySelector("#user")
let links=document.querySelector("#links")
let getUser=localStorage.getItem("username")
let logoutBtn=document.querySelector("#logout")
var counterSlide=10;
var arrayPicture=["pict/slider1.jpg","pict/slider2.jpg","pict/slider3.jpg","pict/slider4.jpg"]

//category button
let phoneBtn=document.querySelector("#phoneButton")
let labBtn=document.querySelector('#labButton')
let makeupBtn=document.querySelector('#makeupButton')
let carBtn=document.querySelector('#carButton')
let products=[]
phoneBtn.addEventListener("click",function(){
    products=[
        {
            id:1 ,
            title:"Glaxy S15",
            size:"12000",
            imageUrl:"pict/phone1.jpg"
            
        },
        {
            id:2 ,
            title:"redmi note10",
            size:"8000",
            imageUrl:"pict/phone2.jpg"
            
        },
        {
            id:3 ,
            title:"Poco N4",
            size:"6000",
            imageUrl:"pict/phone3.jpg"
            
        },
        {
            id:4 ,
            title:"Iphon S7",
            size:"28000",
            imageUrl:"pict/phone4.jpg"
            
        }
    ];
    drawProductsUI()

})
labBtn.addEventListener("click",function(){
    products=[
        {
            id:5 ,
            title:"Soni Vaio E15",
            size:"18000 ",
            imageUrl:"pict/lab1.jpg"
            
        },
        {
            id:6 ,
            title:"Lenovo Ipad3 Gaming",
            size:"25000 ",
            imageUrl:"pict/lab2.jpg"
            
        },
        {
            id:7 ,
            title:"Dell G15 5511",
            size:"31000",
            imageUrl:"pict/lab3.jpg"
            
        },
        {
            id:8 ,
            title:"Lenovo Yoga",
            size:"28000",
            imageUrl:"pict/lab4.jpg"
            
        }
    ];
    drawProductsUI()
})
makeupBtn.addEventListener("click",function(){
    products=[
        {
            id:9 ,
            title:"كونسلر فيت مى",
            size:"350 ",
            imageUrl:"pict/makeup1.jpg"
            
        },
        {
            id:10 ,
            title:"احمر الشفاة سائل",
            size:"550",
            imageUrl:"pict/makeup2.jpg"
            
        },
        {
            id:11,
            title:"ماسكرا كولسو",
            size:"390",
            imageUrl:"pict/makeup3.jpg"
            
        },
        {
            id:12 ,
            title:"بودرا",
            size:"1200",
            imageUrl:"pict/makeup4.jpg"
            
        }
    ];
    drawProductsUI()

})
carBtn.addEventListener("click",function(){
    products=[
        {
            id:13 ,
            title:"LancerShark2022",
            size:"350000",
            imageUrl:"pict/car1.jpg"
            
        },
        {
            id:14 ,
            title:"Kia Sportage 2022",
            size:"640000 ",
            imageUrl:"pict/car2.jpg"
            
        },
        {
            id:15 ,
            title:"Hyundai Tucson2022",
            size:"990000",
            imageUrl:"pict/car3.jpg"
            
        },
        {
            id:16 ,
            title:"Nissan Juke2022",
            size:"480000",
            imageUrl:"pict/car4.jpg"
            
        }
    ];
    drawProductsUI()

})
if(getUser){
    links.remove();
    userInfo.style.display="flex"
    userName.innerHTML=getUser
}
logoutBtn.addEventListener("click",function(){
    localStorage.clear();
    setTimeout(()=>{
        window.location="register.html"
    },1500);
});
//set products
let productDom=document.querySelector(".products")
let badgeDom=document.querySelector(".badge")
let cartProduct=document.querySelector(".carts-product")
let cartProductDom=document.querySelector(".carts-product-dom")
let shoppingCartAppear=document.querySelector(".shoppingCart")
let productCoutner=0;
//check if product cart empty or not 
let arrayCartProduct=JSON.parse(localStorage.getItem('productInCart'))
?JSON.parse(localStorage.getItem('productInCart')):[];
// get product from local storge 
if(arrayCartProduct){
    arrayCartProduct.map((item)=>{
        cartProductDom.innerHTML+=`<p>${item.title}</p>`
    })
    badgeDom.style.display="block";
    badgeDom.innerHTML+=arrayCartProduct.length;
}
//array of obejct of my product

//slider auto move
setInterval(function(){
    
    if(counterSlide==10){
        counterSlide=0;
    }
    var slider=document.getElementById("sliderhome");
    counterSlide++;
    if(counterSlide>3){counterSlide=0}
    slider.style.backgroundImage="url("+arrayPicture[counterSlide]+")";
},1500)

//slider Manual move

function nextPicture(){
    var slider=document.getElementById("sliderhome")
    slider.style.backgroundRepeat="no-repeat,no-repeat"
    slider.style.backgroundPosition="right,left"
    if(counterSlide==10){
        var counterPlus=document.getElementById("increase")
        counterSlide=Number(counterPlus.value)
    }
    
    var counterPlus=document.getElementById("increase"); 
    (counterSlide>=3)?counterSlide=0:counterSlide=counterSlide+1;
    slider.style.backgroundImage="url("+arrayPicture[counterSlide]+")";

}
function backPicture(){
    var slider=document.getElementById("sliderhome")
    slider.style.backgroundRepeat="no-repeat,no-repeat"
    slider.style.backgroundPosition="right,left"
    if(counterSlide==10){
        var counterless=document.getElementById("decrease")
        counterSlide=Number(counterless.value)
    } 
    
    console.log(counterSlide)
    if(counterSlide<=0){
        
        counterSlide=4
        counterSlide=counterSlide-1
        slider.style.backgroundImage="url("+arrayPicture[counterSlide]+")";
    }else{
        counterSlide=counterSlide-1
        slider.style.backgroundImage="url("+arrayPicture[counterSlide]+")";
    }   
}



// display my product
function drawProductsUI(){
    let productsUI=products.map((item)=>{
        return`
            <div class="product-item">
                <img src="${item.imageUrl}" class="product-item-img" alt="product-img"/>

                <div class="product-item-description">
                    <a onclick='saveItemData(${item.id})'>${item.title}</a>
                    <p>Lorem ipsum dolor, sit amet consectetu. Odio, excepturi</p>
                    <span>Size:${item.size}</span>
                </div>

                <div class="product-item-actions">
                    <button class="add-to-cart" onclick="addToCart(${item.id})">Add To Cart</button>    
                    <i class="add-to-favorite fa-regular fa-heart"></i>
                </div>
            </div>
        `
    });
    productDom.innerHTML=productsUI
}
drawProductsUI();

// put product into my cart
function addToCart(id){   
    let pickItem=products.find((item)=>item.id===id);
    productCoutner++;
    badgeDom.style.display="block";
    cartProductDom.innerHTML+=`<p>${pickItem.title}</p>`
    arrayCartProduct=[...arrayCartProduct,pickItem];
    localStorage.setItem('productInCart',JSON.stringify(arrayCartProduct))
    let cartProductItems=document.querySelectorAll(".carts-product div p")
    badgeDom.innerHTML=cartProductItems.length;  
}
//appear list of product in cart 
shoppingCartAppear.addEventListener('click',openCartMenu); 

function openCartMenu(){
    console.log(cartProductDom.innerHTML)
    if(cartProductDom.innerHTML !=""){
        if(cartProduct.style.display=="block"){
            cartProduct.style.display="none"
        }else{
            cartProduct.style.display="block"
        }
    }   
}

function saveItemData(id){
    localStorage.setItem("productId",id)
    window.location="productDetails.html"
}
