const { createApp } = Vue;
const { createVuetify } = Vuetify;

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#e8aeb7',
          secondary: '#f7d1cd',
          accent: '#d6a4a4'
        }
      }
    }
  }
});

const BASE_URL = "https://raw.githubusercontent.com/FabiPaez/bolsos/main/bolsos/";

createApp({
  data() {
    return {
      productos: [
        {
          nombre: "Bolso Elegante",
          imagenes: ["bolso1-1.jpg", "bolso1-2.jpg"]
        },
        {
          nombre: "Bolso Casual",
          imagenes: ["bolso2-1.jpg", "bolso2-2.jpg"]
        }
      ]
    }
  },
  methods: {
    getImages(imgs) {
      return imgs.map(i => BASE_URL + i);
    },
    whatsappLink(nombre) {
      return `https://wa.me/549XXXXXXXXXX?text=Hola, me interesa ${encodeURIComponent(nombre)}`;
    }
}).use(vuetify).mount('#app');