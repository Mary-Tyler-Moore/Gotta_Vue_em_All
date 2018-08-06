<template>
  <div id="home" class="flexCenter flexColumn page">
    <FilterContainer :filterTypes="filterTypes"/>
    <div class="flexCenter wrap">
      <div v-if="caughtPokemon" v-for="pokemon in allPokemon" :key="pokemon.id" class="flexCenter">
        <PokemonDisplay v-if="caughtPokemon[pokemon.id]" :img="pokemon.img" class="homePokemonDisplay">
          <p>ID: {{ pokemon.id }}</p>
          <p>Name: {{ pokemon.name }}</p>
          <p>Type: {{ pokemon.type }}</p>
          <p>Caught: {{ caughtPokemon[pokemon.id].caught }}</p>
        </PokemonDisplay>
      </div>
      <div v-else>
        You have no pokemon.  Go to the wild and catch some!
      </div>
    </div>
  </div>
</template>

<script>
import PokemonDisplay from '../components/PokemonDisplay';
import FilterContainer from '../components/Filter';
import axios from 'axios';
import { store } from '../store/store.js';
import { url } from '../config.js';

export default {
  name: 'home',
  store,
  beforeMount: function() {
    axios
      .get(`${url}/api/caught`)
      .then(({data}) => {
        let obj = {};
        for (let i = 0; i < data.length; i++) {
          obj[data[i].pokemonId] = data[i];
        }
        this.caughtPokemon = obj;
      })
      .catch(err => console.error(err));
  },
  components: {
    PokemonDisplay,
    FilterContainer,
  },
  data() {
    return {
      text: 'Hello from Home',
      caughtPokemon: null,
      filterTypes: ["id", "name", "caught"],
      filterType: '',
      filterOrder: 'desc',
    }
  },
  computed: {
    allPokemon() {
      return this.$store.state.pokemon;
    },
  },
}

</script>

<style scoped>
  #home {
    background-image: url("http://images5.fanpop.com/image/photos/30700000/pokemon-pokemon-30772391-500-461.png");
    overflow: scroll; 
  }

  .wrap {
    flex-wrap: wrap;
  }

  .homePokemonDisplay {
    border: 1px solid black;
    background-color: white;
  }
</style>