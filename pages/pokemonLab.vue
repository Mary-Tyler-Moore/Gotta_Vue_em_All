<template>
  <div id="lab" class="page flexCenter">

    <div class="profOak flexCenter">
      <img height="450" width="192" src="https://pokemythology.net/conteudo/imgs/personagens/auxilio/p_prof.gif" alt="professor oak" />
      <div v-if="profOakMessage" class="oakMessage">
        <p>
          Welcome!  I'm Professor Oak and I study Pokemon for a living.  I was hoping you can help me.
          I spend all my time working in the lab, helping new trainers, and discovering new ways to
          improve our relationship with all pokemon.  I was hoping you can lend me a hand by providing me
          with information regarding new pokemon that you discovered on your journey.
        </p>
        <br/>
        <p>
          Please register any new pokemon in our latest invention, the Pokedex!
        </p>
      </div>
      <div v-else class="oakMessage">
        <p>
          Thank you for your hard work!  I'll start my research on this new pokemon right away!
        </p>
      </div>
    </div>

    <div class="pokedex" :style="{'backgroundImage': 'url(\'' + pokedex + '\')'}">
        <form class="newPokemonEntry">
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
  import { pokedex, url } from '../config.js'; 

  export default {
    data() {
      return {
        pokedex,
        profOakMessage: true,
      }
    },
    methods: {
      handleSubmit() {
        if (this.profOakMessage) {
          axios
            .post(`${url}/api/pokemon`)
            .then(({ data }) => {
              console.log('created pokemon data: ', data);

              //check what the data is, if it already exists, provided a failure message
              //otherwise, 
              this.profOakMessage = false;
              setTimeout(() => this.profOakMessage = true, 5000);
            })
            .catch(err => console.error(err))
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
    width: 30%;
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