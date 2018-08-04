<template>
  <div id="pokemonDisplay" class="flexCenter flexColumn">
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

</style>