<template>
    <div class="nav-wrapper">
        <div class="content">
            <slot/>
        </div>
        <Nav/>
    </div>
</template>

<script lang="ts">
import Nav from "./Nav.vue";
export default {
    name: "Layout",
    components: {Nav}
}
</script>

<style lang="scss" scoped>
.nav-wrapper{
    // border: 5px solid red;
    display: flex;
    flex-direction: column;
    height: 100vh;
}

.content{
    // border: 5px solid blue;
    overflow: auto;
    flex-grow: 1;
}
</style>