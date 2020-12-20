export default {
  actions: {
    async fetchPlanets(ctx) {
      const res = await fetch("https://swapi.dev/api/planets/")
      const planets = await res.json()
      ctx.commit('updatePlanets', planets)
    },
  },
  mutations: {
    updatePlanets(state, planets) {
      state.planets = planets
    },
  },
  state: {
    planets: {},
  },
  getters: {
    planetsCount(state) {
      return state.planets.count
    },
  }
}