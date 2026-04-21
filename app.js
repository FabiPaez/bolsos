const { createApp } = Vue;
    return {
      productos: [
        {
          nombre: "Bolso 1",
          imagenes: ["bolso1-1.jpg", "bolso1-2.jpg"]
        },
        {
          nombre: "Bolso 2",
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
  },
  template: `
  <v-app>
    <v-app-bar color="black" dark>
      <v-toolbar-title>Catálogo de Bolsos</v-toolbar-title>
    </v-app-bar>

    <v-container class="mt-5">
      <v-row>
        <v-col v-for="(prod, index) in productos" :key="index" cols="12" sm="6" md="4">
          <v-card elevation="4">

            <v-carousel height="300" hide-delimiters show-arrows="hover">
              <v-carousel-item
                v-for="(img, i) in getImages(prod.imagenes)"
                :key="i"
                :src="img"
              ></v-carousel-item>
            </v-carousel>

            <v-card-title>{{ prod.nombre }}</v-card-title>

            <v-card-actions>
              <v-btn
                color="green"
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