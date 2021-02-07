import Vue from "vue"
import Vuex from "vuex"
import { api } from "@/api"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: { contacts: [] },
  getters: {
    allContacts: (state) => state.contacts,
  },
  actions: {
    getContacts({ commit }) {
      return api
        .get(`/contacts`)
        .then(({ data }) => commit("GET_CONTACTS", data))
        .catch((err) => console.log(err))
    },

    createContact({ commit }, contactData) {
      return api
        .post(`/contacts`, { ...contactData })
        .then(({ data }) => commit("CREATE_CONTACT", data))
        .catch((err) => console.log(err))
    },

    updateContact({ commit }, id, contactData) {
      return api
        .put(`/contacts/${id}`, { ...contactData })
        .then(({ data }) => commit("UPDATE_CONTACT", data))
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
    GET_CONTACTS(state, payload) {
      state.contacts = payload.data
    },
    CREATE_CONTACT(state, payload) {
      state.contacts = [...state, payload.data]
    },
    UPDATE_CONTACT(state, payload) {
      state.contacts = state.map((contact) => {
        if (contact.id === payload.data.id) {
          return payload.data
        } else {
          return contact
        }
      })
    },
    DELETE_CONTACT(state, payload) {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== payload
      )
    },
  },
})

export default store
