<template>
  <Card class="crd">
    <template #title>{{ title }}</template>
    <template #content>
      <p class="m-0">Price: {{ price }}</p>
      <RouterLink :to="{ name: 'product', params: { id: rout } }"
        >ReadMore</RouterLink
      >
    </template>
  </Card>
</template>

<script setup>
import { Card } from "primevue";
const props = defineProps({
  title: String,
  price: Number,
  rout: Number,
});
</script>
<style scoped>
.crd {
  border: 2px solid black;
  margin-bottom: 0.5rem;
}
a {
  color: black;
}
</style>
