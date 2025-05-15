<template>
  <div>
    <h2>Корзина</h2>
    <CardProd
      v-for="item in infoCard"
      :price="item.price"
      :rout="item.id"
      :title="item.title"
      :key="item.id"
    />
  </div>
</template>
<script setup>
import CardProd from "@/components/CardProd.vue";
import { useCardStore } from "@/stores/useCartStore";
import { computed } from "vue";
const cartStore = useCardStore();
const infoCard = computed(() => cartStore.getCartWithDetail());
</script>
<style scoped></style>
