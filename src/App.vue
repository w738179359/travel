<template>
  <div id="app">
     <keep-alive exclude="Detail"> <!-- 保证页面切换回来是不会重新发送请求 ,exclude属性可以排除缓存的组件 -->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
