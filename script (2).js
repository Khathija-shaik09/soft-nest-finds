// Store search links are used as safe starter links. Replace them with exact affiliate product URLs when available.
const products=[
 {id:1,name:'Warm Glow Table Lamp',category:'Lighting',note:'Soft light for slow evenings',image:'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80',link:'https://www.amazon.in/s?k=warm+glow+table+lamp'},
 {id:2,name:'Linen Cushion Cover',category:'Decor',note:'A little texture, a lot of cozy',image:'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80',link:'https://www.amazon.in/s?k=linen+cushion+cover'},
 {id:3,name:'Minimal Ceramic Vase',category:'Decor',note:'For flowers or just by itself',image:'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=800&q=80',link:'https://www.amazon.in/s?k=minimal+ceramic+vase'},
 {id:4,name:'Cozy Knit Throw',category:'Cozy',note:'Your sofa’s new best friend',image:'https://images.unsplash.com/photo-1600369671236-e74521d4b6ad?auto=format&fit=crop&w=800&q=80',link:'https://www.amazon.in/s?k=cozy+knit+throw'},
 {id:5,name:'Cute Desk Organizer',category:'Lifestyle',note:'Make your everyday corner lovely',image:'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=800&q=80',link:'https://www.amazon.in/s?k=desk+organizer'},
 {id:6,name:'Small Room Plant Pot',category:'Decor',note:'Bring a little green indoors',image:'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80',link:'https://www.amazon.in/s?k=small+plant+pot'},
 {id:7,name:'Scented Candle',category:'Cozy',note:'A tiny ritual for winding down',image:'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80',link:'https://www.amazon.in/s?k=scented+candle'},
 {id:8,name:'Pretty Everyday Mug',category:'Lifestyle',note:'For coffee, tea, and quiet moments',image:'https://images.unsplash.com/photo-1514228742587-6b1558faffa3?auto=format&fit=crop&w=800&q=80',link:'https://www.amazon.in/s?k=ceramic+coffee+mug'}
];
const storeLinks={
 Amazon:q=>`https://www.amazon.in/s?k=${encodeURIComponent(q)}`,
 Flipkart:q=>`https://www.flipkart.com/search?q=${encodeURIComponent(q)}`,
 Meesho:q=>`https://www.meesho.com/search?q=${encodeURIComponent(q)}`
};
const kurtaVarieties=[
 {id:'all',name:'All styles',query:'women cotton kurta',image:'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=850&q=85'},
 {id:'straight',name:'Straight cotton kurtas',query:'women straight cotton kurta',image:'https://images.unsplash.com/photo-1583391733956-6c78276477e8?auto=format&fit=crop&w=850&q=85'},
 {id:'printed',name:'Printed cotton kurtas',query:'women printed cotton kurta',image:'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=850&q=85'},
 {id:'aline',name:'A-line cotton kurtas',query:'women A line cotton kurta',image:'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&w=850&q=85'},
 {id:'short',name:'Short cotton kurtis',query:'women short cotton kurti',image:'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=850&q=85'},
 {id:'sets',name:'Cotton kurta sets',query:'women cotton kurta pant set',image:'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=850&q=85'}
];
let filter='All',favorites=JSON.parse(localStorage.getItem('snf-favs')||'[]'),showFav=false,activeVariety='all';
const grid=document.querySelector('#products');
function imageFallback(img){img.onerror=()=>{img.onerror=null;img.classList.add('image-unavailable');img.alt='Image preview unavailable';};}
function render(){
 const shown=products.filter(p=>(filter==='All'||p.category===filter)&&(!showFav||favorites.includes(p.id)));
 grid.innerHTML=shown.map(p=>`<article class="product"><div class="product-image-wrap"><img src="${p.image}" alt="${p.name}" loading="lazy"><button class="heart ${favorites.includes(p.id)?'saved':''}" data-fav="${p.id}" aria-label="Save favorite">${favorites.includes(p.id)?'♥':'♡'}</button></div><div class="product-info"><h3>${p.name}</h3><p>${p.note}</p><div class="product-bottom"><span class="price">View store price</span><a class="shop-link" href="${p.link}" target="_blank" rel="noopener">SHOP FIND ↗</a></div></div></article>`).join('')||'<p class="empty">No saved finds here yet. Tap a ♡ to save something!</p>';
 grid.querySelectorAll('img').forEach(imageFallback);
 document.querySelector('#favCount').textContent=favorites.length;
 document.querySelectorAll('[data-fav]').forEach(b=>b.onclick=()=>{const id=Number(b.dataset.fav);favorites=favorites.includes(id)?favorites.filter(x=>x!==id):[...favorites,id];localStorage.setItem('snf-favs',JSON.stringify(favorites));render();});
}
function openFashion(){document.querySelector('#fashion').hidden=false;document.querySelector('#finds').hidden=true;document.querySelector('#collections').scrollIntoView({behavior:'smooth'});renderVarietyFilters();renderFashionProducts();}
function closeFashion(){document.querySelector('#fashion').hidden=true;document.querySelector('#finds').hidden=false;document.querySelector('#collections').scrollIntoView({behavior:'smooth'});}
function renderVarietyFilters(){document.querySelector('#varietyFilters').innerHTML=kurtaVarieties.map(v=>`<button class="variety-chip ${activeVariety===v.id?'active':''}" data-variety="${v.id}">${v.name}</button>`).join('');document.querySelectorAll('[data-variety]').forEach(b=>b.onclick=()=>{activeVariety=b.dataset.variety;renderVarietyFilters();renderFashionProducts();});}
function renderFashionProducts(){
 const selected=activeVariety==='all'?kurtaVarieties.slice(1):kurtaVarieties.filter(v=>v.id===activeVariety);
 document.querySelector('#fashionTitle').textContent=activeVariety==='all'?'Cotton kurtas':selected[0].name;
 const cards=selected.flatMap(v=>['Amazon','Flipkart','Meesho'].map(store=>({variety:v,store,link:storeLinks[store](v.query)})));
 document.querySelector('#fashionProducts').innerHTML=cards.map((p,i)=>`<article class="product fashion-product"><div class="product-image-wrap"><img src="${p.variety.image}" alt="${p.variety.name}" loading="lazy"><span class="store-pill">${p.store}</span></div><div class="product-info"><h3>${p.variety.name}</h3><p>Browse ${p.variety.name.toLowerCase()} on ${p.store}</p><div class="product-bottom"><span class="price">View latest price</span><a class="shop-link" href="${p.link}" target="_blank" rel="noopener">SHOP NOW ↗</a></div></div></article>`).join('');
 document.querySelectorAll('#fashionProducts img').forEach(imageFallback);
}
document.querySelectorAll('.filter').forEach(b=>b.onclick=()=>{filter=b.dataset.filter;showFav=false;document.querySelectorAll('.filter').forEach(x=>x.classList.toggle('active',x===b));render();});
document.querySelector('#favToggle').onclick=()=>{showFav=!showFav;filter='All';document.querySelectorAll('.filter').forEach(x=>x.classList.toggle('active',x.dataset.filter==='All'));document.querySelector('#finds').scrollIntoView({behavior:'smooth'});render();};
document.querySelector('#menuBtn').onclick=()=>document.querySelector('nav').classList.toggle('open');
document.querySelectorAll('.collection:not(#cottonKurtasCard)').forEach(a=>a.onclick=()=>{filter=a.dataset.filter;showFav=false;document.querySelectorAll('.filter').forEach(x=>x.classList.toggle('active',x.dataset.filter===filter));render();});
document.querySelector('#cottonKurtasCard').onclick=e=>{e.preventDefault();activeVariety='all';openFashion();};
document.querySelector('#backToCollections').onclick=closeFashion;
render();
