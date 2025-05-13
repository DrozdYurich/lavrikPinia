import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";

export const useCardStore = defineStore("card", () => {
  const items = reactive([
    { id: 1, cnt: 3 },

    { id: 3, cnt: 1 },
  ]);
  function addCard(item) {
    const existingItem = items.find((it) => it.id === item.id);
    if (existingItem) {
      existingItem.cnt += 1;
    } else {
      items.push(item);
    }
  }
  function removeCard(id) {
    const index = items.findIndex((it) => it.id === id);
    if (index !== -1) {
      if (items[index].cnt > 1) {
        items[index].cnt -= 1;
      } else {
        items.splice(index, 1);
      }
    }
  }
  function inCart(id) {
    return items.some((it) => it.id === id);
  }
  function getCardById(id) {
    return items.find((it) => it.id == id);
  }
  const getLenght = computed(() => items.length);
  return { addCard, removeCard, inCart, getLenght, getCardById };
});
