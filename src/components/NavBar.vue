<template>
  <div class="wrapper">
    <img alt="Vue logo" class="logo" src="@/assets/title.png" width="250" height="50" />
    <nav>
      <RouterLink to="/">Home</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
.wrapper {
  top: 0;
  left: 0;
  height: 150px;
  position: absolute;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem;
}
.logo {
  display: block;
  margin: 0 auto;
}

nav {
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  .logo {
    margin: 0 2rem 0 0;
  }

  .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    display: flex;
    justify-content: space-around;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
