import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { url } from '../config';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    pokemon: [],
  },
  mutations: {
    fetchCaughtPokemon: () => {
      axios
        .get(`${url}/api/pokemon`)
        .then(result => {
          console.log('this is the result', result)
        })
        .catch(err => console.error(err))
    }
  }
})