<template>
  <div>
    <template v-if="currentCard">
      <h1>Card {{ currentCard.id }}</h1>
      <p>Count: {{ currentCard.cnt }}</p>
      <DivBtn :id="id" />
    </template>
    <template v-else>
      <h1>Card {{ id }} not found</h1>
      <p>This card doesn't exist in your cart</p>
      <Button severity="info" @click="goBack">Back to Products</Button>
    </template>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useCardStore } from "@/stores/useCartStore";
import { Button } from "primevue";
import DivBtn from "./DivBtn.vue";

const router = useRouter();
const route = useRoute();
const cartStore = useCardStore();

const id = computed(() => Number(route.params.id));
const currentCard = computed(() => cartStore.getCardById(id.value));

const goBack = () => router.push({ name: "products" });
</script>
<style scoped></style>
