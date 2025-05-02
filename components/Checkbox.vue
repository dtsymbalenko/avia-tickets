<script setup lang="ts">
defineProps<{
  label: string
  value: number
  checked: boolean
}>()

const emit = defineEmits<{
  (e: 'change', value: { value: number; checked: boolean }): void
}>()
</script>
<template>
  <label class="checkbox">
    <input class="checkbox__input" type="checkbox" :value="value"
      @change="(event) => emit('change', { value, checked: (event.target as HTMLInputElement).checked })"
      :checked="checked" />
    <span class="checkbox__checkmark" :class="{ 'checkbox__checkmark--checked': checked }">
      <svg v-show="checked" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.28571 8L0 4.16123L1.20857 3.07869L4.28571 5.82726L10.7914 0L12 1.09021L4.28571 8Z" fill="#2196F3" />
      </svg>
    </span>
    <span class="checkbox__label">{{ label }}</span>
  </label>
</template>

<style lang="scss" scoped>
.checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px 20px;
  gap: 10px;
  font-size: 13px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f1fcff;
  }

  &__input {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
  }

  &__checkmark {
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #9abbce;
    border-radius: 2px;

    &--checked {
      border-color: #2196f3;
    }
  }

  &__label {
    flex: 1;
  }
}
</style>