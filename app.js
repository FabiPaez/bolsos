const WHATSAPP_NUMBER = "5492640000000";
const STORAGE_PRODUCTS = "bossa.products.v1";
const STORAGE_CART = "bossa.cart.v1";

const imagePools = {
  bags: [
    "./bolsos/bolso1-1.jpg",
    "./bolsos/bolso1-2.jpg",
    "./bolsos/bolso2-1.jpg",
    "./bolsos/bolso2-2.jpg",
    "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=900&q=80",
    "https://images.pexels.com/photos/1204464/pexels-photo-1204464.jpeg?auto=compress&cs=tinysrgb&w=900",
    "https://images.pexels.com/photos/904350/pexels-photo-904350.jpeg?auto=compress&cs=tinysrgb&w=900"
  ],
  fashion: [
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
    "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=900",
    "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=900"
  ],
  accessories: [
    "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",
    "https://images.pexels.com/photos/3373746/pexels-photo-3373746.jpeg?auto=compress&cs=tinysrgb&w=900",
    "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=900"
  ]
};

const demoProducts = [
  ["bossa-roma", "Cartera Roma", "Carteras", 68900, 15, 6, true, true, "bags"],
  ["bossa-luna", "Bolso Luna", "Bolsos", 74200, 0, 4, true, false, "bags"],
  ["bossa-nina", "Mochila Nina", "Mochilas", 62500, 10, 5, true, true, "bags"],
  ["bossa-amelie", "Cartera Amelie", "Carteras", 81300, 20, 3, true, true, "bags"],
  ["bossa-cannes", "Bolso Cannes", "Bolsos", 77900, 0, 7, false, false, "bags"],
  ["bossa-siena", "Mini bag Siena", "Mini Bags", 43800, 12, 9, true, true, "bags"],
  ["bossa-olivia", "Cartera Olivia", "Carteras", 70600, 0, 5, false, false, "bags"],
  ["bossa-mila", "Bandolera Mila", "Bandoleras", 55900, 18, 8, true, true, "bags"],
  ["bossa-ava", "Bolso Ava", "Bolsos", 90400, 0, 2, true, false, "bags"],
  ["bossa-noa", "Mochila Noa", "Mochilas", 59200, 8, 6, false, true, "bags"],
  ["bossa-cala", "Cartera Cala", "Carteras", 49800, 0, 10, false, false, "bags"],
  ["bossa-petra", "Shopper Petra", "Bolsos", 85300, 15, 5, true, true, "bags"],
  ["bossa-iris", "Gafas Iris", "Gafas de sol", 32600, 10, 12, false, true, "accessories"],
  ["bossa-celine", "Cinto Celine", "Cintos", 27100, 0, 10, false, false, "accessories"],
  ["bossa-velvet", "Pantuflas Velvet", "Pantuflas", 34900, 15, 6, true, true, "fashion"],
  ["bossa-lila", "Pijama Lila", "Pijamas", 51200, 0, 4, false, false, "fashion"],
  ["bossa-muse", "Set Muse", "Lenceria", 38900, 12, 7, true, true, "fashion"],
  ["bossa-ambre", "Perfume Ambre", "Perfumes", 46300, 0, 8, false, false, "accessories"],
  ["bossa-gaia", "Campera Gaia", "Camperas", 118900, 18, 3, true, true, "fashion"],
  ["bossa-aurora", "Gamulane Aurora", "Gamulanes", 139900, 10, 2, true, true, "fashion"],
  ["bossa-vita", "Billetera Vita", "Accesorios", 24700, 0, 14, false, false, "accessories"],
  ["bossa-maia", "Neceser Maia", "Accesorios", 29500, 8, 11, false, true, "accessories"],
  ["bossa-bruna", "Rinonera Bruna", "Bandoleras", 48900, 0, 7, false, false, "bags"],
  ["bossa-sole", "Gafas Sole", "Gafas de sol", 35700, 20, 6, true, true, "accessories"]
].map((item, index) => {
  const [id, name, category, price, discount, stock, featured, offer, pool] = item;
  const images = Array.from({ length: 4 }, (_, imageIndex) => {
    const source = imagePools[pool][(index + imageIndex) % imagePools[pool].length];
    const separator = source.includes("?") ? "&" : "?";
    return `${source}${separator}sig=${index}-${imageIndex}`;
  });

  return {
    id,
    name,
    category,
    price,
    discount,
    stock,
    featured,
    offer,
    images,
    description: "Seleccion boutique con terminacion cuidada y estilo femenino premium."
  };
});

