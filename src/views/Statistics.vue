<template>
  <div class="bgimage">
    <div class="container center">
      <h3 class="mb-50">Statistics</h3>
      <table class="highlight centered">
        <thead>
          <tr>
            <th>#</th>
            <th>Planets</th>
            <th>People</th>
            <th>Films</th>
            <th>Species</th>
            <th>Vehicles</th>
            <th>Starships</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Count:</td>
            <td class="yellow-text">{{ planetsCount }}</td>
            <td class="yellow-text">{{ peopleCount }}</td>
            <td class="yellow-text">{{ filmsCount }}</td>
            <td class="yellow-text">{{ speciesCount }}</td>
            <td class="yellow-text">{{ vehiclesCount }}</td>
            <td class="yellow-text">{{ starshipsCount }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: mapGetters([
    "planetsCount",
    "peopleCount",
    "filmsCount",
    "speciesCount",
    "vehiclesCount",
    "starshipsCount",
  ]),
  methods: mapActions([
    "fetchPlanets",
    "fetchPeople",
    "fetchFilms",
    "fetchSpecies",
    "fetchVehicles",
    "fetchStarships",
  ]),
  async mounted() {
    this.fetchPlanets();
    this.fetchPeople();
    this.fetchFilms();
    this.fetchSpecies();
    this.fetchVehicles();
    this.fetchStarships();
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding-top: 30px;
}
.mb-50 {
  margin-bottom: 50px;
}
.bgimage {
  background-image: url("../assets/bg-statistics.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
}
</style>