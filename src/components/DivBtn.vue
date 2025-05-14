<template>
  <div class="buttons">
    <Button severity="success" @click="addItem">Add</Button>
    <Button severity="danger" @click="removeItem">Remove</Button>
  </div>
</template>
<script setup>
import { Button } from "primevue";
import { useCardStore } from "@/stores/useCartStore";
const props = defineProps({
  id: Number,
});
const cartStore = useCardStore();
const addItem = () => cartStore.addCard(props.id);

const removeItem = () => cartStore.removeCard(props.id);
</script>
<style scoped></style>
