const { createApp } = Vue;

const vuetify = Vuetify.createVuetify();

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
    };
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
      <v-container>
        <v-row>
          <v-col
            v-for="(prod, index) in productos"
            :key="index"
            cols="12" sm="6" md="4"
          >
            <v-card>
              <v-carousel height="300" cycle>
                <v-carousel-item
                  v-for="(img, i) in getImages(prod.imagenes)"
                  :key="i"
                  :src="img"
                />
              </v-carousel>

              <v-card-title>{{ prod.nombre }}</v-card-title>

              <v-card-actions>
                <v-btn
                  color="pink"
                  :href="whatsappLink(prod.nombre)"
                  target="_blank"
                  block
                >
                  Consultar por WhatsApp
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  `
}).use(vuetify).mount('#app');