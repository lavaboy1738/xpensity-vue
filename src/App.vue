<template>
  <div id="app">
    <div v-if="width < 500">
      <router-view></router-view>
      <Intro>Xpensity</Intro>
    </div>
    <div v-else>
      <Intro>Xpensity</Intro>
      <Desktop/>
    </div>
  </div>
</template>

<script lang="ts">
import Intro from "./components/Intro.vue";
import Desktop from "@/views/Desktop.vue";
export default{
  name: "App",
  components: {Intro, Desktop},
  data: function(){
    return {
      width : window.innerWidth
    }
  }
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
  touch-action: manipulation;
}

</style>
