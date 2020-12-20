import Vue from 'vue'
import Vuex from 'vuex'
import planets from './modules/planets'
import films from './modules/films' 
import people from './modules/people'
import species from './modules/species'
import vehicles from './modules/vehicles'
import starships from './modules/starships'

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    planets,
    films,
    people,
    species,
    vehicles,
    starships
  }
})