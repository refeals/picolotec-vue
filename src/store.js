import Vue from "vue"
import Vuex from "vuex"
import { api } from "@/api"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: { contacts: [] },
  getters: {},
  actions: {
    getContacts({ commit }) {
      return api
        .get(`/contacts`)
        .then(({ data }) => commit("GET_CONTACTS", data.data))
        .catch((err) => console.log(err))
    },

    createContact({ commit }, contactData) {
      return api
        .post(`/contacts`, { ...contactData })
        .then(({ data }) => commit("CREATE_CONTACT", data.data))
        .catch((err) => console.log(err))
    },

    updateContact({ commit }, id, contactData) {
      return api
        .put(`/contacts/${id}`, { ...contactData })
        .then(({ data }) => commit("UPDATE_CONTACT", data.data))
        .catch((err) => console.log(err))
    },

    deleteContact({ commit }, id) {
      return api
        .delete(`/contacts/${id}`, { params: { id } })
        .then(() => commit("DELETE_CONTACT", id))
        .catch((err) => console.log(err))
    },
  },
  mutations: {
    GET_CONTACTS(state, contacts) {
      state.contacts = contacts
    },
  },
})

export default store
