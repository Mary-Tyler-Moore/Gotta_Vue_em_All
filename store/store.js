import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { url } from '../config';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    pokemon: ['test'],
  },
  mutations: {
    fetchAllPokemon: (state) => {
      axios
        .get(`${url}/api/pokemon`)
        .then(({ data }) => {
          state.pokemon = data;
        })
        .then( () => console.log(state.pokemon))
        .catch(err => console.error(err))
    },
    fetchCaughtPokemon: () => {
      axios
        .get(`${url}/api/caught`)
        .then((result) => {
          console.log('this is the caught result', result)
        })
        .catch(err => console.error(err))
    }
  }
})