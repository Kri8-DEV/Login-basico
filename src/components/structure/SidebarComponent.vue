<script setup>
import Cookie from "js-cookie";

const logout = () => {
  Cookie.remove('token');
  window.location.href = '/';
}

const toggleSidebar = () => {
  let sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("active");
}

</script>

<template>
  <!-- <header>
    <nav class="nav-menu">
      <RouterLink class="item" to="/">Home</RouterLink>
      <RouterLink class="item" to="/about">About</RouterLink>
      <div class="dot"></div>
    </nav>
  </header> -->
  <div class="sidebar">
    <div class="logo-content">
      <div class="logo d-flex justify-content-center">
        <img src="../../img/logoNM.png" alt="logo" />
        <!-- <div class="logo-name"></div> -->
      </div>
      <i class="bx bx-menu" id="btn" @click="toggleSidebar"></i>
    </div>
    <ul class="nav-list">
      <li>
        <RouterLink class="item" to="/">
          <i class="bx bx-grid-alt"></i>
          <span class="links-name"> Dashboard</span>
        </RouterLink>
        <span class="tooltip">Dashboard</span>
      </li>
      <li>
        <RouterLink class="item" to="/">
          <i class='bx bx-receipt'></i>
          <span class="links-name"> Recibos</span>
        </RouterLink>
        <span class="tooltip">Recibos</span>
      </li>
      <li>
        <RouterLink class="item" to="/">
          <i class='bx bx-bar-chart-square'></i>
          <span class="links-name"> Reportes</span>
        </RouterLink>
        <span class="tooltip">Reportes</span>
      </li>
      <li>
        <RouterLink class="item" to="/">
          <i class='bx bx-box'></i>
          <span class="links-name"> Inventario</span>
        </RouterLink>
        <span class="tooltip">Inventario</span>
      </li>
    </ul>
    <div class="settings">
      <ul class="nav-list">
        <li>
          <RouterLink class="item" to="/">
            <i class='bx bx-cog'></i>
            <span class="links-name"> Configuracion</span>
          </RouterLink>
          <span class="tooltip">Configuracion</span>
        </li>
        <li>
          <RouterLink class="item" to="/">
            <i class='bx bx-help-circle' ></i>
            <span class="links-name"> Ayuda</span>
          </RouterLink>
          <span class="tooltip">Ayuda</span>
        </li>
      </ul>
    </div>
    <div class="profile-content">
      <div class="profile">
        <div class="profile-details">
          <img src="../../img/profile-img.jpg" alt="profile-img">
          <div class="name-role">
            <div class="name">John Doe</div>
            <div class="role">Admin</div>
          </div>
        </div>
        <i class='bx bx-log-out' id="log-out" @click="logout"></i>
      </div>
    </div>
  </div>
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.sidebar.active .divider{
  width: 100%;
  margin-left: 0;
  transition: all 0.3s ease;
}
.sidebar{
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 78px;
  background: #6AAB8D;
  padding: 6px 14px;
  /* z-index: 1; */
  transition: all 0.5s ease;
}
.sidebar .settings{
  width: 50px;
  padding: 0;
  margin: 0;
}
.sidebar.active{
  width: 250px;
}
.sidebar.active .settings{
  width: 222px;
}
.sidebar .logo-content .logo{
  color: #fff;
  display: flex;
  height: 50px;
  width: 100%;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease;
}
.sidebar.active .logo-content .logo {
  opacity: 1;
  pointer-events: none;
}
.logo-content .logo img {
  height: 50px;
  margin-right: 5px;
}

.logo-content .logo .logo-name{
  font-size: 20px;
  font-weight: 400;
}

.sidebar #btn {
  position: absolute;
  color: #fff;
  top: 6%;
  left: 50%;
  font-size: 20px;
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  transform: translateX(-50%);
  cursor: pointer;
}
.sidebar.active #btn{
  left: 90%;

}
.sidebar .settings ul,
.sidebar ul{
  margin-top: 20px;
}

