<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <header>
    <!-- router-link 定义点击后导航到哪个路径下 -->
      <router-link to="/user">user(mock使用示例页面)</router-link><br/>
      <router-link to="/test01">test01</router-link><br>
      <router-link to="/test02">test02</router-link><br>
      <router-link to="/test03">test03</router-link><br>
      <router-link to="/test04">test04</router-link><br>
    </header>
    <!-- 对应的组件内容渲染到router-view中 -->
    <router-view></router-view>   
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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
  margin-top: 60px;
}
</style>
