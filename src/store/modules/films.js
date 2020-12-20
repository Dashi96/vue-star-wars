export default {
  actions: {
    async fetchFilms(ctx) {
      const res = await fetch("https://swapi.dev/api/films/")
      const films = await res.json()
      ctx.commit('updateFilms', films)
    },
  },
  mutations: {
    updateFilms(state, films) {
      state.films = films
    },
  },
  state: {
    films: {},
  },
  getters: {
    filmsCount(state) {
      return state.films.count
    },
  }
}