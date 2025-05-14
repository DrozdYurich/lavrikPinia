<template>
  <div>Card {{ infoCard }}</div>
</template>
<script setup>
import { useCardStore } from "@/stores/useCartStore";
import { computed } from "vue";
const cartStore = useCardStore();
const infoCard = computed(() => cartStore.getCartWithDetail());
</script>
<style scoped></style>
