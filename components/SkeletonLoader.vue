<script setup lang="ts">
defineProps({
  height: { type: String, default: '20px' },
  width: { type: String, default: '100%' },
  borderRadius: { type: String, default: '5px' },
  count: { type: Number, default: 1 }
})
</script>

<template>
  <div
    v-for="n in count"
    :key="n"
    class="skeleton"
    :style="{
      height,
      width,
      borderRadius
    }"
  ></div>
</template>

<style lang="scss" scoped>
.skeleton {
  background: #e0e0e0;
  animation: pulse 1.5s infinite ease-in-out;
}

@keyframes pulse {
  0% {
    background-color: #f0f0f0;
  }
  50% {
    background-color: #e0e0e0;
  }
  100% {
    background-color: #f0f0f0;
  }
}
</style>
