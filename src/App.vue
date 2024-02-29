<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <I18nDemo msg="Welcome to Your Vue.js App" />
</template>

<script>
import I18nDemo from './components/I18nDemo.vue';

export default {
  name: 'App',
  components: {
    I18nDemo
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
