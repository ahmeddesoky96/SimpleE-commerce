let getBadge=document.querySelector(".badge")
console.log(localStorage.getItem("productInCart"))
let numberProduct=JSON.parse(localStorage.getItem("productInCart"));
console.log(numberProduct)
let cartProductAppear=document.querySelector(".carts-product")
let putProductInCart=document.querySelector(".carts-product-dom")
let cartAppear=document.querySelector(".shoppingCart")

getBadge.innerHTML=numberProduct.length
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

putProductInCart.innerHTML+=numberProduct.map((item)=>{
                        return`<p>${item.title}</p>`
                        });

cartAppear.addEventListener('click',openCartMenu); 

function openCartMenu(){
    console.log(localStorage.getItem("productInCart"))
    if(localStorage.getItem("productInCart") !=""){
        if(cartProductAppear.style.display=="block"){
            cartProductAppear.style.display="none"
        }else{
            cartProductAppear.style.display="block"
        }
    }   
}