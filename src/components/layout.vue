<template>
    <div class="layout-wrapper" :style="{height: `${height}px`}">
        <div class="content" :class="contentClass">
            <slot/>
        </div>
        <Nav/>
    </div>
</template>

<script lang="ts">
import Nav from "./Nav.vue";
export default {
    name: "Layout",
    components: {Nav},
    props:["contentClass"],
    data(){
        return {
            height: window.innerHeight
        }
    }
}
</script>

<style lang="scss" scoped>
.layout-wrapper{
    display: flex;
    flex-direction: column;
}

.content{
    overflow: auto;
    flex-grow: 1;
}
</style>