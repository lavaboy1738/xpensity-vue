<template>
    <ul class="tabs">
        <li v-for="item in dataSource" 
        :key="item.viewType" 
        :class="{selected: item.viewType === viewType}"
        @click="select(item)"
        >{{item.text}}</li>
    </ul>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component, Prop} from "vue-property-decorator";

    type DataSourceItem = {
        text: string;
        viewType: string;
    }

    @Component
    export default class Tabs extends Vue{
        @Prop({required: true, type: Array}) readonly dataSource!: DataSourceItem[];
        @Prop(String) readonly viewType!: string;

        select(item: DataSourceItem){
            this.$emit("update:viewType", item.viewType);
        }
    }
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

    .tabs {
        background-color: lighten($primary-color, 5%);
        display: flex;

        li {
            width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 2em;
            font-weight: 200;
            line-height: 2em;
            position: relative;
            overflow: hidden;

            &.selected{
                &::before{
                    position: absolute;
                    content: "";
                    height: 0.1em;
                    bottom: 0;
                    background-color: black;
                    animation: spread 0.3s ease-in forwards;
                }
            }
        }
    }

    @keyframes spread{
        0%{
            width: 0%;
            left: 50%;
        }
        40%{
            width: 0%;
            left: 50%;
        }
        100%{
            width: 100%;
            left: 0%;
        }
    }
</style>