import { ref, computed, reactive } from "vue";
import { defineStore, storeToRefs } from "pinia";
import { useProductsStore } from "./useProductsStore";
export const useCardStore = defineStore("card", () => {
  const { getItems } = storeToRefs(useProductsStore());
  const items = reactive([
    { id: 1, cnt: 3 },
    { id: 3, cnt: 1 },
  ]);

  function addCard(item) {
    const existingItem = items.find((it) => it.id === item);
    if (existingItem) {
      existingItem.cnt += 1;
    } else {
      items.push({ id: item, cnt: 1 });
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
  function getCartWithDetail() {
    return items.map((it) => {
      const products = getItems.value.filter((itP) => itP.id == it.id);
      return {
        ...it,
        product: products || null,
      };
    });
  }
  function getCardById(id) {
    return items.find((it) => it.id == id);
  }
  const getLenght = computed(() => items.length);
  const getSumCart = computed(() => {
    const data = getItems.value;
    return items.reduce((sum, itemCurd) => {
      const prod = data.find((it) => it.id === itemCurd.id);
      if (prod) {
        return sum + itemCurd.cnt * prod.price;
      }
      return sum;
    }, 0);
  });
  return {
    addCard,
    removeCard,
    inCart,
    getLenght,
    getCardById,
    getCartWithDetail,
    getSumCart,
  };
});
