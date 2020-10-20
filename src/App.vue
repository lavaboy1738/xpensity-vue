<template>
  <div id="app">
    <router-view></router-view>
    <Intro>Xpensity</Intro>
  </div>
</template>

<script lang="ts">
import Intro from "./components/Intro.vue";
export default{
  name: "App",
  components: {Intro}
}
</script>

<style lang="scss">
@import "~@/assets/style/reset.scss";
@import "~@/assets/style/helper.scss";
#app {
  font-family: $primary-font;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $secondary-color;
}

</style>
