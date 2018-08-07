<template>
  <div id="home" class="flexCenter flexColumn page">
    <FilterContainer 
      :filterTypes="filterTypes" 
      @changeFilterType="filterType = $event"
      @changeFilterOrder="filterOrder = $event"/>
    <div class="flexCenter wrap">
      <div v-if="filteredPokemon" v-for="pokemon in filteredPokemon" :key="pokemon.id" class="flexCenter">
        <PokemonDisplay :img="pokemon.img" class="homePokemonDisplay">
          <p>ID: {{ pokemon.id }}</p>
          <p>Name: {{ pokemon.name }}</p>
          <p>Type: {{ pokemon.type }}</p>
          <p>Caught: {{ caughtPokemonData[pokemon.id].caught }}</p>
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
        this.caughtPokemonData = obj;
      })
      .then(() => {
        this.caughtPokemon = this.$store.state.pokemon.filter(poke => this.caughtPokemonData[poke.id]);
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
      caughtPokemonData: null,
      caughtPokemon: null,
      filterTypes: ["id", "name"],
      filterType: 'name',
      filterOrder: 'desc',
    }
  },
  computed: {
    filteredPokemon() {
      if (this.caughtPokemon) {
        let copy = this.caughtPokemon.slice();
        console.log('COPY: ', copy);
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

      return null;
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
  }

  .homePokemonDisplay {
    border: 1px solid black;
    background-color: white;
  }
</style>