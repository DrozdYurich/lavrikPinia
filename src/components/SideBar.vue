<template>
  <div class="card flex justify-center">
    <Menu :model="items" />
  </div>
</template>

<script setup>
import { Menu } from "primevue";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const items = ref([
  {
    label: "Card",
    icon: "pi pi-plus",
    command: () => router.push({ name: "card" }),
  },
  {
    label: "Products",
    icon: "pi pi-search",
    command: () => router.push({ name: "products" }),
  },
  {
    label: "Order",
    icon: "pi pi-search",
    command: () => router.push({ name: "order" }),
  },
]);
</script>
