/* Soft Nest Finds — curated starter catalogue.
   Seller URLs are search links, not live product feeds. Replace with exact
   product/affiliate URLs when those links have been verified. */
const products = [
  {id:1,name:"Relaxed Cotton Shirt",category:"fashion",sub:"Women",price:599,note:"An easy everyday wardrobe staple.",image:"https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=900&q=85",query:"women relaxed cotton shirt"},
  {id:2,name:"Classic Casual Shirt",category:"fashion",sub:"Men",price:699,note:"A versatile smart-casual layer.",image:"https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=900&q=85",query:"men casual shirt"},
  {id:3,name:"Everyday Straight Jeans",category:"fashion",sub:"Women",price:899,note:"An easy pairing for everyday looks.",image:"https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=85",query:"women straight fit jeans"},
  {id:4,name:"Minimal Everyday Tee",category:"fashion",sub:"Men",price:399,note:"A simple staple for relaxed days.",image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",query:"men cotton t shirt"},
  {id:5,name:"Printed Cotton Kurta",category:"ethnic",sub:"Kurtis",price:499,note:"A cheerful pick for everyday ethnic style.",image:"https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=85",query:"women printed cotton kurta"},
  {id:6,name:"Straight Kurta Set",category:"ethnic",sub:"Kurta sets",price:899,note:"A coordinated look made easy.",image:"https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=85",query:"women straight kurta pant set"},
  {id:7,name:"Festive Saree",category:"ethnic",sub:"Sarees",price:1299,note:"A graceful option for celebrations.",image:"https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=85",query:"women festive saree"},
  {id:8,name:"Anarkali Suit",category:"ethnic",sub:"Suits",price:1499,note:"A flowing silhouette for special days.",image:"https://images.unsplash.com/photo-1583391733956-6c78276477e8?auto=format&fit=crop&w=900&q=85",query:"women anarkali suit"},
  {id:9,name:"Everyday White Sneakers",category:"shoes",sub:"Women",price:999,note:"A clean, versatile everyday pair.",image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",query:"women white casual sneakers"},
  {id:10,name:"Classic Men's Sneakers",category:"shoes",sub:"Men",price:1199,note:"A casual pair for daily wear.",image:"https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=900&q=85",query:"men casual sneakers"},
  {id:11,name:"Minimal Flat Sandals",category:"shoes",sub:"Women",price:699,note:"An easy warm-weather essential.",image:"https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=900&q=85",query:"women flat sandals"},
  {id:12,name:"Casual Loafers",category:"shoes",sub:"Men",price:1099,note:"A polished alternative to sneakers.",image:"https://images.unsplash.com/photo-1531310197839-ccf54634509e?auto=format&fit=crop&w=900&q=85",query:"men casual loafers"},
  {id:13,name:"Soft Everyday Slides",category:"slippers",sub:"Women",price:249,note:"Comfort-first slides for everyday use.",image:"https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=900&q=85",query:"women everyday slippers slides"},
  {id:14,name:"Men's Comfort Slides",category:"slippers",sub:"Men",price:299,note:"An easy slip-on for relaxed days.",image:"https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=900&q=85",query:"men comfort slides slippers"},
  {id:15,name:"Minimal Ceramic Vase",category:"decor",sub:"Decor accents",price:399,note:"A sculptural little detail for a shelf or table.",image:"https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=900&q=85",query:"minimal ceramic vase home decor"},
  {id:16,name:"Warm Glow Table Lamp",category:"decor",sub:"Lighting",price:899,note:"Soft ambient light for a cozy corner.",image:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85",query:"warm glow table lamp"},
  {id:17,name:"Neutral Cushion Cover",category:"decor",sub:"Soft furnishings",price:299,note:"Add a gentle layer of texture to your sofa.",image:"https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=900&q=85",query:"neutral cushion cover"},
  {id:18,name:"Aesthetic Planter",category:"decor",sub:"Planters",price:349,note:"A pretty home for your favourite little plant.",image:"https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=85",query:"aesthetic indoor plant pot planter"},
  {id:19,name:"Decorative Wall Art",category:"decor",sub:"Wall decor",price:599,note:"A simple way to make a blank wall feel considered.",image:"https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=900&q=85",query:"minimal neutral wall art prints"},
  {id:20,name:"Linen Table Runner",category:"decor",sub:"Soft furnishings",price:449,note:"A natural texture for a calm table setting.",image:"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",query:"beige linen table runner"}
];

const categoryNames = {all:"All finds",fashion:"Fashion",ethnic:"Ethnic wear",shoes:"Shoes",slippers:"Slippers",decor:"Home decor"};
const storeLinks = {
  Amazon:q=>`https://www.amazon.in/s?k=${encodeURIComponent(q)}`,
  Flipkart:q=>`https://www.flipkart.com/search?q=${encodeURIComponent(q)}`,
  Meesho:q=>`https://www.meesho.com/search?q=${encodeURIComponent(q)}`
};
const subcategories = {
  all:[], fashion:["Women","Men"], ethnic:["Kurtis","Kurta sets","Sarees","Suits"], shoes:["Women","Men"], slippers:["Women","Men"], decor:["Decor accents","Lighting","Soft furnishings","Planters","Wall decor"]
};
const categoryDescriptions = {
  all:"Browse the full collection and discover something lovely.",
  fashion:"Everyday wardrobe ideas for women and men.",
  ethnic:"Kurtis, coordinated sets, sarees and festive styles.",
  shoes:"Find an everyday pair for every kind of plan.",
  slippers:"Easy, comfortable slip-ons for men and women.",
  decor:"Unique little details for an aesthetic, welcoming home."
};

let activeCategory = "all";
let activeSubcategory = "all";
let showFavorites = false;
let favorites = [];
try { favorites = JSON.parse(localStorage.getItem("snf-favs") || "[]"); } catch (_) { favorites = []; }

const productGrid = document.querySelector("#productGrid");
const searchInput = document.querySelector("#searchInput");
const sortSelect = document.querySelector("#sortSelect");
const dialog = document.querySelector("#productDialog");

function money(value) { return "₹" + Number(value).toLocaleString("en-IN"); }
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
}
function setCategory(category) {
  activeCategory = category;
  activeSubcategory = "all";
  showFavorites = false;
  document.querySelector("#shopTitle").textContent = categoryNames[category] || "Discover";
  document.querySelector("#shopSubtitle").textContent = categoryDescriptions[category] || "";
  document.querySelectorAll("[data-category].tab").forEach(button => button.classList.toggle("active", button.dataset.category === category));
  renderSubcategories();
  renderProducts();
  document.querySelector("#shop").scrollIntoView({behavior:"smooth",block:"start"});
}
function renderSubcategories() {
  const host = document.querySelector("#subcategoryTabs");
  const values = subcategories[activeCategory] || [];
  host.innerHTML = values.length ? `<button class="subtab ${activeSubcategory==="all"?"active":""}" data-sub="all">All styles</button>` +
    values.map(value => `<button class="subtab ${activeSubcategory===value?"active":""}" data-sub="${escapeHTML(value)}">${escapeHTML(value)}</button>`).join("") : "";
  host.querySelectorAll("[data-sub]").forEach(button => button.addEventListener("click", () => {
    activeSubcategory = button.dataset.sub; renderSubcategories(); renderProducts();
  }));
}
function getVisibleProducts() {
  const term = searchInput.value.trim().toLowerCase();
  let list = products.filter(product =>
    (activeCategory === "all" || product.category === activeCategory) &&
    (activeSubcategory === "all" || product.sub === activeSubcategory) &&
    (!showFavorites || favorites.includes(product.id)) &&
    (!term || `${product.name} ${product.category} ${product.sub} ${product.note}`.toLowerCase().includes(term))
  );
  if (sortSelect.value === "low") list.sort((a,b)=>a.price-b.price);
  if (sortSelect.value === "high") list.sort((a,b)=>b.price-a.price);
  if (sortSelect.value === "name") list.sort((a,b)=>a.name.localeCompare(b.name));
  return list;
}
function renderProducts() {
  const list = getVisibleProducts();
  document.querySelector("#resultsCount").textContent = `${list.length} ${list.length===1?"find":"finds"}`;
  productGrid.innerHTML = list.map(product => `
    <article class="product-card">
      <button class="product-open" data-open="${product.id}" aria-label="View ${escapeHTML(product.name)} details">
        <div class="product-photo"><img src="${product.image}" alt="${escapeHTML(product.name)}" loading="lazy"><span class="photo-label">${escapeHTML(categoryNames[product.category])}</span></div>
        <div class="product-info"><span class="product-sub">${escapeHTML(product.sub)}</span><h3>${escapeHTML(product.name)}</h3><p>${escapeHTML(product.note)}</p>
          <div class="product-price-row"><strong>${money(product.price)} <small>approx.</small></strong><span class="view-details">View details ↗</span></div>
        </div>
      </button>
      <button class="heart ${favorites.includes(product.id)?"saved":""}" data-fav="${product.id}" aria-label="${favorites.includes(product.id)?"Remove from":"Add to"} saved items">${favorites.includes(product.id)?"♥":"♡"}</button>
    </article>`).join("") || `<p class="empty">No products match this selection. Try another category or search.</p>`;
  productGrid.querySelectorAll("[data-open]").forEach(button => button.addEventListener("click",()=>openProduct(Number(button.dataset.open))));
  productGrid.querySelectorAll("[data-fav]").forEach(button => button.addEventListener("click",()=>{
    const id = Number(button.dataset.fav);
    favorites = favorites.includes(id) ? favorites.filter(value=>value!==id) : [...favorites,id];
    try { localStorage.setItem("snf-favs",JSON.stringify(favorites)); } catch (_) {}
    updateFavoriteCount(); renderProducts();
  }));
  updateFavoriteCount();
}
function updateFavoriteCount() {
  document.querySelector("#favCount").textContent = favorites.length;
}
function openProduct(id) {
  const product = products.find(item=>item.id===id);
  if (!product) return;
  const sellers = Object.entries(storeLinks).map(([store,makeLink])=>`
    <a class="seller-link" href="${makeLink(product.query)}" target="_blank" rel="noopener noreferrer">
      <span>${store}</span><span>Check listing ↗</span>
    </a>`).join("");
  document.querySelector("#dialogContent").innerHTML = `
    <div class="dialog-layout">
      <img class="dialog-image" src="${product.image}" alt="${escapeHTML(product.name)}">
      <div class="dialog-details">
        <p class="eyebrow">${escapeHTML(categoryNames[product.category])} · ${escapeHTML(product.sub)}</p>
        <h2 id="dialogTitle">${escapeHTML(product.name)}</h2>
        <p class="dialog-note">${escapeHTML(product.note)}</p>
        <p class="dialog-price">Guide price <strong>${money(product.price)}</strong></p>
        <p class="dialog-disclaimer">This is an indicative guide price, not a live quote. Compare current prices, sizes, reviews, delivery and return terms on the seller's listing.</p>
        <h3>Compare stores</h3>
        <div class="seller-list">${sellers}</div>
        <p class="dialog-footnote">You can explore the item here; checkout and payment happen on the selected store.</p>
      </div>
    </div>`;
  if (typeof dialog.showModal === "function") dialog.showModal();
  else dialog.setAttribute("open","");
}
document.querySelectorAll("#categoryGrid [data-category]").forEach(button => button.addEventListener("click",()=>setCategory(button.dataset.category)));
document.querySelectorAll("#categoryTabs [data-category]").forEach(button => button.addEventListener("click",()=>setCategory(button.dataset.category)));
document.querySelector("#clearCategory").addEventListener("click",()=>setCategory("all"));
searchInput.addEventListener("input",renderProducts);
sortSelect.addEventListener("change",renderProducts);
document.querySelector("#favToggle").addEventListener("click",()=>{
  showFavorites = !showFavorites;
  activeCategory = "all"; activeSubcategory = "all";
  document.querySelector("#shopTitle").textContent = showFavorites ? "Your saved finds" : categoryNames.all;
  document.querySelector("#shopSubtitle").textContent = showFavorites ? "The pieces you have kept close." : categoryDescriptions.all;
  document.querySelectorAll("#categoryTabs [data-category]").forEach(button=>button.classList.toggle("active",button.dataset.category==="all"));
  renderSubcategories(); renderProducts();
  document.querySelector("#shop").scrollIntoView({behavior:"smooth",block:"start"});
});
document.querySelector("#menuBtn").addEventListener("click",()=>{
  const nav = document.querySelector("#mainNav");
  const isOpen = nav.classList.toggle("open");
  document.querySelector("#menuBtn").setAttribute("aria-expanded",String(isOpen));
});
document.querySelectorAll("#mainNav a").forEach(link=>link.addEventListener("click",()=>{
  document.querySelector("#mainNav").classList.remove("open");
  document.querySelector("#menuBtn").setAttribute("aria-expanded","false");
}));
document.querySelector("#dialogClose").addEventListener("click",()=>dialog.close());
dialog.addEventListener("click",event=>{ if(event.target===dialog) dialog.close(); });

renderSubcategories();
renderProducts();
