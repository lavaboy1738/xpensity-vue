<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";

@Component
export default class DefaultButton extends Vue{

}
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";
    .button{
        padding: 0.3em 1em;
        font-size: 1.6em;
        font-weight: 400;
        color: white;
        border: none;
        border-radius: 0.3em;
        outline: none;
        background: darken($primary-color, 10%);
    }
</style>