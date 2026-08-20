<template>
  <p class="error">{{ message }}</p>
</template>

<script setup>
defineProps({
  message: {
    type: String,
    default: '',
  },
})
</script>

<style scoped>
.error {
  padding: 12px;
  border-radius: 6px;
  background: #ffebee;
  color: #d32f2f;
}
</style>
