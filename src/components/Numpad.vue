<template>
    <div class="numpad">
        <div class="display-number">{{this.output}}</div>
        <div class="numpad-buttons">
            <button class="numpad-button" @click="inputNum" >1</button>
            <button class="numpad-button" @click="inputNum" >2</button>
            <button class="numpad-button" @click="inputNum" >3</button>
            <button class="numpad-button" @click="deleteNum()" >Del.</button>
            <button class="numpad-button" @click="inputNum" >4</button>
            <button class="numpad-button" @click="inputNum" >5</button>
            <button class="numpad-button" @click="inputNum" >6</button>
            <button class="numpad-button" @click="clearNum()" >C</button>
            <button class="numpad-button" @click="inputNum" >7</button>
            <button class="numpad-button" @click="inputNum" >8</button>
            <button class="numpad-button" @click="inputNum" >9</button>
            <button class="numpad-button ok" @click="ok">OK</button>
            <button class="numpad-button zero" @click="inputNum" >0</button>
            <button class="numpad-button dot" @click="inputNum" >.</button>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component} from "vue-property-decorator";
    @Component
    export default class Numpad extends Vue{
        output = "0";
        inputNum(event: MouseEvent){
            const button = (event.target as HTMLButtonElement);
            const input = button.textContent;
            if(this.output.length === 10){return}
            if ( this.output === "0") {
                if("0123456789".indexOf(input) >= 0){
                    this.output = input;
                }else{
                    this.output += input;
                }
                return;
            }
            if(this.output.indexOf(".")>=0 && input === "."){return}
            this.output += input;
        }

        deleteNum(){
            if(this.output.length === 1){
                this.output = "0";
            }else{
                this.output = this.output.slice(0,-1);
            }
        }

        clearNum(){
            this.output = "0";
        }

        ok(){
            this.$emit("update:value", this.output);
            this.$emit("submit", this.output);
            this.output="0";
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";
    .numpad {
        .display-number {
            height: 1.58em;
            font-size: 3.6em;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            line-height: 1.6em;
            padding-left: 1rem;
            padding-right: 1rem;
            text-align: right;
            @extend %inwardShadow;
        }

        .numpad-buttons {
            @extend %clearfix;

            .numpad-button {
                width: 25vw;
                background: transparent;
                border: none;
                font-size: 3em;
                font-weight: 200;
                height: 4rem;
                outline: none;

                &.ok {
                    color: #666;
                    float: right;
                    height: 8rem;
                    font-weight: 400;
                }

                &.zero {
                    width: 50vw;
                }

                &.dot {
                    font-weight: 400;
                }

                &:nth-child(1) {
                    background: lighten($primary-color, 16%);
                }

                &:nth-child(2),
                &:nth-child(5) {
                    background: lighten($primary-color, 13%);
                }

                &:nth-child(3),
                &:nth-child(6),
                &:nth-child(9) {
                    background: lighten($primary-color, 10%);
                }

                &:nth-child(4),
                &:nth-child(7),
                &:nth-child(10) {
                    background: lighten($primary-color, 8%);
                }

                &:nth-child(8),
                &:nth-child(11),
                &:nth-child(13) {
                    background: lighten($primary-color, 5%);
                }

                &:nth-child(12) {
                    background: darken($primary-color, 2%);
                }

                &:nth-child(14) {
                    background: lighten($primary-color, 2%);
                }
            }
        }
    }
</style>