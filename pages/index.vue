<template>
  <div>
    {{ text }}
  </div>
</template>

<script>
import pokemonDisplay from '../components/PokemonDisplay';

export default {
  name: 'home',
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