const collections = [
  { title: "Nuevo ingreso", subtitle: "Piezas recientes para renovar el look.", filter: (p) => p.featured },
  { title: "Carteras destacadas", subtitle: "Modelos protagonistas para dia y noche.", filter: (p) => p.category === "Carteras" },
  { title: "Bolsos de uso diario", subtitle: "Capacidad, textura y silueta limpia.", filter: (p) => p.category === "Bolsos" },
  { title: "Mochilas urbanas", subtitle: "Comodidad con lectura elegante.", filter: (p) => p.category === "Mochilas" },
  { title: "Mini bags", subtitle: "Pequenas, precisas, listas para salir.", filter: (p) => p.category === "Mini Bags" || p.category === "Bandoleras" },
  { title: "Ofertas de temporada", subtitle: "Descuentos visibles y stock inmediato.", filter: (p) => p.offer || p.discount > 0 },
  { title: "Pantuflas y pijamas", subtitle: "Texturas calidas para estar en casa.", filter: (p) => ["Pantuflas", "Pijamas"].includes(p.category) },
  { title: "Lenceria delicada", subtitle: "Sets femeninos con seleccion cuidada.", filter: (p) => p.category === "Lenceria" },
  { title: "Abrigos boutique", subtitle: "Camperas y gamulanes por encargue.", filter: (p) => ["Camperas", "Gamulanes"].includes(p.category) },
  { title: "Gafas y cintos", subtitle: "El gesto final del outfit.", filter: (p) => ["Gafas de sol", "Cintos"].includes(p.category) },
  { title: "Perfumes y detalles", subtitle: "Regalos simples con presencia premium.", filter: (p) => ["Perfumes", "Accesorios"].includes(p.category) },
  { title: "Mas vendidos", subtitle: "Favoritos por precio, stock y versatilidad.", filter: (p) => p.stock >= 5 }
];

const state = {
  products: readStorage(STORAGE_PRODUCTS, demoProducts),
  cart: readStorage(STORAGE_CART, []),
  filter: "Todos",
  search: ""
};

const money = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 0
});

const els = {};

document.addEventListener("DOMContentLoaded", () => {
  cacheElements();
  bindEvents();
  renderAll();
  initReveal();
  setTimeout(() => document.getElementById("loading")?.classList.add("is-hidden"), 450);
});

function cacheElements() {
  [
    "catalogSections",
    "filters",
    "cartToggle",
    "closeCart",
    "cartDrawer",
    "cartCount",
    "cartItems",
    "cartSubtotal",
    "cartDiscount",
    "cartTotal",
    "checkoutWhatsapp",
    "searchToggle",
    "searchPanel",
    "searchInput",
    "productForm",
    "adminList",
    "resetCatalog",
    "clearForm",
    "exportCatalog",
    "productId",
    "adminName",
    "adminCategory",
    "adminPrice",
    "adminDiscount",
    "adminStock",
    "adminImages",
    "adminFeatured",
    "adminOffer"
  ].forEach((id) => {
    els[id] = document.getElementById(id);
  });
}

