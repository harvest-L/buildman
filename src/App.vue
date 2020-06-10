<!--
 * @Author: flyharvest
 * @Date: 2020-04-21 11:30:29
 * @LastEditTime: 2020-06-08 15:52:36
 * @LastEditors: flyharvest
--> 
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <Contanier :isActive="true"></Contanier>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Contanier from './components/Contanier'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Contanier
  },
  data () {
    return {
      // contanier: 'App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
