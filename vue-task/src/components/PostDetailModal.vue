<template>
  <div class="modal w-full h-full bg-gray-800 bg-opacity-40" v-if="visible">
    <div class="modal-content">
      <p>{{ title }}</p>
      <p>{{ body }}</p>
      <button @click="closeModal">Close</button>
    </div>
  </div>
</template>

<script setup>

import { defineProps } from "vue";

const props = defineProps({
  visible: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});

function closeModal() {
  props.visible = false
    return props.visible
}
</script>
