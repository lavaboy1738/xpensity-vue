<template>
    <div class="layout-wrapper" v-setHeight>
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