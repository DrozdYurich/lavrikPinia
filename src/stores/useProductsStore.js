import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", () => {
  const items = reactive([
    { id: 1, price: 120, title: "Sams" },
    { id: 2, price: 140, title: "Sams3" },
    { id: 3, price: 150, title: "Sams6" },
  ]);

  const getItems = computed(() => items);
  return { getItems };
});
