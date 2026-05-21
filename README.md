# Bossa - Landing e-commerce boutique

Landing/e-commerce para Bossa, marca femenina de marroquineria y accesorios. El proyecto evoluciona el catalogo original hacia una experiencia editorial, moderna, responsive y lista para tomar pedidos por WhatsApp.

## Analisis de referencias

- Proyecto base: catalogo simple con Vue/Vuetify por CDN, cards con carrusel y consulta por WhatsApp. Se conserva la simpleza operativa y el foco en imagen de producto.
- Deploy actual: comunica una tienda pequena y cercana, pero necesitaba jerarquia visual, catalogo mas amplio, precios, descuentos, carrito y mejor responsive.
- Referencia SITE123: se toma la estructura de landing extensa: hero, banners, categorias, grillas, beneficios, testimonios, FAQ y footer.
- Direccion premium: se eleva hacia una estetica boutique femenina inspirada en Zara, Dior, Aesop y editoriales Pinterest: tipografia serif, mucho aire, imagen grande, microinteracciones y paleta calida.

## Stack elegido

Se eligio una arquitectura estatica con HTML, CSS y JavaScript vanilla.

Motivo tecnico:

- Costo cero y deploy muy simple en Vercel, Netlify o GitHub Pages.
- Performance alta: sin bundle, sin framework, sin dependencias pesadas.
- Mantenibilidad clara para un proyecto boutique chico.
- Panel admin local usable por la duena sin login ni backend.
- Base facil de migrar luego a Next.js + Supabase si el negocio necesita multiusuario, pagos o inventario centralizado.

## UX/UI

- Hero editorial con marca como protagonista de primer viewport.
- Promo strip con informacion critica de compra.
- Categorias visuales destacadas.
- 12 secciones de catalogo: nuevo ingreso, carteras, bolsos, mochilas, mini bags, ofertas, homewear, lenceria, abrigos, gafas/cintos, perfumes/detalles y mas vendidos.
- Cards 4/2/1 por desktop/tablet/mobile.
- Animaciones suaves de entrada, hover y cambio de imagen.
- Carrito lateral persistente.
- Checkout profesional por WhatsApp.
- Admin simple integrado en la landing.

## Arquitectura

```txt
.
|-- index.html      # Estructura, SEO, secciones y panel admin
|-- styles.css      # Design system, responsive, animaciones y layout
|-- app.js          # Datos, render, carrito, admin, filtros y WhatsApp
|-- bolsos/         # Imagenes originales del repositorio base
`-- README.md       # Documentacion
```

## Componentes principales

- `site-header`: navegacion, busqueda y acceso al carrito.
- `hero`: primera impresion editorial.
- `promo-strip`: mensajes comerciales.
- `category-wall`: categorias principales.
- `catalogSections`: render dinamico de 12 grillas/carruseles.
- `product-card`: imagenes, precio, descuento, stock y accion.
- `cart-drawer`: carrito con cantidades, subtotal, descuentos y total.
- `admin`: formulario para crear, editar, borrar, marcar ofertas y exportar catalogo.
- `faq` y `footer`: cierre comercial y confianza.

## Catalogo

Incluye 24 productos demo, cada uno con 4 imagenes remotas optimizadas por URL, aproximadamente 96 imagenes. La estructura soporta 120+ productos porque el render se basa en un arreglo de objetos y colecciones filtradas.

Campos por producto:

- `id`
- `name`
- `category`
- `price`
- `discount`
- `stock`
- `featured`
- `offer`
- `images`
- `description`

## Panel admin

La duena puede:

- Agregar productos.
- Editar nombre, categoria, precio, descuento, stock e imagenes.
- Marcar destacado u oferta.
- Eliminar productos.
- Restaurar catalogo demo.
- Exportar JSON del catalogo.

Los cambios se guardan en `localStorage`. Para produccion real con varias computadoras, el siguiente paso recomendado es Supabase gratuito con una tabla `products` y Storage para imagenes.

## Carrito y WhatsApp

El carrito guarda productos en `localStorage`, permite sumar/restar cantidades y calcula:

- subtotal sin descuento
- descuentos aplicados
- total final

El boton "Finalizar pedido por WhatsApp" abre `wa.me` con un mensaje legible que incluye productos, cantidades, totales y texto para coordinar entrega/envio.

Cambiar numero:

```js
const WHATSAPP_NUMBER = "5492640000000";
```

## Deploy

### Vercel

1. Subir el repo a GitHub.
2. Importar el proyecto en Vercel.
3. Framework preset: `Other`.
4. Build command: dejar vacio.
5. Output directory: `.`.
6. Deploy.

### GitHub Pages

1. Ir a Settings > Pages.
2. Source: Deploy from branch.
3. Branch: `main`.
4. Folder: `/root`.

## Variables de entorno

No requiere variables de entorno en esta version estatica.

Recomendadas para roadmap con backend:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_WHATSAPP_NUMBER=
CLOUDINARY_CLOUD_NAME=
```

## Roadmap futuro

- Migrar admin a Supabase Auth + Supabase Database.
- Subida de imagenes con Cloudinary o Supabase Storage.
- Wishlist persistente por cliente.
- Filtros por color, precio, stock y categoria.
- Analytics basicos de clicks a WhatsApp.
- Integracion con Instagram feed.
- Modo preventa/encargue por producto.
- PWA para uso tipo app.
- Pasarela de pago opcional cuando el negocio este listo.

## Desarrollo local

Como es estatico, puede abrirse `index.html` directamente. Para probarlo como sitio:

```bash
python -m http.server 4173
```

Luego abrir `http://localhost:4173`.
