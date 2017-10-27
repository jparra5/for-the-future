<template>
  <div id="app">
    <div id="header">
      <span>Our apps for funs</span>
    </div>
    <router-view id="bodyContent"/>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style scoped>
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}
#header {
  height: 40px;
  width: 100%;
  background-color: #213e6d;
}
span {
  color:white;
  font-size: 22px;
  line-height: 40px;
}
#bodyContent {
  background: white;
  background: radial-gradient(circle, #fff 20%, #ccc);
  flex-grow: 1;
}
</style>
