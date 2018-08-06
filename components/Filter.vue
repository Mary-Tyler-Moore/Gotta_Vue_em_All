<template>
  <div id="filterContainer">
    <select>
      <option selected disabled>type</option>
      <option v-for="type in filterTypes" :key="type" :value="type">{{ type }}</option>
    </select>
    <select>
      <option selected disabled>order</option>
      <option value="desc">decending</option>
      <option value="asce">ascending</option>
    </select>
  </div>
</template>

<script>
  export default {
    props: ["filterTypes"]
  }
</script>

<style scoped>
  #filterContainer {
    background-color: white;
    height: 5vh;
    width: 80%;
    margin-top: 10px;
  }
</style>