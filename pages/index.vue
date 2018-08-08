<template>
  <div id="home" class="flexCenter flexColumn page">
    <FilterContainer 
      :filterTypes="filterTypes" 
      @changeFilterType="filterType = $event"
      @changeFilterOrder="filterOrder = $event"/>
    <div v-if="filteredPokemon" class="flexCenter wrap">
      <div v-for="pokemon in filteredPokemon" :key="pokemon.id" class="flexCenter">
        <PokemonDisplay :img="pokemon.img" class="homePokemonDisplay">
          <p>ID: {{ pokemon.id }}</p>
          <p>Name: {{ pokemon.name }}</p>
          <p>Type: {{ pokemon.type }}</p>
          <p>Caught: {{ pokemon.caught }}</p>
        </PokemonDisplay>
      </div>
    </div>
    <div v-else class="noCaught flexCenter">
      You have no pokemon.  Go to the wild and catch some!
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
        this.caughtPokemon = data;
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
      filterType: 'name',
      filterOrder: 'desc',
    }
  },
  computed: {
    filteredPokemon() {
      if (this.caughtPokemon && this.caughtPokemon.length > 0) {
        let copy = this.caughtPokemon.slice();
        if (this.filterOrder === 'desc') {
          if (this.filterType === 'id' || this.filterType === 'caught') {
            copy.sort((a,b) => a[this.filterType] - b[this.filterType]);
          } else {
            copy.sort((a,b) => a[this.filterType].charCodeAt(0) - b[this.filterType].charCodeAt(0));
          }
        } else {
          if (this.filterType === 'id' || this.filterType === 'caught') {
            copy.sort((a,b) => b[this.filterType] - a[this.filterType]);
          } else {
            copy.sort((a,b) => b[this.filterType].charCodeAt(0) - a[this.filterType].charCodeAt(0));
          }
        }
        return copy;
      }

      return false;
    }
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
    overflow: scroll; 
  }

  .homePokemonDisplay {
    border: 1px solid black;
    background-color: white;
  }

  .noCaught {
    background-color: white;
    font-size: 2em;
    font-weight: bold;
    height: 20vh;
    width: 50vh;
    text-align: center;
  }
</style>