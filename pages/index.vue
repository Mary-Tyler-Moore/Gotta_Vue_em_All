<template>
  <div id="home" class="flexColumn page">
    <FilterContainer 
      :filterTypes="filterTypes"
      :filterByTypeOptions="filterByTypeOptions" 
      @changeFilterTypeOption="filterByType = $event"
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

export default {
  name: 'home',
  store,
  beforeMount: function() {
    axios
      .get(`/api/caught`)
      .then(({data}) => {
        let hist = {}

        for (let i = 0; i < data.length; i++) {
          let { type } = data[i];
          if (!hist[type]) {
            hist[type] = true;
            this.filterByTypeOptions.push(type);
          }
        }
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
      filterByTypeOptions: ['all'],
      filterTypes: ["id", "name", "caught"],
      filterType: 'name',
      filterOrder: 'desc',
      filterByType: 'all',
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

        if (this.filterByType !== 'all') {
          return copy.filter(a => a.type === this.filterByType);
        } else {
          return copy;
        }
      }

      return false;
    }
  },
}

</script>

<style scoped>
  #home {
    background-image: url("http://images5.fanpop.com/image/photos/30700000/pokemon-pokemon-30772391-500-461.png");
    display: flex;
    align-items: center;
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