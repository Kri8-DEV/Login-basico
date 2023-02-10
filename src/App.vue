<script setup>
import { RouterView } from "vue-router";
import SidebarComponent from "./components/structure/SidebarComponent.vue";

import { useRoute } from "vue-router";
const route = useRoute();

function principal() {
  return route.path !== "/login";
}
</script>

<template>
  <SidebarComponent v-if="principal()" />
  <RouterView />
</template>

<style scoped>
</style>
