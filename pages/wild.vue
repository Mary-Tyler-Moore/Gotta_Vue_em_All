<template>
  <div id="wild" class="flexCenter page flexColumn">
    <div v-if="message">
      <h2>{{ message }}</h2>
    </div>
    <transition name="scale" mode="out-in">
      <div key="1" v-if="!swapDisplay" @click="attemptCatch" class="flexCenter flexColumn pokemonDisplay">
        <PokemonDisplay 
        :img="allPokemon[randomIndex].img"/>
        <div>{{ allPokemon[randomIndex].name }}</div>
      </div>
      <div key="2" v-else class="pokeball flexCenter">
        <div class="pokeball2 flexCenter">
          <div class="pokeLine flexCenter">
            <div class="pokeButton flexCenter">
              <div class="innerPokeButton">
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import PokemonDisplay from '../components/PokemonDisplay.vue';
  import { store } from '../store/store.js';
  import { url } from '../config.js';
  import axios from 'axios';

  export default {
    name: 'wild',
    components: {
      PokemonDisplay,
    },
    created() {
      console.log(this.storeLength);
      console.log(this.randomIndex);
    },
    store,
    data() {
      return {
        swapDisplay: false,
        message: null,
        storeLength: this.$store.state.pokemon.length,
        randomIndex: Math.floor(Math.random() * this.$store.state.pokemon.length),
      }
    },
    computed: {
      allPokemon() {
        return this.$store.state.pokemon;
      },
    },
    methods: {
      attemptCatch() {
        let chance = Math.random() * 1;
        if (chance > 0.60) {
          axios
            .put(`${url}/api/caught`, { pokemonId: this.$store.state.pokemon[this.randomIndex].id })
            .then(() => {
              this.updateMessage(1);
            })
            .catch(err => console.error(err));
        } else {
          this.updateMessage();
        }
        this.toggle();
      },
      toggle() {
        this.swapDisplay = !this.swapDisplay;
      },
      updateIndex() {
        this.randomIndex = Math.floor(Math.random() * this.storeLength);
      },
      updateMessage(success) {
        let msg = '';
        if (success) {
          msg = 'SUCCESS!!';
        } else {
          msg = 'IT RAN AWAY!!';
        }

        setTimeout(() => {
          this.message = msg;
          setTimeout(() => { 
            this.message = null;
            this.toggle();
            this.updateIndex();
          }, 5000);
        }, 7000);
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

  .scale-enter-active, .scale-leave-active {
    transition: transform 1s;
  }

  .scale-enter, .scale-leave-to {
    transform: scale(0.1);
  }

  .pokeball {
    background-color: white;
    border: 1px solid black;
    border-radius: 100%;
    height: 100px;
    width: 100px;
    animation: ballshake 0.7s 1s alternate 6;
  }

  .pokeball2 {
    background-color: red;
    border-radius: 100%;
    height: 100%;
    width: 100%;
  }

  .pokeLine {
    background-color: white;
    border: 1px solid black;
    width: 100%;
    height: 15%;
    transform:rotate(-10deg); 
  }

  .pokeButton {
    border: 1px solid black;
    background-color: white;
    border-radius: 100%;
    height: 220%;
    width: 30%;
  }

  .innerPokeButton {
    border: 1px solid black;
    border-radius: 100%;
    height: 90%;
    width: 90%;
  }

  @keyframes ballshake {
    100% { 
      -webkit-transform: rotate(360deg); 
      transform:rotate(20deg); 
    }
  }

</style>