.settings ul li,
.sidebar ul li{
  position: relative;
  height: 50px;
  width: 100%;
  /* margin: 0 5px; */
  list-style: none;
  line-height: 50px;
}
.sidebar .settings{
  position: absolute;
  bottom: 80px;
}
.sidebar .settings ul li .tooltip ,
.sidebar ul li .tooltip {
  color: #000;
  position: absolute;
  left: 70px;
  top: 0;
  transform: translateY(-50%);
  border-radius: 6px;
  height: 35px;
  width: 122px;
  background: #FFF;
  line-height: 35px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  transition: 0s;
  opacity: 0;
  pointer-events: none;
  display: block;
}
.sidebar.active .settings ul li .tooltip,
.sidebar.active ul li .tooltip{
  display: none;
}
.sidebar .settings ul li:hover .tooltip,
.sidebar ul li:hover .tooltip{
  transition: all 0.5s ease;
  opacity: 1;
  top: 50%;
}

.sidebar .settings ul li .item,
.sidebar ul li .item {
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: all 0.4s ease;
  border-radius: 12px;
  white-space: nowrap;
}

.sidebar .settings ul li .item:hover ,
.sidebar ul li .item:hover {
  background: #D7642E;
}

.sidebar .settings ul li i,
.sidebar ul li i{
  height: 50px;
  min-width: 50px;
  border-radius: 12px;
  line-height: 50px;
  text-align: center;
  font-size: 22px;
}
.sidebar .settings .links-name ,
.sidebar .links-name {
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease;
}
.sidebar.active .settings .links-name ,
.sidebar.active .links-name {
  opacity: 1;
  pointer-events: auto;
}
.sidebar .profile-content{
  position: absolute;
  color: #FFF;
  bottom: 0;
  left: 0;
  width: 100%;
}

.sidebar .profile-content .profile{
  position: relative;
  padding: 10px 6px;
  height: 60px;
  background: none;
  transition: all 0.4s ease;
}
.sidebar.active .profile-content .profile{
  background: #598f76;
}
.profile-content .profile .profile-details{
  display: flex;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  white-space: nowrap;
}
.sidebar.active .profile .profile-details {
  opacity: 1;
  pointer-events: auto;
}

.profile .profile-details img {
  height: 45px;
  width: 45px;
  object-fit: cover;
  border-radius: 12px;
}
.profile .profile-details .name-role{
  margin-left: 10px;
}
.profile .profile-details .name {
  font-size: 15px;
  font-weight: 400;
}
.profile .profile-details .role {
  font-size: 12px;
}
.profile #log-out {
  position: absolute;
  left: 50%;
  bottom: 5px;
  transform: translateX(-50%);
  min-width: 50px;
  line-height: 50px;
  font-size: 20px;
  border-radius: 12px;
  text-align: center;
  cursor: pointer;
  transition: all 0.4s ease;
  background: #598f76;
}
.sidebar.active .profile #log-out {
  left: 88%;
  cursor: pointer;
  background: none;
}
/* .nav-menu .item {
  color: #f6f4e6;
  text-decoration: none;
  font-size: 1.2em;
  text-transform: uppercase;
  font-weight: 500;
  display: inline-block;
  width: 80px;
  -webkit-animation: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}
.nav-menu .item:hover {
  color: #fddb3a;
}

.nav-menu .dot {
  width: 6px;
  height: 6px;
  background: #fddb3a;
  border-radius: 50%;
  opacity: 0;
  -webkit-transform: translateX(30px);
  transform: translateX(30px);
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

.nav-menu .item:nth-child(1):hover ~ .dot {
  -webkit-transform: translateX(30px);
  transform: translateX(30px);
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  opacity: 1;
}

.nav-menu .item:nth-child(2):hover ~ .dot {
  -webkit-transform: translateX(110px);
  transform: translateX(110px);
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  opacity: 1;
} */
</style>