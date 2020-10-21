<template>
    <div class="layout-wrapper" ref="setHeight">
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
    mounted(){
        this.$refs.setHeight.height = window.innerHeight;
    }
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