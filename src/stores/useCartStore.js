import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";

export const useCardStore = defineStore("card", () => {
  const items = reactive([
    { id: 1, cnt: 3 },
    { id: 2, cnt: 5 },
    { id: 3, cnt: 1 },
  ]);
  function addCard(item) {
    items.push(item);
  }
  function removeCard(id) {
    items.filter((it) => it.id != id);
  }
  function getCardById(id) {
    return items.some((it) => it.id === id);
  }
  const getLenght = computed(() => items.length);
  return { addCard, removeCard, getCardById, getLenght };
});
