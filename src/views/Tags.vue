<template>
    <div>
        <Layout>
            <div class="tag-list">
                <router-link 
                :to="`/tags/edit/${tag.id}`"
                v-for="tag in savedTags" 
                :key="tag.id" 
                class="tag"> 
                    <span>{{tag.name}}</span> 
                    <i class="fas fa-chevron-right"></i>
                </router-link>
            </div>
            <div class="button-wrapper">
                <DefaultButton @click.native="createTag">New Tag</DefaultButton>
            </div>
        </Layout>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";
    import Layout from "../components/layout.vue";
    import DefaultButton from "../components/DefaultButton.vue";
    import store from '@/store/index2';

    @Component({
        components:{
            Layout,
            DefaultButton
        }
    })
    export default class Tags extends Vue{
        savedTags = store.tagList;

        createTag(){
            const tagName = window.prompt("New Tag Name");
            if(tagName){
                store.createTag(tagName);
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
        .tag{
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
    }
</style>