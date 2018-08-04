<template>
  <div id="pokemonMenu">
    <nuxt-link class="link" to="/">
      Home
    </nuxt-link>
    <nuxt-link class="link" to="/wild">
      Wild
    </nuxt-link>
  </div>
</template>

<style scoped>
#pokemonMenu {
  background-color: green;
  height: 5vh;
  width: 100%;
}

.link {
  color: white;
  font-weight: bold;
  justify-content: center;
  padding: 5px;
  text-decoration: none;
}

#pokemonMenu,
.link {
  align-items: center;
  display: flex;
}

</style>