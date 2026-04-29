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
        },{
          nombre: "Bolso Fashion",
          imagenes: ["bolso1-1.jpg", "bolso1-2.jpg"]
        },{
          nombre: "Anteojos",
          imagenes: ["bolso1-1.jpg", "bolso1-2.jpg"]
        },{
          nombre: "Mochila",
          imagenes: ["bolso1-1.jpg", "bolso1-2.jpg"]
        },{
          nombre: "Bolso Elegante",
          imagenes: ["bolso1-1.jpg", "bolso1-2.jpg"]
        }
      ]
    };
  },

  mounted() {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }, 100);
  },

  methods: {
    getImages(imgs) {
      return imgs.map(i => BASE_URL + i);
    },
    whatsappLink(nombre) {
      return `https://wa.me/549XXXXXXXXXX?text=Hola, me interesa ${encodeURIComponent(nombre)}`;
    }
  },

  template: `
    <v-app>
    <v-app-bar elevation="2" color="white">
      <v-toolbar-title class="title-bar" style="color:#6b4c57">
         Catálogo de Bolsos
      </v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container "mt-6">
        <div class="hero-title">
           Bolsos que enamoran  
        </div>
        <div class="hero-subtitle">
          Elegancia, estilo y diseño para cada ocasión
        </div>
        <v-row>
          <v-col
            v-for="(prod, index) in productos"
            :key="index"
            cols="12" sm="6" md="4"
          >
            <v-card class="card-hover">
              <v-carousel height="280" cycle>
                <v-carousel-item
                  v-for="(img, i) in getImages(prod.imagenes)"
                  :key="i"
                  :src="img"
                />
              </v-carousel>

              <v-card-title class="text-center title-style">
                {{ prod.nombre }}
                  </v-card-title>
                    <v-card-actions class="d-flex justify-center pb-4">
                      <v-btn
                        class="whatsapp-btn"                        
                        :href="whatsappLink(prod.nombre)"
                        target="_blank"
                        width="75%"
                        prepend-icon="mdi-whatsapp"
                      >
                        Consultar por WhatsApp
                      </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
      </v-container>
    </v-main>
    </v-app>
  `
}).use(vuetify).mount('#app');