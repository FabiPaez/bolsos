const { createApp } = Vue;
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
        ✨ Catálogo de Bolsos
      </v-toolbar-title>
    </v-app-bar>

    <v-container class="mt-6">
      <v-row>
        <v-col
          v-for="(prod, index) in productos"
          :key="index"
          cols="12" sm="6" md="4"
        >
          <v-card class="card-hover" elevation="3">

            <v-carousel
              height="300"
              hide-delimiters
              show-arrows="hover"
              cycle
            >
              <v-carousel-item
                v-for="(img, i) in getImages(prod.imagenes)"
                :key="i"
                :src="img"
              ></v-carousel-item>
            </v-carousel>

            <v-card-title>{{ prod.nombre }}</v-card-title>

            <v-card-actions>
              <v-btn
                class="whatsapp-btn"
                :href="whatsappLink(prod.nombre)"
                target="_blank"
                block
              >
                💬 Consultar por WhatsApp
              </v-btn>
            </v-card-actions>

          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
  `
}).use(vuetify).mount('#app');