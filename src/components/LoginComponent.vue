<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { computed, inject } from "vue";
import Swal from "sweetalert2";
import axios from "axios";
import Cookies from "js-cookie";
const hostname = inject("hostname");

let showPassword = false;
let user = '';
let password = '';

// Function to show or hide password
const togglePassword = () => {
  const passwordInput = document.getElementById("password-input");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    showPassword = !showPassword;
    console.info(showPassword);
  } else {
    passwordInput.type = "password";
    showPassword = !showPassword;
    console.info(showPassword);
  }
};

// Function to change icon
const iconToDisplay = computed(() => {
  if (showPassword) {
    return "fa-regular fa-eye-slash";
  } else {
    return "fa-regular fa-eye";
  }
});

// Function to check if user and password are empty and clear possible special characters
const checkData = () => {
  // clear special characters
  let parser = new DOMParser();
  user = parser.parseFromString(
    user,
    "text/html"
  );

  user = user.body.textContent;
  user = user.trim();
  
  password = parser.parseFromString(
    password,
    "text/html"
  );

  password = password.body.textContent;
  password = password.trim();
  
  if (user === "" || password === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Por favor, ingrese todos los datos",
    });
  } else {
    // Create json object with user and password
    let data = {
      username: user,
      email: user,
      password: password,
    }

    // console.info(data);
    login(JSON.stringify(data));

  }
};

// Function to login
async function login(data) {
  try {
    await axios
      .post(hostname + "auth/signin", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // console.log(response);
        // redirect to home page
        if ( response["status"] === 200 ) {
          // console.info("token " + response["data"]["data"]["token"]);
          Cookies.set("token", response["data"]["data"]["token"]);
          Swal.fire({
            icon: "success",
            title: "Bienvenido " + response["data"]["data"]["user"]["username"]
          });
          setTimeout(() => {
            window.location.href = "/";
          }, 2000);
        }
      });
  } catch (error) {
    // console.error(error["response"]);
    if(error["response"]["status"] === 401) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Contraseña incorrecta"
      });
    } else if (error["response"]["status"] === 404) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Usuario no encontrado"
      });
    } else if (error["response"]["status"] === 500) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error interno del servidor"
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error desconocido"
      });
    }
  }
}
</script>

<template>
  <div class="main">
    <div class="img-cropper">
      <img src="../img/logoNM.png" class="logo-login" alt="image" />
    </div>
    <div class="d-flex justify-content-center">
      <div class="card">
        <h1 class="title">Iniciar sesi&oacute;n</h1>
        <form @submit.stop.prevent="checkData">
          <div class="mb-5 d-flex justify-content-center">
            <!-- <label for="user">Usuario</label> -->
            <input 
              v-model="user"
              type="text" 
              name="user" 
              id="user" 
              placeholder="Usuario" 
            />
          </div>
          <div class="mb-5 d-flex justify-content-center">
            <!-- <label for="password">Contrase&ntilde;a</label> -->
            <input
              v-model="password"
              type="password"
              id="password-input"
              placeholder="Contraseña"
            />
            <button type="button" id="password-btn" @click="togglePassword()">
              <FontAwesomeIcon
                :icon="iconToDisplay"
                id="icon-password"
                inverse
              />
            </button>
          </div>
          <div class="d-flex justify-content-around mb-5">
            <div class="form-check d-flex">
              <input
                class="align-self-center"
                type="checkbox"
                name="remember"
                id="remember-check"
              />
              <label class="form-check-label check-label" for="remember-check">
                Recu&eacute;rdame
              </label>
            </div>
            <div class="form-check">
              <a href="#" class="forgot-pass"
                >Olvid&eacute; mi contrase&ntilde;a</a
              >
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <button class="btn btn-login">Acceder</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
#password-btn {
  position: absolute;
  top: 50%;
  right: 10%;
  transform: translateY(-50%);
  /* color: #fff; */
  cursor: pointer;
  background-color: transparent;
  border: none;
}
#icon-password {
  position: absolute;
  top: 50%;
  right: 11%;
  transform: translateY(-50%);
  color: #fff;
  cursor: pointer;
  height: 20px;
}
.text {
  min-height: 100vh;
  display: flex;
  align-items: center;
}
.card {
  margin-top: -65px;
  background-color: #6aab8d;
  width: 722px;
  height: 540px;
  border-radius: 15px;
  box-shadow: 8px 8px 4px 0px rgba(0, 0, 0, 0.75);
}

.img-cropper {
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 20%;
  padding: 10px;
  position: relative;
  margin: 0 auto;
  /* margin-top: 30px; */
  z-index: 100;
  background: #f2f2f2;
}

img {
  display: block;
  height: 70%;
  transform: translateY(20px);
}

.title {
  font-family: "Lato", sans-serif;
  font-weight: 400 !important;
  color: #fff;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  margin-top: 86px;
}

input[type="text"],
input[type="password"] {
  width: 80%;
  height: 50px;
  background: transparent;
  border: none;
  border-bottom: 1px solid #fff;
  padding-left: 20px;
  font-size: 20px;
  font-family: "Lato", sans-serif;
  font-weight: 400 !important;
  color: #f2f2f2;
}
input[type="text"]:focus,
input[type="password"]:focus {
  outline: none;
  border-bottom: 1px solid #fff;
}
input::placeholder {
  color: #f2f2f2;
}
input::-ms-reveal,
input::-ms-clear {
  display: none;
}
.check-label {
  font-family: "Lato", sans-serif;
  color: #fff;
  font-size: 1.34em;
  margin-left: 5px;
  cursor: pointer;
}
input[type="checkbox"] {
  width: 1.34em;
  height: 1.34em;
  cursor: pointer;
}
.forgot-pass {
  font-family: "Lato", sans-serif;
  color: #fff;
  font-size: 1.34em;
  text-decoration: underline;
}
.btn-login {
  width: 35%;
  height: 50px;
  background-color: #2a2a39;
  border: none;
  border-radius: 100px;
  font-family: "Lato", sans-serif;
  font-weight: 400 !important;
  color: #fff;
  font-size: 1.34em;
  cursor: pointer;
  box-shadow: 0 5px 4px 0 rgba(0, 0, 0, 0.25);
}

.btn-login:hover {
  box-shadow: none;
}
</style>
