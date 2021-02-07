import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: { contacts: [] },
  mutations: {
    getContacts(state, payload) {
      state.contacts = payload
    },
  },
})

export default store
