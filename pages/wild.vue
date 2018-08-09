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
      <div key="2" v-else class="pokeball">
        <div class="pokeTop flexCenter">
          <div class="pokeButton flexCenter">
            <div class="innerPokeButton">
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
  import axios from 'axios';

  export default {
    name: 'wild',
    components: {
      PokemonDisplay,
    },
    store,
    data() {
      return {
        swapDisplay: false,
        message: null,
        storeLength: this.$store.state.pokemon.length,
        randomIndex: Math.floor(Math.random() * this.$store.state.pokemon.length),
        throttle: false,
      }
    },
    computed: {
      allPokemon() {
        return this.$store.state.pokemon;
      },
    },
    methods: {
      attemptCatch() {
        if (!this.throttle) {
          this.throttle = !this.throttle;
          this.toggle();
          let chance = Math.random() * 1;
          const { id, name, type, img } = this.$store.state.pokemon[this.randomIndex];
          if (chance > 0.60 && id && name && type && img) {
            axios
              .put(`/api/caught`, { id, name, type, img })
              .then(() => {
                this.updateMessage(1);
              })
              .catch(err => console.error(err));
          } else {
            this.updateMessage();
          }
          this.throttle = !this.throttle;
        }
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
          }, 3000);
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
    filter: drop-shadow(0px 10px 7px #363434);
    overflow-y: hidden;
    overflow-x: hidden;
  }

  .pokeTop {
    transform: rotate(-10deg);
    background: linear-gradient( #e53935 0%, #e53935 45%, #000000 45%, #000000 55%, #fff 55%, #fff 100%);
    border-radius: 100% 100% 0 0;
    height: 100%;
    width: 100%;
  }

  .pokeButton {
    border: 5px solid black;
    background-color: white;
    border-radius: 100%;
    height: 33%;
    width: 31%;
  }

  .innerPokeButton {
    border: 1px solid black;
    border-radius: 100%;
    height: 85%;
    width: 85%;
  }

  @keyframes ballshake {
    100% { 
      -webkit-transform: rotate(360deg); 
      transform:rotate(20deg); 
    }
  }

</style>