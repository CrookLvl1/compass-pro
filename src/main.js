import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/sass/default.sass";
import "@/sass/fonts.sass";

createApp(App).use(router).mount("#app");
