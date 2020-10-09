<template>
    <div class="nav">
      <router-link to="/money" class="item" active-class="selected" ><i class="far fa-plus-square"></i></router-link>
      <router-link to="/tags" class="item" active-class="selected" ><i class="fas fa-list-ul"></i></router-link>
      <router-link to="/stats" class="item" active-class="selected" ><i class="far fa-chart-bar"></i></router-link>
    </div>
</template>

<script>
    export default {
        name: "Nav"
    }
</script>

<style lang="scss" scoped>
.nav{
    display: flex;
    box-shadow: 0 0 3px rgba(0,0,0,0.25);
    .item{
        width: 33.33333%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 5.6em;

        &.selected{
            background-color: #eeeeee
        }
    }
}
.fas, .far{
    font-size: 3.3em;
    color: #333333;
}
</style>