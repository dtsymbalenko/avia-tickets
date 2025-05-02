<template>
  <main class="main">
    <NuxtLink to="/" class="logo">
      <NuxtImg class="logo__img" src="/images/logo.svg" alt="Logo" />
    </NuxtLink>

    <div class="container">
      <Filters class="container__filter" />

      <div class="container__tickets">
        <Tabs />
        <div v-if="loading">Loading...</div>

        <TicketCard />

        <button v-if="!loading" @click="loadMore" class="load-btn">
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
  padding: 50px 16px;
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
