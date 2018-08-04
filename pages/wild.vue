<template>
  <div id="wild" class="flexCenter page flexColumn">
    <transition name="pokemonDisplay" mode="out-in">
      <div key="1" v-if="!swapDisplay" @click="attemptCatch" class="flexCenter flexColumn">
        <PokemonDisplay 
        :img="this.$store.state.pokemon[index].img"/>
        <div>{{ this.$store.state.pokemon[index].name }}</div>
      </div>
      <div key="2" v-else class="pokeball" @click="toggle">
      </div>
    </transition>
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
        index: Math.floor(Math.random() * this.$store.state.pokemon.length),
        swapDisplay: false,
      }
    },
    methods: {
      attemptCatch() {
        let chance = Math.random() * 1;
        if (chance > 0.60) {
          console.log('success');
        } else {
          console.log('failed');
        }
        
        this.index = Math.floor(Math.random() * this.$store.state.pokemon.length);
        this.toggle();
      },
      toggle() {
        this.swapDisplay = !this.swapDisplay;
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

  .pokemonDisplay-enter-active, .pokemonDisplay-leave-active {
    transition: transform 1s;
  }

  .pokemonDisplay-enter, .pokemonDisplay-leave-to {
    transform: scale(0.1);
  }

  .pokeball {
    background-color: white;
    border: 1px solid black;
    border-radius: 100%;
    height: 100px;
    width: 100px;
  }
</style>