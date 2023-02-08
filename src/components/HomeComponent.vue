<script setup>
import Cookie from 'js-cookie';
const logout = () => {
  Cookie.remove('token');
  window.location.href = '/';
}
</script>

<template>
  <main class="mt-3 text">
    <h1>Hello from the Welcome component</h1>
    <button @click="logout">Logout</button>
  </main>
</template>

<style scoped>
.text {
  min-height: 100vh;
  display: flex;
  align-items: center;
}
</style>
