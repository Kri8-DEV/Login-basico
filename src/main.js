import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import App from "./App.vue";
import router from "./router";

// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

// import sweetalert2
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import "./assets/main.css";

library.add(fas, far, fab);
const app = createApp(App);

app.config.globalProperties.$hostname = "http://localhost:3000/api/";

app.provide('hostname', 'http://localhost:3000/api/');
app.use(VueSweetalert2);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
