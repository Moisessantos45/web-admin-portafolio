import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./routers";
import { createPinia } from "pinia";
import { VueQueryPlugin } from "@tanstack/vue-query";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use(VueQueryPlugin);
app.mount("#app");
