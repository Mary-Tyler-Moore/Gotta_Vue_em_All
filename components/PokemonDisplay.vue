<template>
  <div id="pokemonDisplay">
    <img :src="img" alt="pokemon image"/>
    <slot />
  </div>
</template>

<script>
  export default {
    props: ["img", "name"]
  }
</script>

<style scoped>
  #pokemonDisplay {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>