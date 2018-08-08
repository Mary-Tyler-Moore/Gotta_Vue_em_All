<template>
  <div id="lab" class="page flexCenter">

    <div class="profOak flexCenter">
      <img height="450" width="192" src="https://pokemythology.net/conteudo/imgs/personagens/auxilio/p_prof.gif" alt="professor oak" />
      <div class="oakMessage">
        <p>{{ this.currentMessage }}</p>
      </div>
    </div>

    <div class="pokedex" :style="{'backgroundImage': 'url(\'' + process.env.POKEDEX + '\')'}">
        <form class="newPokemonEntry" @submit.prevent="handleSubmit">
          <input placeholder="id" />
          <input placeholder="name" />
          <input placeholder="type" />
          <input placeholder="image url" />
          <button type="submit">Send to the Professor</button>
        </form>
    </div>
  </div>
</template>


<script>
  import axios from 'axios';
  import { store } from '../store/store.js';

  export default {
    store,
    data() {
      return {
        pokedex,
        message: '',
        defaultMessage: `Welcome!  I'm Professor Oak and I study Pokemon for a living.  I was hoping you can help me.
          I spend all my time working in the lab, helping new trainers, and discovering new ways to
          improve our relationship with all pokemon.  I was hoping you can lend me a hand by providing me
          with information regarding new pokemon that you discovered on your journey.
          
          Please register any new pokemon in our latest invention, the Pokedex!
          `,
        successMessage: `Thank you for your hard work!  I'll start my research on this new pokemon right away!`,
        errorMessage: `Heyyy....I recognize that Pokemon.  Please only send new ones.`,
        invalidEntryMessage: `Please fill out all the fields before you submit`,
        throttleOn: false,
      }
    },
    computed: {
      currentMessage() {
        if (this.message) {
          return this.message;
        }
        return this.defaultMessage;
      }
    },
    methods: {
      handleSubmit(e) {
        const [ id, name, type, img ] = e.target.children;
        if (id.value > 0 && name.value.length > 0 && type.value.length > 0 && img.value.length > 0) {
          if (!this.throttleOn) {
            this.throttleOn = !this.throttleOn;
            let option = {
              id: Number(id.value),
              name: name.value,
              type: type.value,
              img: img.value,
            }

            axios
              .post(`/api/pokemon`, option)
              .then(({ data }) => {
                if (data.id) {
                  this.message = this.successMessage;
                  this.$store.commit('updateStorePokemon', data);
                  e.target.reset();
                } else {
                  this.message = this.errorMessage;
                }
                this.throttleOn = !this.throttleOn;
              })
              .catch(err => console.error(err))
          }
        } else {
          this.message = this.invalidEntryMessage;
        }

      }
    }
  }

</script>



<style scoped>
  #lab {
    background-image: url("https://orig00.deviantart.net/ce7f/f/2012/227/6/d/professor_oak__s_lab_by_rosegardeninhell-d5b7ktm.jpg");
    background-size: cover;
    background-repeat: no-repeat;
  }

  .profOak {
    width: 40%;
  }

  .oakMessage {
    background-color: white;
    border-radius: 0 10% 10% 10%;
    margin-top: 5%;
    padding: 10px;
    width: 40%;
    white-space: pre-line;
  }

  .newPokemonEntry {
    position: relative;
    top: 180px;
    left: 70px;
    width: 300px;
  }

  .newPokemonEntry input {
    font-size: 25px;
    height: 35px;
    width: 270px;
    text-align: center;
  }

  .newPokemonEntry button {
    height: 25px;
    background-color: #BE2727;
    border: 1px solid black;
    border-radius: 20px;
    box-shadow: 3px 3px 3px grey;
    font-weight: bold;
    margin-top: 1px;
    margin-left: 70px;
  }

  .newPokemonEntry button:hover {
    background-color: #F60808;
  }

  .pokedex {
    background-repeat: no-repeat;
    background-size: contain;
    margin-right: 10%;
    height: 600px;
    width: 500px;
  }
</style>