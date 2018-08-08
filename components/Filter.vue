<template>
  <div id="filterContainer" class="flexCenter">
    <select @change="changeFilterType">
      <option selected disabled>type</option>
      <option v-for="type in filterTypes" :key="type" :value="type">{{ type }}</option>
    </select>
    <select @change="changeFilterOrder">
      <option selected disabled>order</option>
      <option value="desc">decending</option>
      <option value="asce">ascending</option>
    </select>
  </div>
</template>

<script>
  export default {
    props: ["filterTypes"],
    methods: {
      changeFilterType(e) {
        console.log(e.target.value)
        this.$emit('changeFilterType', e.target.value);
      },
      changeFilterOrder(e) {

        console.log(e.target.value)
        this.$emit('changeFilterOrder', e.target.value);
      }
    }
  }
</script>

<style scoped>
  #filterContainer {
    background-color: white;
    height: 5vh;
    width: 80%;
    margin-top: 10px;
  }

  #filterContainer select {
    margin-left: 5%;
    margin-right: 5%;
    font-size: 1em;
    height: 60%;
    width: 20%;
  }
</style>