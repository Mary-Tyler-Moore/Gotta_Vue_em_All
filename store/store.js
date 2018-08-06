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
          let obj = {};
          for (let i = 0; i < data.length; i++) {
            obj[data[i].id] = data[i];
          }
          state.pokemon = obj;
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