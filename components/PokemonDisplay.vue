<template>
  <div id="pokemonDisplay" class="flexCenter flexColumn">
    <img :src="img" alt="pokemon image"/>
    <slot />
  </div>
</template>

<script>
  export default {
    props: ["img"]
  }
</script>

<style scoped>
  #pokemonDisplay {
    padding: 10px;
    margin: 10px;
  }

  img {
    filter: drop-shadow(10px 8px 7px #363434);
  }
</style>