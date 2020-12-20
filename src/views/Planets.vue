<template>
  <div class="bgimage">
    <div class="container pt-5">
      <Loader v-if="loading" />
      <div v-else-if="planets.length">
        <table class="highlight centered">
          <thead>
            <tr>
              <th>#</th>
              <th>Planet Name</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody v-for="(planet, index) of planets" :key="planet.index">
            <tr>
              <td>{{ index + 1 + pageNumber * 10 - 10 }}</td>
              <td>{{ planet.name }}</td>
              <td>
                <router-link
                  class="waves-effect black yellow-text btn"
                  :to="'/planet/' + (index + 1 + pageNumber * 10 - 10)"
                  >Open
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="pagination center">
          <button
            class="waves-effect yellow black-text btn"
            @click="prevPage"
            :disabled="pageNumber == 1"
          >
            Previous
          </button>
          <span class="pageNumber">{{ pageNumber }}</span>
          <button
            class="waves-effect yellow black-text btn"
            @click="nextPage"
            :disabled="pageNumber >= totalPages/10"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "@/components/Loader";

export default {
  props: ["planets", "loading", "baseURL", "pageNumber", "totalPages"],
  methods: {
    nextPage() {
      this.pageNumber = this.pageNumber + 1;
      fetch(this.baseURL + this.pageNumber)
        .then((response) => response.json())
        .then((json) => {
          this.planets = json.results;
        });
    },
    prevPage() {
      this.pageNumber = this.pageNumber - 1;
      fetch(this.baseURL + this.pageNumber)
        .then((response) => response.json())
        .then((json) => {
          this.planets = json.results;
        });
    },
  },
  components: { Loader },
};
</script>

<style lang="scss" scoped>
.pt-5 {
  padding-top: 5px;
}
.bgimage {
  background-image: url("../assets/bg-planets.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
}
.pageNumber {
  font-size: 20px;
  padding: 0 10px 0 10px;
}
.pagination {
  margin-top: 20px;
}
</style>
