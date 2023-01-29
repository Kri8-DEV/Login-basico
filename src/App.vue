<script setup>
import { RouterView } from "vue-router";
import HeaderItem from "./components/structure/HeaderNav.vue";

import { useRoute } from "vue-router";
const route = useRoute();

function principal() {
  return route.path !== "/login";
}
</script>

<template>
  <HeaderItem v-if="principal()" />
  <RouterView />
</template>

<style scoped>
</style>
