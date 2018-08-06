<template>
  <div id="home" class="flexCenter page">
    <div v-if="caughtPokemon" v-for="caught in caughtPokemon" :key="caught.pokemonId" class="flexCenter">
      <PokemonDisplay :img="allPokemon[caught.pokemonId].img" class="homePokemonDisplay">
        <p>ID: {{ allPokemon[caught.pokemonId].id }}</p>
        <p>Name: {{ allPokemon[caught.pokemonId].name }}</p>
        <p>Type: {{ allPokemon[caught.pokemonId].type }}</p>
        <p>Caught: {{ caught.caught }}</p>
      </PokemonDisplay>
    </div>
    <div v-else>
      You have no pokemon.  Go to the wild and catch some!
    </div>
  </div>
</template>

<script>
import PokemonDisplay from '../components/PokemonDisplay';
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
        this.caughtPokemon = data;
      })
      .catch(err => console.error(err));
  },
  components: {
    PokemonDisplay,
  },
  data() {
    return {
      text: 'Hello from Home',
      caughtPokemon: null,
    }
  },
  computed: {
    allPokemon() {
      return this.$store.state.pokemon;
    }
  }
}

</script>

<style scoped>
  #home {
    background-image: url("http://images5.fanpop.com/image/photos/30700000/pokemon-pokemon-30772391-500-461.png");
    flex-wrap: wrap;
    overflow: scroll; 
  }

  .homePokemonDisplay {
    border: 1px solid black;
    background-color: white;
  }
</style>