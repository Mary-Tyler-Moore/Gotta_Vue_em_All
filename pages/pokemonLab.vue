<template>
  <div id="lab" class="page flexCenter">

    <div class="profOak flexCenter">
      <img height="450" width="192" src="https://pokemythology.net/conteudo/imgs/personagens/auxilio/p_prof.gif" alt="professor oak" />
      <div class="oakMessage">
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
    </div>

    <div class="pokedex" :style="{'backgroundImage': 'url(\'' + pokedex + '\')'}">

    </div>
  </div>
</template>


<script>
  import { pokedex } from '../config.js'; 
  export default {
    data() {
      return {
        pokedex,
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

  .pokedex {
    background-repeat: no-repeat;
    background-size: contain;
    margin-right: 10%;
    height: 80%;
    width: 40%;
  }
</style>