function bindEvents() {
  els.cartToggle.addEventListener("click", openCart);
  els.closeCart.addEventListener("click", closeCart);
  els.searchToggle.addEventListener("click", () => {
    els.searchPanel.classList.toggle("is-open");
    els.searchInput.focus();
  });
  els.searchInput.addEventListener("input", (event) => {
    state.search = event.target.value.trim().toLowerCase();
    renderCatalog();
  });
  els.productForm.addEventListener("submit", saveProduct);
  els.resetCatalog.addEventListener("click", resetCatalog);
  els.clearForm.addEventListener("click", clearAdminForm);
  els.exportCatalog.addEventListener("click", exportCatalog);
  document.querySelectorAll("[data-filter-link]").forEach((link) => {
    link.addEventListener("click", () => {
      state.filter = link.dataset.filterLink;
      renderAll();
    });
  });
}

function renderAll() {
  renderFilters();
  renderCatalog();
  renderCart();
  renderAdmin();
}

function renderFilters() {
  const categories = ["Todos", "Ofertas", ...new Set(state.products.map((product) => product.category))];
  els.filters.innerHTML = categories.map((category) => `
    <button class="filter-pill ${state.filter === category ? "is-active" : ""}" data-filter="${category}">
      ${category}
    </button>
  `).join("");

  els.filters.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.filter = button.dataset.filter;
      renderAll();
    });
  });
}

function renderCatalog() {
  const filteredProducts = getFilteredProducts();
  const visibleCollections = collections
    .map((collection) => ({
      ...collection,
      products: filteredProducts.filter(collection.filter).slice(0, 8)
    }))
    .filter((collection) => collection.products.length);

  els.catalogSections.innerHTML = visibleCollections.map((collection) => `
    <section class="collection reveal">
      <div class="collection-head">
        <div>
          <h3>${collection.title}</h3>
          <p>${collection.subtitle}</p>
        </div>
        <span>${collection.products.length} productos</span>
      </div>
      <div class="product-grid">
        ${collection.products.map(productCard).join("")}
      </div>
    </section>
  `).join("") || emptyState("No encontramos productos con ese filtro.");

  els.catalogSections.querySelectorAll("[data-add]").forEach((button) => {
    button.addEventListener("click", () => addToCart(button.dataset.add));
  });

  els.catalogSections.querySelectorAll("[data-preview]").forEach((button) => {
    button.addEventListener("click", () => previewProduct(button.dataset.preview));
  });

  els.catalogSections.querySelectorAll(".product-card").forEach(startCardCarousel);
  initReveal();
}

function productCard(product) {
  const finalPrice = getFinalPrice(product);
  const isOut = Number(product.stock) <= 0;
  return `
    <article class="product-card" data-product-card="${product.id}">
      <div class="product-media">
        <div class="badge-row">
          ${product.offer || product.discount > 0 ? `<span class="badge">${product.discount}% OFF</span>` : "<span></span>"}
          ${product.featured ? `<span class="badge">Nuevo</span>` : ""}
        </div>
        ${product.images.map((image, index) => `
          <img class="${index === 0 ? "is-active" : ""}" src="${image}" alt="${product.name}" loading="lazy">
        `).join("")}
      </div>
      <div class="product-info">
        <div class="product-top">
          <div>
            <h4 class="product-name">${product.name}</h4>
            <span class="product-category">${product.category} | Stock ${product.stock}</span>
          </div>
          <div class="price">
            ${product.discount > 0 ? `<span class="old-price">${formatMoney(product.price)}</span>` : ""}
            <span class="new-price">${formatMoney(finalPrice)}</span>
          </div>
        </div>
        <div class="card-actions">
          <button class="add-button" data-add="${product.id}" ${isOut ? "disabled" : ""}>
            ${isOut ? "Sin stock" : "Agregar"}
          </button>
          <button class="preview-button" data-preview="${product.id}" aria-label="Vista rapida de ${product.name}">+</button>
        </div>
      </div>
    </article>
  `;
}

function getFilteredProducts() {
  return state.products.filter((product) => {
    const byFilter = state.filter === "Todos"
      || product.category === state.filter
      || (state.filter === "Ofertas" && (product.offer || product.discount > 0));
    const haystack = `${product.name} ${product.category} ${product.description}`.toLowerCase();
    const bySearch = !state.search || haystack.includes(state.search);
    return byFilter && bySearch;
  });
}

