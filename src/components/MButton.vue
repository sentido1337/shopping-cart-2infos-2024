<script setup>
const props = defineProps({
  text: String
})
</script>

<template>
  <button>{{ props.text }}</button>
</template>

<style scoped>
button {
  background-color: rgb(0, 0, 0);
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 1.2rem;
  cursor: pointer;
  margin: 5px;
}

button:hover {
  background-color: rgb(192, 5, 5);
}
</style>
