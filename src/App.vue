<template>
  <div id="app">
      <h3>这是主页</h3>
      <router-link to="/home">访问home组件</router-link>
      <router-link to="/user">访问user组件</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