function startCardCarousel(card) {
  const images = card.querySelectorAll(".product-media img");
  if (images.length < 2) return;
  let active = 0;
  card.addEventListener("mouseenter", () => {
    active = (active + 1) % images.length;
    images.forEach((image, index) => image.classList.toggle("is-active", index === active));
  });
}

function previewProduct(id) {
  const product = state.products.find((item) => item.id === id);
  if (!product) return;
  const text = `${product.name}\n${product.category}\n${formatMoney(getFinalPrice(product))}\nStock: ${product.stock}\n\n${product.description}`;
  window.alert(text);
}

function addToCart(id) {
  const product = state.products.find((item) => item.id === id);
  if (!product || Number(product.stock) <= 0) return;
  const current = state.cart.find((line) => line.id === id);
  if (current) current.qty += 1;
  else state.cart.push({ id, qty: 1 });
  persistCart();
  renderCart();
  openCart();
}

function removeFromCart(id) {
  state.cart = state.cart.filter((line) => line.id !== id);
  persistCart();
  renderCart();
}

function changeQty(id, delta) {
  const line = state.cart.find((item) => item.id === id);
  if (!line) return;
  line.qty += delta;
  if (line.qty <= 0) removeFromCart(id);
  persistCart();
  renderCart();
}

function renderCart() {
  const detailed = getDetailedCart();
  const totals = detailed.reduce((acc, line) => {
    const original = line.product.price * line.qty;
    const final = getFinalPrice(line.product) * line.qty;
    acc.subtotal += original;
    acc.discount += original - final;
    acc.total += final;
    return acc;
  }, { subtotal: 0, discount: 0, total: 0 });

  els.cartCount.textContent = detailed.reduce((sum, line) => sum + line.qty, 0);
  els.cartItems.innerHTML = detailed.map(({ product, qty }) => `
    <article class="cart-line">
      <img src="${product.images[0]}" alt="${product.name}">
      <div>
        <strong>${product.name}</strong>
        <span>${formatMoney(getFinalPrice(product))}</span>
        <div class="qty">
          <button data-qty="${product.id}" data-delta="-1" aria-label="Quitar unidad">-</button>
          <span>${qty}</span>
          <button data-qty="${product.id}" data-delta="1" aria-label="Agregar unidad">+</button>
          <button data-remove="${product.id}">Eliminar</button>
        </div>
      </div>
    </article>
  `).join("") || emptyState("Tu carrito esta vacio.");

  els.cartSubtotal.textContent = formatMoney(totals.subtotal);
  els.cartDiscount.textContent = `-${formatMoney(totals.discount)}`;
  els.cartTotal.textContent = formatMoney(totals.total);
  els.checkoutWhatsapp.href = buildWhatsappUrl(detailed, totals);

  els.cartItems.querySelectorAll("[data-qty]").forEach((button) => {
    button.addEventListener("click", () => changeQty(button.dataset.qty, Number(button.dataset.delta)));
  });
  els.cartItems.querySelectorAll("[data-remove]").forEach((button) => {
    button.addEventListener("click", () => removeFromCart(button.dataset.remove));
  });
}

