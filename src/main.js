import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

// import boxicons
import "boxicons/css/boxicons.min.css";

// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

// import sweetalert2
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import "./assets/main.css";

const app = createApp(App);

app.config.globalProperties.$hostname = "http://localhost:3000/api/";

app.provide('hostname', 'http://localhost:3000/api/');
app.use(VueSweetalert2);
app.use(router);
app.mount("#app");
