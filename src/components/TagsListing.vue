<template>
    <div class="tags">
        <ul class="current-tags">
            <li class="tag" 
            v-for="tag in dataSource" :key="tag"
            @click="select(tag)" :class="selectedTag === tag? 'selected':''"><i :class="`fas ${tag}`"></i></li>
            <li class="tag new-tag">
                <button>
                    <i class="fas fa-plus"></i>
                </button>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component, Prop} from "vue-property-decorator";
    @Component
    export default class TagListing extends Vue {
        @Prop(Array) dataSource: string[] | undefined;
        selectedTag = "";
        select(tag: string){
            this.selectedTag = tag;
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";

    .tags {
        flex-grow: 1;
        overflow: auto;
        width: 100%;
        padding: 1em;

        .current-tags {
            font-weight: 300;
            display: flex;
            flex-wrap: wrap;

            .tag {
                height: 2em;
                width: 2em;
                font-size: 2em;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 0.5em;
                margin-right: 0.5em;
                background-color: lighten($primary-color, 10%);
            }

            .selected{
                color: white;
                background-color: darken($primary-color, 15%)
            }

            .new-tag {
                font-weight: 500;
                background-color: white;
                border: 2px solid darken($primary-color, 10%);
                outline: none;

                button {
                    outline: none;
                    color: darken($primary-color, 10%);
                    background: none;
                    border: none;
                }
            }
        }
    }
</style>