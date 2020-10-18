<template>
    <div>
        <Layout>
            <ol class="tag-list">
                <li v-for="tag in savedTags" :key="tag.id" class="tag"> <span>{{tag.name}}</span> <i class="fas fa-chevron-right"></i></li>
            </ol>
            <div class="button-wrapper">
                <button class="new-tag" @click="createTag">New Tag </button>
            </div>
        </Layout>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";
    import tagList from "@/models/taglist.model";
    import Layout from "../components/layout.vue";

    tagList.fetch();

    @Component({
        components:{Layout}
    })
    export default class Tags extends Vue{
        savedTags = tagList.data;

        createTag(){
            const tagName = window.prompt("New Tag Name");
            if(tagName){
                const message = tagList.create(tagName);
                if(message==="duplicated"){
                    window.alert("Duplicated Tag Name")
                }
            }else{
                window.alert("Tag Name Cannot Be Empty")
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";
    .tag-list{
        background-color: white;
        font-size: 1.6em;
        li{
            min-height: 2.5em;
            border-bottom: 1px solid #e6e6e6;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 1em;
        }
        i{
            color: $primary-color;
        }
    }

    .button-wrapper{
        text-align: center;
        margin-top: 4em;
        .new-tag{
        padding: 0.3em 1em;
        font-size: 1.6em;
        font-weight: 400;
        color: white;
        border: none;
        border-radius: 0.3em;
        outline: none;
        background: darken($primary-color, 10%);
    }
    }
</style>