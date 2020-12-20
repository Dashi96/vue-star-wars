export default {
  actions: {
    async fetchPeople(ctx) {
      const res = await fetch("https://swapi.dev/api/people/")
      const people = await res.json()
      ctx.commit('updatePeople', people)
    },
  },
  mutations: {
    updatePeople(state, people) {
      state.people = people
    },
  },
  state: {
    people: {},
  },
  getters: {
    peopleCount(state) {
      return state.people.count
    },
  }
}