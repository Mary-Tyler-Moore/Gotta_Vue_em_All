<template>
  <div id="wild" class="flexCenter page flexColumn">
    <PokemonDisplay 
      :img="this.$store.state.pokemon[index].img"/>
      <div>{{ this.$store.state.pokemon[index].name }}</div>
  </div>
</template>

<script>
  import { store } from '../store/store.js';
  import PokemonDisplay from '../components/PokemonDisplay.vue';

  export default {
    name: 'wild',
    components: {
      PokemonDisplay,
    },
    store,
    data() {
      return {

      }
    },
    computed: {
      index(){
        return Math.floor(Math.random() * this.$store.state.pokemon.length);
      }
    }
  }
</script>

<style scoped>
  #wild {
    background-image: url("https://orig00.deviantart.net/6661/f/2014/325/d/d/or_as_battle_background_1_by_phoenixoflight92-d83m36e.png");
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>