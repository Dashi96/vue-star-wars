export default {
  actions: {
    async fetchStarships(ctx) {
      const res = await fetch("https://swapi.dev/api/starships/")
      const starships = await res.json()
      ctx.commit('updateStarships', starships)
    }
  },
  mutations: {
    updateStarships(state, starships) {
      state.starships = starships
    }
  },
  state: {
    starships: {},
  },
  getters: {
    starshipsCount(state) {
      return state.starships.count
    }
  }
}