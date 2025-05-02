<template>
  <main class="container">
    <NuxtLink to="/" class="logo">
      <NuxtImg class="logo__img" src="/images/logo.svg" alt="Logo" />
    </NuxtLink>
    <h1>Test</h1>
  </main>
</template>

<style>
.container {
  max-width: 786px;
  width: 100%;
  padding: 50px 16px;
  margin: 0 auto;
}

.logo {
  margin: 0 auto;
  display: block;
  width: 82px;
}

.logo__img {
  width: 100%;
  height: auto;
}
</style>