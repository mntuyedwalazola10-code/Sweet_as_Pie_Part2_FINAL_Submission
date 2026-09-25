// Sweet as Pie - functional prototype behaviour for the responsive website.
const PRODUCTS = {
  apple: { name: 'Apple Pie', price: 220, image: 'https://www.sweetaspie.co.za/cdn/shop/files/Apple_Pie.jpg?v=1763087026&width=1946' },
  blueberry: { name: 'Blueberry Pie', price: 220, image: 'https://www.sweetaspie.co.za/cdn/shop/files/Sharing_Blueberry_Pie.jpg?v=1763087005&width=1946' },
  cherry: { name: 'Cherry Pie', price: 220, image: 'https://www.sweetaspie.co.za/cdn/shop/files/Cherry_Pie.jpg?v=1763087017&width=1946' }
};

function getCart(){ try { return JSON.parse(localStorage.getItem('sweetAsPieCart')) || {}; } catch(e){ return {}; } }
function saveCart(cart){ localStorage.setItem('sweetAsPieCart', JSON.stringify(cart)); }
function money(n){ return `R${Number(n).toFixed(2)}`; }

function addToCart(key){
  const cart=getCart(); cart[key]=(cart[key]||0)+1; saveCart(cart);
  window.location.href='checkout.html';
}

document.querySelectorAll('[data-add-product]').forEach(btn=>{
  btn.addEventListener('click',()=>addToCart(btn.dataset.addProduct));
});

function renderCheckout(){
  const list=document.querySelector('#cartItems'); if(!list) return;
  const cart=getCart(); list.innerHTML=''; let subtotal=0;
  Object.entries(cart).forEach(([key,qty])=>{
    const p=PRODUCTS[key]; if(!p||qty<1) return; subtotal += p.price*qty;
    const row=document.createElement('div'); row.className='cart-line';
    row.innerHTML=`<img src="${p.image}" alt="${p.name}"><div><strong>${p.name}</strong><br><span>${money(p.price)} each</span></div><div class="qty-control"><button type="button" data-change="${key}" data-delta="-1" aria-label="Decrease ${p.name} quantity">−</button><strong>${qty}</strong><button type="button" data-change="${key}" data-delta="1" aria-label="Increase ${p.name} quantity">+</button></div>`;
    list.appendChild(row);
  });
  if(subtotal===0) list.innerHTML='<p class="empty-cart">Your cart is empty. <a href="products.html">Choose a pie</a> to begin.</p>';
  document.querySelector('#subtotal').textContent=money(subtotal);
  document.querySelector('#total').textContent=money(subtotal);
  document.querySelectorAll('[data-change]').forEach(b=>b.addEventListener('click',()=>{
    const c=getCart(), key=b.dataset.change; c[key]=Math.max(0,(c[key]||0)+Number(b.dataset.delta)); if(c[key]===0) delete c[key]; saveCart(c); renderCheckout();
  }));
}
renderCheckout();

const delivery=document.querySelector('#delivery'), collection=document.querySelector('#collection'), address=document.querySelector('#address');
function toggleAddress(){ if(!address) return; const required=delivery?.checked; address.disabled=!required; address.required=!!required; address.placeholder=required?'Enter your delivery address':'Not required for collection'; }
[delivery,collection].forEach(x=>x?.addEventListener('change',toggleAddress)); toggleAddress();

const checkoutForm=document.querySelector('#checkoutForm');
checkoutForm?.addEventListener('submit',e=>{
  e.preventDefault(); const cart=getCart();
  if(Object.keys(cart).length===0){ document.querySelector('#checkoutStatus').textContent='Please add at least one product before placing your order.'; return; }
  if(!checkoutForm.reportValidity()) return;
  document.querySelector('#checkoutStatus').textContent='Order details captured successfully for this website prototype. Thank you!';
  saveCart({}); renderCheckout(); checkoutForm.reset(); toggleAddress();
});

document.querySelectorAll('form[data-demo-form]').forEach(form=>form.addEventListener('submit',e=>{
  e.preventDefault(); if(!form.reportValidity()) return;
  const status=form.querySelector('.form-status'); if(status) status.textContent=form.dataset.success || 'Thank you. Your form was submitted successfully.';
  form.reset();
}));
