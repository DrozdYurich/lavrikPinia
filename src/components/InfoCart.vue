<template>
  <div>Total: {{ getSumCart }} Р</div>
</template>
<script setup>
import { useCardStore } from "@/stores/useCartStore";
import { storeToRefs } from "pinia";
const { getSumCart } = storeToRefs(useCardStore());
</script>
<style scoped></style>
