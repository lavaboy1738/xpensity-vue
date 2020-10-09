<template>
    <div class="nav">
      <router-link to="/money" ><i class="fas fa-plus"></i></router-link>
      |
      <router-link to="/tags" ><i class="fas fa-list"></i></router-link>
      |
      <router-link to="/stats" ><i class="fas fa-chart-bar"></i></router-link>
    </div>
</template>

<script>
    export default {
        name: "Nav"
    }
</script>

<style lang="scss" scoped>

</style>