import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

// Pinia
const pinia = createPinia();

createApp(App).use(pinia).use(vuetify).mount("#app");
