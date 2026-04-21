// URL base del contenedor
const BASE_URL = "https://raw.githubusercontent.com/FabiPaez/bolsos/main/bolsos/";

// Catálogo simple (basado en nombres de archivos)
const productos = [
  {
    nombre: "Bolso 1",
    imagenes: ["bolso1-1.jpg", "bolso1-2.jpg"]
  },
  {
    nombre: "Bolso 2",
    imagenes: ["bolso2-1.jpg", "bolso2-2.jpg"]
  }
];

const catalog = document.getElementById("catalog");

productos.forEach((prod) => {
  const card = document.createElement("div");
  card.className = "card";

  const carousel = document.createElement("div");
  carousel.className = "carousel";

  prod.imagenes.forEach((img, i) => {
    const image = document.createElement("img");
    image.src = BASE_URL + img;
    if (i === 0) image.classList.add("active");
    carousel.appendChild(image);
  });

  let current = 0;
  setInterval(() => {
    const imgs = carousel.querySelectorAll("img");
    imgs[current].classList.remove("active");
    current = (current + 1) % imgs.length;
    imgs[current].classList.add("active");
  }, 3000);

  const content = document.createElement("div");
  content.className = "card-content";

  const title = document.createElement("h3");
  title.textContent = prod.nombre;

  const btn = document.createElement("a");
  btn.className = "btn";
  btn.href = `https://wa.me/549XXXXXXXXXX?text=Hola, me interesa ${encodeURIComponent(prod.nombre)}`;
  btn.target = "_blank";
  btn.textContent = "Consultar por WhatsApp";

  content.appendChild(title);
  content.appendChild(btn);

  card.appendChild(carousel);
  card.appendChild(content);

  catalog.appendChild(card);
});
