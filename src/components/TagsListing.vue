<template>
    <div class="tags">
        <ul class="current-tags">
            <li class="tag" 
            v-for="tag in dataSource" :key="tag"
            @click="select(tag)" :class="selectedTag === tag? 'selected':''"><i :class="`fas ${tag}`"></i></li>
            <li class="new-tag"
            v-for="tag in tagList" :key="tag.id"
            @click="select(tag)" :class="selectedTag === tag? 'selected':''">{{tag.name}}</li>
            <li class="tag create-tag">
                <button @click="createTag">
                    <i class="fas fa-plus"></i>
                </button>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component, Prop, Watch} from "vue-property-decorator";
    import {TagHelper} from "@/mixins/TagHelper";
    import {mixins} from "vue-class-component";

    @Component({
        computed: {
            tagList(){
                return this.$store.state.tagList;
            }
        }
    })
    export default class TagListing extends mixins(TagHelper) {
        @Prop(Array) readonly dataSource: string[] | undefined;

        selectedTag = "";
        created(){
            this.$store.commit("fetchTags", this.$store.state);
        }
        select(tag: string){
            this.selectedTag = tag;
            this.$emit("selectedTag", this.selectedTag);
        }
        // createTag(){
        //     const tagName = window.prompt("New Tag Name");
        //     if(tagName){
        //         this.$store.commit("createTag", tagName);
        //     }else{
        //         window.alert("Tag Name Cannot Be Empty");
        //     }
        // }

        @Watch("selectedTag")
        onSelectedTagChanged(selectedTag: string){
            this.$emit("update:selectedTag", selectedTag)
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
                transition: 0.3s all ease-in;
            }

            .selected{
                color: white;
                background-color: darken($primary-color, 15%);
                transition: 0.3s all ease-in;
            }

            .create-tag {
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

            .new-tag{
                height: 2em;
                font-size: 2em;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 0.5em;
                margin-right: 0.5em;
                padding: 0 0.7em;
                background-color: lighten($primary-color, 10%);
                transition: 0.3s all ease-in;

                &.selected{
                    color: white;
                    background-color: darken($primary-color, 15%);
                    transition: 0.3s all ease-in;
                }
            }
        }
    }
</style>