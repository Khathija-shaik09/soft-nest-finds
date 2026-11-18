/*
SOFT NEST FINDS - EDIT PRODUCTS HERE
Prices below are DEMO values for layout testing, not live verified prices.
Replace demo values and URLs with the exact product's current details.
For accurate automated price updates, connect approved retailer APIs/feeds through a secure backend.
*/
const products = [
 {id:1,name:'Warm Glow Table Lamp',category:'Home Decor',price:499,note:'Soft light for slow evenings',image:'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80',offers:[
  {store:'Amazon',price:499,url:'ADD_AMAZON_PRODUCT_OR_AFFILIATE_URL'},
  {store:'Flipkart',price:529,url:'ADD_FLIPKART_AFFILIATE_URL'},
  {store:'Meesho',price:459,url:'ADD_MEESHO_PRODUCT_URL'},
  {store:'Pepperfry',price:null,url:''}]},
 {id:2,name:'Linen Cushion Cover',category:'Home Decor',price:299,note:'A little texture, a lot of cozy',image:'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80',offers:[{store:'Amazon',price:299,url:'ADD_AMAZON_URL'},{store:'Flipkart',price:319,url:'ADD_FLIPKART_URL'},{store:'Meesho',price:249,url:'ADD_MEESHO_URL'}]},
 {id:3,name:'Minimal Ceramic Vase',category:'Home Decor',price:349,note:'For flowers or just by itself',image:'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=800&q=80',offers:[{store:'Amazon',price:349,url:'ADD_AMAZON_URL'},{store:'Flipkart',price:379,url:'ADD_FLIPKART_URL'}]},
 {id:4,name:'Floral Midi Dress',category:'Western Wear',price:899,note:'Easy everyday outfit',image:'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80',offers:[{store:'Myntra',price:899,url:'ADD_MYNTRA_URL'},{store:'AJIO',price:949,url:'ADD_AJIO_URL'},{store:'Amazon',price:999,url:'ADD_AMAZON_URL'}]},
 {id:5,name:'Cotton Kurta Set',category:'Ethnic Wear',price:1199,note:'A comfortable festive-ready look',image:'https://images.unsplash.com/photo-1583391733956-6c78276477e9?auto=format&fit=crop&w=800&q=80',offers:[{store:'Myntra',price:1199,url:'ADD_MYNTRA_URL'},{store:'Flipkart',price:1149,url:'ADD_FLIPKART_URL'},{store:'Meesho',price:999,url:'ADD_MEESHO_URL'}]},
 {id:6,name:'Casual Everyday Top',category:'Casual Wear',price:499,note:'Pair it with your favourite jeans',image:'https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&w=800&q=80',offers:[{store:'Myntra',price:499,url:'ADD_MYNTRA_URL'},{store:'AJIO',price:459,url:'ADD_AJIO_URL'}]},
 {id:7,name:'Party Wear Dress',category:'Party Wear',price:1499,note:'A little extra sparkle for plans',image:'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80',offers:[{store:'Myntra',price:1499,url:'ADD_MYNTRA_URL'},{store:'AJIO',price:1399,url:'ADD_AJIO_URL'},{store:'Tata CLiQ',price:1599,url:'ADD_TATA_CLIQ_URL'}]},
 {id:8,name:'Structured Office Shirt',category:'Office Wear',price:799,note:'Simple, polished and versatile',image:'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80',offers:[{store:'Myntra',price:799,url:'ADD_MYNTRA_URL'},{store:'Amazon',price:749,url:'ADD_AMAZON_URL'}]},
 {id:9,name:'Everyday Shoulder Bag',category:'Bags',price:699,note:'A useful finishing touch',image:'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',offers:[{store:'Myntra',price:699,url:'ADD_MYNTRA_URL'},{store:'AJIO',price:649,url:'ADD_AJIO_URL'},{store:'Amazon',price:729,url:'ADD_AMAZON_URL'}]},
 {id:10,name:'Minimal White Sneakers',category:'Footwear',price:999,note:'For everyday comfort',image:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',offers:[{store:'Flipkart',price:999,url:'ADD_FLIPKART_URL'},{store:'Myntra',price:1099,url:'ADD_MYNTRA_URL'},{store:'AJIO',price:949,url:'ADD_AJIO_URL'}]},
 {id:11,name:'Daily Beauty Essentials Set',category:'Beauty',price:599,note:'A simple self-care edit',image:'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80',offers:[{store:'Nykaa',price:599,url:'ADD_NYKAA_URL'},{store:'Amazon',price:629,url:'ADD_AMAZON_URL'},{store:'Tata CLiQ',price:619,url:'ADD_TATA_CLIQ_URL'}]},
 {id:12,name:'Scented Candle',category:'Home Decor',price:199,note:'A tiny ritual for winding down',image:'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80',offers:[{store:'Amazon',price:199,url:'ADD_AMAZON_URL'},{store:'Meesho',price:179,url:'ADD_MEESHO_URL'}]}
];

const STORE_ORDER=['Amazon','Flipkart','Meesho','Myntra','AJIO','Nykaa','Tata CLiQ','Shopsy','Pepperfry'];
let activeStyle='All', showFav=false;
let favorites=JSON.parse(localStorage.getItem('snf-favs')||'[]');
const grid=document.querySelector('#products');
const money=n=>n==null?'Price not added':'₹'+Number(n).toLocaleString('en-IN');
function realLink(url){return typeof url==='string' && /^https?:\/\//i.test(url) && !url.includes('ADD_');}
function lowestOffer(p){return (p.offers||[]).filter(o=>o.price!=null).sort((a,b)=>a.price-b.price)[0];}
function render(){
 const term=document.querySelector('#searchInput').value.trim().toLowerCase();
 const category=document.querySelector('#categoryFilter').value;
 const sort=document.querySelector('#sortSelect').value;
 let shown=products.filter(p=>(category==='All'||p.category===category)&&(activeStyle==='All'||p.category===activeStyle)&&(!showFav||favorites.includes(p.id))&&(`${p.name} ${p.category} ${p.note}`.toLowerCase().includes(term)));
 if(sort==='low') shown.sort((a,b)=>(lowestOffer(a)?.price??a.price)-(lowestOffer(b)?.price??b.price));
 if(sort==='high') shown.sort((a,b)=>(lowestOffer(b)?.price??b.price)-(lowestOffer(a)?.price??a.price));
 if(sort==='name') shown.sort((a,b)=>a.name.localeCompare(b.name));
 document.querySelector('#resultCount').textContent=`${shown.length} product(s)`;
 grid.innerHTML=shown.map(p=>{
  const offers=(p.offers||[]).filter(o=>o.price!=null).sort((a,b)=>a.price-b.price);
  const cheapest=offers[0];
  const links=offers.map(o=>`<div class="offer-row"><span><b>${o.store}</b><small>${money(o.price)} · demo/listed price</small></span>${realLink(o.url)?`<a class="store-button" href="${o.url}" target="_blank" rel="sponsored noopener noreferrer">Shop ↗</a>`:`<span class="missing-link">Add link</span>`}</div>`).join('');
  return `<article class="product"><img src="${p.image}" alt="${p.name}" loading="lazy"><button class="heart ${favorites.includes(p.id)?'saved':''}" data-fav="${p.id}" aria-label="Save ${p.name}">${favorites.includes(p.id)?'♥':'♡'}</button><div class="product-info"><span class="category-tag">${p.category}</span><h3>${p.name}</h3><p>${p.note}</p><div class="product-bottom"><span class="price">From ${money(cheapest?.price??p.price)}</span><button class="compare-btn" data-compare="${p.id}">Compare prices</button></div><div class="compare-panel" id="compare-${p.id}" hidden><div class="compare-title">Available store offers</div>${links}<p class="price-note">Prices are examples until you replace them with verified current prices. Check delivery and final checkout price.</p></div></div></article>`;
 }).join('')||'<p class="empty">No products found. Try another search or category.</p>';
 document.querySelector('#favCount').textContent=favorites.length;
 document.querySelectorAll('[data-fav]').forEach(b=>b.onclick=()=>{const id=Number(b.dataset.fav);favorites=favorites.includes(id)?favorites.filter(x=>x!==id):[...favorites,id];localStorage.setItem('snf-favs',JSON.stringify(favorites));render();});
 document.querySelectorAll('[data-compare]').forEach(b=>b.onclick=()=>{const panel=document.querySelector('#compare-'+b.dataset.compare);panel.hidden=!panel.hidden;b.textContent=panel.hidden?'Compare prices':'Hide comparison';});
}
document.querySelectorAll('.style-pill').forEach(b=>b.onclick=()=>{activeStyle=b.dataset.style;document.querySelectorAll('.style-pill').forEach(x=>x.classList.toggle('active',x===b));document.querySelector('#categoryFilter').value='All';showFav=false;render();document.querySelector('#finds').scrollIntoView({behavior:'smooth'});});
document.querySelectorAll('.collection').forEach(a=>a.addEventListener('click',()=>{const c=a.dataset.category;activeStyle='All';document.querySelector('#categoryFilter').value=c;render();}));
['searchInput','categoryFilter','sortSelect'].forEach(id=>document.querySelector('#'+id).addEventListener(id==='searchInput'?'input':'change',()=>{activeStyle='All';document.querySelectorAll('.style-pill').forEach(x=>x.classList.toggle('active',x.dataset.style==='All'));render();}));
document.querySelector('#favToggle').onclick=()=>{showFav=!showFav;activeStyle='All';document.querySelector('#categoryFilter').value='All';document.querySelector('#finds').scrollIntoView({behavior:'smooth'});render();};
document.querySelector('#menuBtn').onclick=()=>document.querySelector('#mainNav').classList.toggle('open');
render();
