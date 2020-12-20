export default {
  actions: {
    async fetchVehicles(ctx) {
      const res = await fetch("https://swapi.dev/api/vehicles/")
      const vehicles = await res.json()
      ctx.commit('updateVehicles', vehicles)
    },
  },
  mutations: {
    updateVehicles(state, vehicles) {
      state.vehicles = vehicles
    },
  },
  state: {
    vehicles: {},
  },
  getters: {
    vehiclesCount(state) {
      return state.vehicles.count
    },
  }
}