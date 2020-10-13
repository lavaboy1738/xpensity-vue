<template>
            <div class="comments">
                <!-- <input type="text" placeholder="add comments" :value="value" @input="onInput"> -->
                <input type="text" placeholder = "add comments" v-model="value">
            </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Watch} from "vue-property-decorator";
    @Component
    export default class Comments extends Vue{
        value = "";
        // onInput(event: KeyboardEvent){
        //     const input = event.target as HTMLInputElement;
        //     this.value = input.value;
        // }
        @Watch("value")
        onValueChanged(value: string){
            this.$emit("update:value", value);
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";

    .comments {
        min-height: 4em;
        padding: 0 1.6em;
        background-color: lighten($primary-color, 16%);
        display: flex;

        input {
            font-size: 1.4em;
            padding: 0.7em 0;
            border: none;
            background: transparent;
            outline: none;
            flex-grow: 1;
        }
    }
</style>