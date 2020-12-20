<template>
  <div id="app">
    <Navbar />
    <router-view
      v-bind:planets="planets"
      v-bind:loading="loading"
      v-bind:baseURL="baseURL"
      v-bind:pageNumber="pageNumber"
      v-bind:totalPages="totalPages"
    />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "app",
  data() {
    return {
      planets: {},
      loading: true,
      baseURL: "https://swapi.dev/api/planets/?page=",
      pageNumber: 1,
      totalPages: 1,
    };
  },
  mounted() {
    fetch(this.baseURL + this.pageNumber)
      .then((response) => response.json())
      .then((json) => {
        setTimeout(() => {
          this.planets = json.results;
          this.loading = false;
          this.totalPages = json.count;
        }, 1000);
      });
  },
  components: { Navbar },
};
</script>

<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";

.container {
  max-width: 700px;
}
</style>