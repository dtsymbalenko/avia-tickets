<script setup lang="ts">
const props = defineProps<{
  activeFilters: number[]
}>()

const emit = defineEmits<{
  (e: 'update:activeFilters', value: number[]): void
}>()

const options = [
  { label: 'Без пересадок', value: 0 },
  { label: '1 пересадка', value: 1 },
  { label: '2 пересадки', value: 2 },
  { label: '3 пересадки', value: 3 }
]

const localFilters = ref<number[]>(options.map(option => option.value))

emit('update:activeFilters', localFilters.value)

const toggleFilter = ({ value, checked }: { value: number; checked: boolean }) => {
  const index = localFilters.value.indexOf(value)

  if (checked && index === -1) {
    localFilters.value.push(value)
  } else {
    if (index > -1) {
      localFilters.value.splice(index, 1)
    }
  }

  if (localFilters.value.length === 0) {
    localFilters.value = options.map(option => option.value)
  }

  emit('update:activeFilters', localFilters.value)
}

const toggleAllFilters = () => {
  localFilters.value = options.map(option => option.value)

  emit('update:activeFilters', localFilters.value)
}
</script>

<template>
  <div class="filters">
    <h2 class="filters__title">Кількість пересадок</h2>

    <Checkbox label="Всі" :value="4" :checked="localFilters.length === options.length" @change="toggleAllFilters" />

    <Checkbox v-for="option in options" :key="option.value" :label="option.label" :value="option.value"
      :checked="localFilters.includes(option.value)" @change="toggleFilter" />
  </div>
</template>

<style lang="scss" scoped>
.filters {
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border-radius: 5px;
  padding: 20px 0;
  display: flex;
  flex-direction: column;

  &__title {
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 10px;
    margin-top: 0;
    font-size: 12px;
    padding: 0 20px;
  }
}
</style>
