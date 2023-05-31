let productInCart=localStorage.getItem("productInCart");
let getProduct=document.querySelector(".products")
let showEmpty=document.querySelector(".noProduct")
if(productInCart){
    let items=JSON.parse(productInCart);
    drawProductsUI(items);
    console.log(items+"hello from full")
    showEmpty.style.display="none"
    if(items[0]==null){
        showEmpty.style.display="block"
        console.log(items+"hello from empty")
        
    }
} 

//draw my product in cat
function drawProductsUI(products){
    let productsUI=products.map((item)=>{
        return`
            <div class="product-item">
                <img src="${item.imageUrl}" class="product-item-img" alt="phone-img"/>

                <div class="product-item-description">
                    <h2>${item.title}</h2>
                    <p>Lorem ipsum dolor, sit amet consectetu. Odio, excepturi</p>
                    <span>Size:${item.size}</span>
                </div>

                <div class="product-item-actions">
                    <button class="add-to-cart" onclick="removeFromCart(${item.id})">Remove To Cart</button>    
                    <i class="add-to-favorite fa-regular fa-heart"></i>
                </div>
            </div>
        `
    });
    getProduct.innerHTML=productsUI
}

function removeFromCart(id){
    
    if(productInCart){

        let items=JSON.parse(productInCart);
        
        let filteredItems = items.filter(item => item.id != id);
        localStorage.setItem('productInCart',JSON.stringify(filteredItems));
        setTimeout(() => { document.location.reload(); }, 100);
       
        
    }
}