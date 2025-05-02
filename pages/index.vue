<script setup lang="ts">
const {
  startLoadingTickets,
  loading,
  activeFilters,
  activeTab,
  visibleTickets,
  loadMore
} = useTickets()

const updateActiveFilters = (newFilters: number[]) => {
  activeFilters.value = newFilters
}

startLoadingTickets()
</script>

<template>
  <main class="main">
    <NuxtLink to="/" class="logo">
      <NuxtImg class="logo__img" src="/images/logo.svg" alt="Logo" />
    </NuxtLink>

    <div class="container">
      <SkeletonLoader v-if="loading" height="264px" width="232px" />
      <Filters v-else class="container__filter" v-model:activeFilters="activeFilters"
        @update:activeFilters="updateActiveFilters" />

      <div class="container__tickets">
        <SkeletonLoader v-if="loading" height="46px" />
        <Tabs v-else :activeTab="activeTab" @update:activeTab="(val) => activeTab = val" />

        <template v-if="loading">
          <SkeletonLoader :count="5" height="184px" />
        </template>
        <template v-else>
          <LazyTicketCard v-for="ticket in visibleTickets"
            :key="`${ticket.carrier}-${ticket.price}-${ticket.segments[0].origin}-${ticket.segments[0].destination}`"
            :ticket="ticket" />
        </template>

        <h2 v-if="!visibleTickets.length && !loading" class="container__empty">Квитків не знайдено</h2>

        <button v-if="!loading && visibleTickets.length > 0" @click="loadMore" class="load-btn">
          Завантажити ще 5 квитків
        </button>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.main {
  max-width: 786px;
  width: 100%;
  padding: 40px 16px;
  margin: 0 auto;
}

.logo {
  margin: 0 auto;
  display: block;
  width: 82px;

  &__img {
    width: 100%;
    height: auto;
  }
}

.container {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-top: 30px;

  &__filter {
    max-width: 232px;
    width: 100%;
  }

  &__tickets {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__empty {
    text-align: center;
  }
}

.load-btn {
  background-color: #2196f3;
  border-radius: 5px;
  color: #fff;
  padding: 10px 20px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0c7cd5;
  }
}
</style>
