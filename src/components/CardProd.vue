<template>
  <Card class="crd">
    <template #title>{{ title }}</template>
    <template #content>
      <p class="m-0">Price: {{ price }}</p>
      <RouterLink :to="{ name: 'product', params: { id: rout } }"
        >ReadMore</RouterLink
      >
      Добавлено:{{ displCount }}
      <DivBtn :id="rout" />
    </template>
  </Card>
</template>

<script setup>
import { Card } from "primevue";
import DivBtn from "./DivBtn.vue";
import { useCardStore } from "@/stores/useCartStore";
import { computed } from "vue";
const props = defineProps({
  title: String,
  price: Number,
  rout: Number,
});
const cartStore = useCardStore();
const currentCard = computed(() => cartStore.getCardById(props.rout));
const displCount = computed(() => currentCard.value?.cnt || 0);
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
