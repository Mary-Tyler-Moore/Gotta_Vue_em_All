<template>
  <div>
    {{ text }}
  </div>
</template>

<script>
import pokemonDisplay from '../components/PokemonDisplay';
import store from '../store/store.js';

export default {
  name: 'home',
  store,
  beforeMount: () => {
    console.log('this is beforeMount in home')
  },
  components: {
    pokemonDisplay,
  },
  data() {
    return {
      text: 'Hello from Home'
    }
  },
  computed: {

  }
}


</script>