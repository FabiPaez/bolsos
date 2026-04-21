const { createApp } = Vue;

const vuetify = Vuetify.createVuetify();

createApp({
  data() {
    return {
      productos: [
        {
          nombre: "Bolso 1",
          imagenes: ["bolso1-1.jpg"]
        }
      ]
    }
  },
  template: `
    <v-app>
      <v-container>
        <h1>Catálogo OK</h1>
      </v-container>
    </v-app>
  `
}).use(vuetify).mount('#app');