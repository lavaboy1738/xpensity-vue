<template>
    <div class="layout-wrapper">
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
.layout-wrapper{
    display: flex;
    flex-direction: column;
    height: 88vh;
}

.content{
    overflow: auto;
    flex-grow: 1;
}
</style>