function buildWhatsappUrl(lines, totals) {
  if (!lines.length) return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola Bossa, quiero hacer una consulta.")}`;
  const products = lines.map(({ product, qty }) => {
    const lineTotal = getFinalPrice(product) * qty;
    return `- ${product.name} x${qty} | ${formatMoney(lineTotal)}`;
  }).join("\n");
  const message = [
    "Hola Bossa, quiero finalizar este pedido:",
    "",
    products,
    "",
    `Subtotal: ${formatMoney(totals.subtotal)}`,
    `Descuentos: -${formatMoney(totals.discount)}`,
    `Total: ${formatMoney(totals.total)}`,
    "",
    "Quedo atenta para coordinar entrega/envio y forma de pago."
  ].join("\n");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function getDetailedCart() {
  return state.cart
    .map((line) => ({ ...line, product: state.products.find((product) => product.id === line.id) }))
    .filter((line) => line.product);
}

function openCart() {
  els.cartDrawer.classList.add("is-open");
  els.cartDrawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("cart-open");
}

function closeCart() {
  els.cartDrawer.classList.remove("is-open");
  els.cartDrawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("cart-open");
}

function saveProduct(event) {
  event.preventDefault();
  const id = els.productId.value || slugify(els.adminName.value);
  const product = {
    id,
    name: els.adminName.value.trim(),
    category: els.adminCategory.value.trim(),
    price: Number(els.adminPrice.value),
    discount: Number(els.adminDiscount.value || 0),
    stock: Number(els.adminStock.value || 0),
    images: els.adminImages.value.split(",").map((url) => url.trim()).filter(Boolean),
    featured: els.adminFeatured.checked,
    offer: els.adminOffer.checked,
    description: "Producto editado desde el panel simple de Bossa."
  };

  const index = state.products.findIndex((item) => item.id === id);
  if (index >= 0) state.products[index] = product;
  else state.products.unshift(product);

  persistProducts();
  clearAdminForm();
  renderAll();
}

function renderAdmin() {
  els.adminList.innerHTML = state.products.map((product) => `
    <article class="admin-item">
      <div>
        <strong>${product.name}</strong>
        <span>${product.category} | ${formatMoney(getFinalPrice(product))} | Stock ${product.stock}</span>
      </div>
      <div>
        <button data-edit="${product.id}">Editar</button>
        <button data-delete="${product.id}">Eliminar</button>
      </div>
    </article>
  `).join("");

  els.adminList.querySelectorAll("[data-edit]").forEach((button) => {
    button.addEventListener("click", () => fillAdminForm(button.dataset.edit));
  });
  els.adminList.querySelectorAll("[data-delete]").forEach((button) => {
    button.addEventListener("click", () => deleteProduct(button.dataset.delete));
  });
}

function fillAdminForm(id) {
  const product = state.products.find((item) => item.id === id);
  if (!product) return;
  els.productId.value = product.id;
  els.adminName.value = product.name;
  els.adminCategory.value = product.category;
  els.adminPrice.value = product.price;
  els.adminDiscount.value = product.discount;
  els.adminStock.value = product.stock;
  els.adminImages.value = product.images.join(", ");
  els.adminFeatured.checked = Boolean(product.featured);
  els.adminOffer.checked = Boolean(product.offer);
  els.adminName.focus();
}

function deleteProduct(id) {
  const product = state.products.find((item) => item.id === id);
  if (!product || !window.confirm(`Eliminar ${product.name}?`)) return;
  state.products = state.products.filter((item) => item.id !== id);
  state.cart = state.cart.filter((line) => line.id !== id);
  persistProducts();
  persistCart();
  renderAll();
}

function clearAdminForm() {
  els.productForm.reset();
  els.productId.value = "";
}

function resetCatalog() {
  if (!window.confirm("Restaurar el catalogo demo? Se perderan los cambios locales.")) return;
  state.products = [...demoProducts];
  state.cart = [];
  persistProducts();
  persistCart();
  clearAdminForm();
  renderAll();
}

function exportCatalog() {
  const blob = new Blob([JSON.stringify(state.products, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "bossa-catalogo.json";
  link.click();
  URL.revokeObjectURL(url);
}

function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal:not(.is-visible)").forEach((item) => observer.observe(item));
}

function getFinalPrice(product) {
  return Math.round(product.price * (1 - Number(product.discount || 0) / 100));
}

function formatMoney(value) {
  return money.format(value || 0);
}

function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function persistProducts() {
  localStorage.setItem(STORAGE_PRODUCTS, JSON.stringify(state.products));
}

function persistCart() {
  localStorage.setItem(STORAGE_CART, JSON.stringify(state.cart));
}

function slugify(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "") + `-${Date.now().toString(36)}`;
}

function emptyState(message) {
  return `<p class="empty-state">${message}</p>`;
}
