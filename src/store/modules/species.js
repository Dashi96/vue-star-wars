export default {
  actions: {
    async fetchSpecies(ctx) {
      const res = await fetch("https://swapi.dev/api/species/")
      const species = await res.json()
      ctx.commit('updateSpecies', species)
    },
  },
  mutations: {
    updateSpecies(state, species) {
      state.species = species
    },
  },
  state: {
    species: {},
  },
  getters: {
    speciesCount(state) {
      return state.species.count
    },
  }
}