import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    design: {
      header: {
        color: "green",
        title: "Awesome Quotes App",
        name: "Header"
      },
      quoteTabs: {
        color: "yellow",
        title: "Quote Tab",
        name: "Quote Tab"
      }
    },
    quotes: [
      { id: 1, text: "Awesome Quote 1" },
      { id: 2, text: "Awesome Quote 2" },
      { id: 3, text: "Awesome Quote 3" }
    ]
  },
  mutations: {
    SET_HEADER_COLOR(state, color) {
      state.design.header.color = color;
    },
    REMOVE_QUOTE(state, index) {
      state.quotes.splice(index, 1);
    },
    ADD_QUOTE(state, quote) {
      state.quotes.push(quote);
    }
  },
  actions: {
    setColor: ({ commit }, color) => {
      commit("SET_HEADER_COLOR", color);
    },
    removeQuote: ({ commit }, quote) => {
      commit("REMOVE_QUOTE", quote);
    },
    addQuote: ({ commit }, name) => {
      const id = Math.floor(Math.random() * 1454545454524247);
      const newQuote = { id: id, text: name };
      commit("ADD_QUOTE", newQuote);
    }
  },
  getters: {
    quotes(state) {
      return state.quotes;
    },
    design(state) {
      return state.design;
    }
  },
  modules: {}
});
