<template>
  <header>
    <nav class="nav-menu">
      <RouterLink class="item" to="/">Home</RouterLink>
      <RouterLink class="item" to="/about">About</RouterLink>
      <div class="dot"></div>
    </nav>
  </header>
</template>

<style scoped>
.nav-menu .item {
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
}
</style>