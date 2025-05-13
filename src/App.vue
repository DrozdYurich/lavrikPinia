<script setup>
import { RouterLink, RouterView } from "vue-router";
import SideBar from "./components/SideBar.vue";
</script>

<template>
  <div class="div">
    <SideBar />
    <RouterView />
  </div>
</template>
<style scoped>
.div {
  margin-top: 5rem;
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 1rem;
}
</style>
