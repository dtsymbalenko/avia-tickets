<script setup lang="ts">
import { ActiveTab } from '~/types/ticket';

defineProps<{
  activeTab: string
}>()

const emit = defineEmits<{
  (e: 'update:activeTab', value: string): void
}>()

const tabs = [
  { label: 'Найдешевший', value: ActiveTab.CHEAP },
  { label: 'Найшвидший', value: ActiveTab.FAST },
  { label: 'Оптимальний', value: ActiveTab.OPTIMAL }
]
</script>

<template>
  <div class="tabs">
    <button class="tabs__button" :class="{ 'tabs__button--active': activeTab === tab.value }" v-for="tab in tabs"
      :key="tab.value" @click="emit('update:activeTab', tab.value)">
      {{ tab.label }}
    </button>
  </div>
</template>

<style lang="scss" scoped>
.tabs {
  display: flex;

  &__button {
    flex: 1;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 600;
    cursor: pointer;
    padding: 15px;
    background-color: #fff;
    border: 1px solid #dfe5ec;
    transition: all 0.3s ease;

    &:first-child {
      border: 1px solid #dfe5ec;
      border-right: 0;
      border-radius: 5px 0 0 5px;
    }

    &:last-child {
      border: 1px solid #dfe5ec;
      border-left: 0;
      border-radius: 0 5px 5px 0;
    }

    &:hover,
    &--active:last-child,
    &--active:first-child,
    &--active {
      background-color: #2196f3;
      color: white;
      border-color: #2196f3;
    }
  }
}
</style>
