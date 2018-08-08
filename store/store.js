import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    pokemon: ['test'],
  },
  mutations: {
    fetchAllPokemon: (state) => {
      axios
        .get(`/api/pokemon`)
        .then(({ data }) => {
          state.pokemon = data;
        })
        .catch(err => console.error(err))
    },
    updateStorePokemon: (state, payload) => {
      state.pokemon.push(payload);
    }
  }
})