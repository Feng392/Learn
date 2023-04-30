<script setup>
import { ref } from "vue";
import VDraggable from "./components/v-draggable.vue";

const x = ref(0);
const y = ref(0);
const width = ref(100);
const height = ref(100);
</script>

<template>
  123
  <v-draggable
    v-model:x="x"
    v-model:y="y"
    v-model:width="width"
    v-model:height="height"
  >
  </v-draggable>
</template>

<style scoped></style>