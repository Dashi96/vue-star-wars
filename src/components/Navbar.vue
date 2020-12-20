<template>
  <nav class="black">
    <div class="nav-wrapper">
      <router-link to="/" class="brand-logo yellow-text">The Star Wars App</router-link>
      <ul class="right hide-on-med-and-down">
        <router-link
          tag="li"
          to="/"
          exact=""
          active-class="active"
        >
          <a href="#" class="yellow-text">Planets</a>
        </router-link>
        <router-link
          tag="li"
          to="/statistics"
          active-class="active"
        >
          <a href="#" class="yellow-text">Statistics</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
nav {
  padding: 0 2rem;
}
</style>