<template>
  <div class="bgimage">
    <div class="container center">
      <h3>Planet Info</h3>
      <div class="row">
        <div class="input-field col s12">
          <label class="active">Name</label>
          <input
            placeholder
            v-bind:value="planet.name"
            type="text"
            class="validate"
          />
        </div>
        <div class="input-field col s6">
          <label class="active">Rotation Period</label>
          <input
            placeholder
            v-bind:value="planet.rotation_period"
            type="text"
            class="validate"
          />
        </div>
        <div class="input-field col s6">
          <label class="active">Orbital Period</label>
          <input
            placeholder
            v-bind:value="planet.orbital_period"
            type="text"
            class="validate"
          />
        </div>
        <div class="input-field col s6">
          <label class="active">Diameter</label>
          <input
            placeholder
            v-bind:value="planet.diameter"
            type="text"
            class="validate"
          />
        </div>
        <div class="input-field col s6">
          <label class="active">Climate</label>
          <input
            placeholder
            v-bind:value="planet.climate"
            type="text"
            class="validate"
          />
        </div>
        <div class="input-field col s6">
          <label class="active">Gravity</label>
          <input
            placeholder
            v-bind:value="planet.gravity"
            type="text"
            class="validate"
          />
        </div>
        <div class="input-field col s6">
          <label class="active">Terrain</label>
          <input
            placeholder
            v-bind:value="planet.terrain"
            type="text"
            class="validate"
          />
        </div>
        <div class="input-field col s6">
          <label class="active">Surface Water</label>
          <input
            placeholder
            v-bind:value="planet.surface_water"
            type="text"
            class="validate"
          />
        </div>
        <div class="input-field col s6">
          <label class="active">Population</label>
          <input placeholder v-bind:value="planet.population" type="text" />
        </div>
        <div class="input-field col s6">
          <label class="active">Created</label>
          <input placeholder v-bind:value="planet.created" type="text" />
        </div>
        <div class="input-field col s6">
          <label class="active">Edited</label>
          <input placeholder v-bind:value="planet.edited" type="text" />
        </div>
        <div class="input-field col s12">
          <label class="active">URL</label>
          <input placeholder v-bind:value="planet.url" type="text" />
        </div>
        <div class="input-field col s12">
          <label class="active">Residents</label>
          <textarea
            placeholder
            v-bind:value="planet.residents"
            class="materialize-textarea"
          ></textarea>
        </div>
        <div class="input-field col s12">
          <label class="active">Films</label>
          <textarea
            placeholder
            v-bind:value="planet.films"
            class="materialize-textarea"
          ></textarea>
        </div>
        <router-link class="waves-effect black yellow-text btn mb-20" :to="'/'"
          >Back
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      planet: {},
    };
  },
  mounted() {
    const planetID = this.$route.params.id;
    fetch(`https://swapi.dev/api/planets/${planetID}`)
      .then((response) => response.json())
      .then((json) => {
        this.planet = json;
      });

    setTimeout(() => {
      M.updateTextFields();
    }, 0);
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding-top: 5px;
}
.mb-20 {
  margin-bottom: 20px;
}
.bgimage {
  background-image: url("../assets/bg-planet.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
}
</style>