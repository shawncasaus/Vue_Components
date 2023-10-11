<script setup lang="ts">
import NavBar from './components/NavBar.vue'
</script>

<template>
  <header>
    <NavBar></NavBar>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  line-height: 1.5;
  max-height: 10vh;
  margin: 1rem;
  width: 100%;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
