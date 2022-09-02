import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import router from "./router";
import VueTilt from "vue-tilt.js";
import 'tw-elements';

createApp(App).use(VueTilt).use(router).mount("#app");
