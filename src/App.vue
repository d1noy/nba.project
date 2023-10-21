<template>
  <div class="background-image">
    <div class="container">
<NavComp/>
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
import NavComp from './components/NavComp.vue'

export default {
  name: 'App',
  components: {
    NavComp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: -10px;
  padding: 0;
}

.container{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.background-image {
  background-image: url('./assets/bg.jpg');
  background-repeat: no-repeat;
  background-size:auto;
  height: 100vh;

}
</style>
