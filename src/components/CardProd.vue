<template>
  <Card>
    <template #title>{{ title }}</template>
    <template #content>
      <p class="m-0">Price: {{ price }}</p>
    </template>
  </Card>
</template>

<script setup>
const props = defineProps({
  title: String,
  price: String,
});
</script>
