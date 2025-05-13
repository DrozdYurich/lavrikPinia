<template>
  <RouterView />
  <div>
    <CardProd
      v-for="it in all"
      :title="it.title"
      :price="it.price"
      :rout="it.id"
    />
  </div>
</template>
<script setup>
import CardProd from "@/components/CardProd.vue";
import { useProductsStore } from "@/stores/useProductsStore";
import { storeToRefs } from "pinia";
import { computed } from "vue";
const { getItems } = storeToRefs(useProductsStore());
const all = computed(() => {
  return getItems.value;
});
</script>
<style scoped></style>
