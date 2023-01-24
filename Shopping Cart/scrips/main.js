let cart__items = document.querySelector('.cart__items');
let cart_count = document.querySelector('.cart_count');
let addCart = document.querySelectorAll('.btn_btn-addCart');
let btn__remove = document.querySelectorAll('.btn__remove');
let total_counter = document.querySelector('#total_counter');
let total_cost = document.querySelector('.total_cost');
let btn_checkout = document.querySelector('.btn_checkout');

let paymentMethod = document.querySelectorAll("input[type=radio][name=payment-method]");
let isselectedPayment = document.querySelector("input[type=radio][name=payment-method]:checked");
let phone = document.querySelector("#phone");
// console.log(phone)
let parentType = "paypal";

paymentMethod.forEach(pay =>{
    // console.log(pay.value)
    pay.addEventListener('change', (e) =>{
        if(pay.value === "EVC"){
            console.log(pay.value)
            phone.classList.toggle("active");
            parentType = "evc";
            
        }
        else{
            phone.classList.toggle("active");
            parentType = "paypal";
           
        }
})
})

// if checkout btn clicked
btn_checkout.addEventListener('click', (e) =>{
    
        clearItems();
    // if(parentType === "paypal"){
    //     checkoutpaypal();
    // }
    // else{
    //     checkoutEvc();
    // }
})


cart_count.addEventListener('click', (e) =>{
    // togle: waxay noo qabanee claska hadii uu ku jiro way ka saaree hadii uusan ku jirina way ku daree
    cart__items.classList.toggle('active');
});

// Saving Item To local Storage
function SaveItemToLocalStorage(item){
    localStorage.setItem('cart_items', JSON.stringify(item));
}
const addItemToTheCart = (product) =>{
    // insertAdjacentHTML wuxuu ushaqeeyaa sida innerHTML balse wuxuu uga duwan yahay innerHTML ka xogta lagu shubo hadii marlabaad xog lagu shubo tii hore wuu overide gareenaa halka; insertAdjacentHTML uu san ovoride sameeneenin HTML tags cusub ayuu u abuuraa
    cart__items.insertAdjacentHTML("afterbegin",`<div class="car__item">
    <input type="text" name="" id="product__id" hidden value='${product.id}'>
    <img src="${product.p_img}" id="product_img"  alt="">
    <h4 id="product__name">${product.product__name}</h4>
    <a  class="btn__sml btn__decrease" action="decrease" >&minus;</a>
    <h4 class="p_qty">${product.product__qty}</h4>
    <a  class="btn__sml " action="increase" >&plus;</a>
    <span class="product__price">${product.product__price}</span>
    <a  class="btn__sml btn__remove" action="remove" >&times;</a> 
</div>`)
}

// if addCart button clicked
let cartItems=[]
addCart.forEach(btn =>{
    btn.addEventListener('click',() =>{
        // geting the Parent of the button
        let parent = btn.parentElement;
        // console.log(parent);
        const product ={
            id: parent.querySelector('#product_id').value,
            p_img:  parent.querySelector('#p_img').getAttribute('src'),
            product__name:  parent.querySelector('.product__name').innerText,
            product__price: parent.querySelector('.product__price').innerText.replace('$',''),
            product__qty: 1,
        }
       let isIncart = cartItems.filter(item => item.id === product.id).length >0;
       
       if(!isIncart){
        addItemToTheCart(product);
       }else{
        alert('product already in the Cart');
        return;
       }

        const cartDOMitems =document.querySelectorAll('.car__item');
       
        cartDOMitems.forEach(item =>{
        // checking if the product already in the Cart
        console.log(item.querySelector("#product__id").value );
           if(item.querySelector("#product__id").value === product.id){
            incerase(item,product);
            decrease(item,product);
            removeItem(item,product);
           }
        });
        cartItems.push(product);
        SaveItemToLocalStorage(product);
        Calculatetotal();

    })
})

function clearItems(){
    SaveItemToLocalStorage.caller();
    cartItems=[];
    document.querySelectorAll('.cart__items').forEach(item =>{
        item.querySelectorAll('.car__item').forEach(item =>{
            item.remove();
        })
    })
}

// incerase QTY function
function incerase(item,product){
    // Getting increase Function
    item.querySelector("[action='increase']").addEventListener('click',()=>{
        cartItems.forEach(cartItem =>{
            if(cartItem.id === product.id){
                item.querySelector('.p_qty').innerText = ++cartItem.product__qty;
                Calculatetotal();
            }
        })
    })
}
// incerase QTY function
function decrease(item,product){
    // Getting increase Function
    item.querySelector("[action='decrease']").addEventListener('click',()=>{
        cartItems.forEach(cartItem =>{
            if(cartItem.id === product.id){
                if(cartItem.product__qty > 1){
                    item.querySelector('.p_qty').innerText = --cartItem.product__qty;
                }
                else{
                    cartItems=cartItems.filter(newElement => newElement.id !== product.id);
                    item.remove();
                }
                Calculatetotal();
            }
        })
    })
}

// Calculate function
function Calculatetotal(){
    let total=0;
    cartItems.forEach( item =>{
        total += item.product__qty * item.product__price;
    });
    // console.log(total);
    total_cost.innerText =total;
    total_counter.innerText =cartItems.length;
    
}
// removing the product from cart
function removeItem(item,product){
      // Getting increase Function
      item.querySelector("[action='remove']").addEventListener('click',()=>{
        console.log(item)
        console.log(product)
        cartItems.forEach(cartItem =>{
            if(cartItem.id == product.id){
            cartItems=cartItems.filter(newElement => newElement.id != product.id);
            // console.log(item);
            item.remove();
            Calculatetotal();
            }
           
        })
    })
}

// ====================== Payment Paypal Or EvcPlus ======================================
