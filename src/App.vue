<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import "./assets/base.scss";
@import "./assets/style.scss";

body {
  background-color : #f4f4f4;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $font-color;
  background-color : $default;
  padding-bottom: 80px;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
}
</style>
