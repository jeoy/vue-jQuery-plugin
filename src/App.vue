<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'app',
    mounted() {

    },
};

</script>

<style>
@import "../lib/gridstack/css/gridstack.css";
@import "../lib/gridstack/css/gridstack-extra.css";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
