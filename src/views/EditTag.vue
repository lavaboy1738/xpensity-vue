<template>
    <Layout>
        <div class="top-nav">
            <i class="fas fa-chevron-left" @click="back"></i>
            <span class="title">Edit Tag</span>
            <span class="right"></span>
        </div>
        <div class="tag-info">
            <span class="left">Tag Name: </span>
            <span class="tag-name">{{this.tag.name}}</span>
        </div>
        <div class="button-wrapper">
            <DefaultButton @click.native="edit">Edit Tag</DefaultButton>
            <DefaultButton @click.native="remove">Remove</DefaultButton>
        </div>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component} from "vue-property-decorator";
    import tagList from "@/models/taglist.model";
    import DefaultButton from "../components/DefaultButton.vue";

    @Component({components:{DefaultButton}})

    export default class EditTag extends Vue{
        tag?: {id: string; name: string} = undefined;
        back(){
            this.$router.replace("/tags")
        }
        created(){
            const id = this.$route.params.id
            tagList.fetch();
            const savedTags = tagList.data;
            const tag = savedTags.filter(tag=> tag.id === id)[0]
            if(tag){
                this.tag = tag;
            }else{
                this.$router.replace("/404")
            }
        }
        edit(){
            const id = this.$route.params.id
            const newTagName = window.prompt("New Tag Name");
            if(newTagName){
                const message = tagList.update(id, newTagName);
                if(message==="duplicated"){
                    window.alert("Duplicated Tag Name")
                }else{
                    // this.$router.back(); original methods, but if user access this page directly, it won't work
                    this.$router.replace("/tags");
                }
            }else{
                window.alert("Tag Name Cannot Be Empty");
            }
        }
        remove(){
            if(this.tag){
                tagList.remove(this.tag.id);
                // this.$router.back();
                this.$router.replace("/tags");
            }
        }
    }
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

    .top-nav{
        text-align: center;
        min-height: 2.2em;
        line-height: 2.2em;
        padding: 0 0.5em;
        font-size: 2em;
        border-bottom: 1px solid #e6e6e6;
        position: relative;
        background-color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        i{
            color: $primary-color;
            width: 1em;
            height: 1em;
        }
        .right{
            width: 1em;
            height: 1em;
        }
    }

    .tag-info{
        background-color: white;
        font-size: 2em;
        height: 2.75rem;
        font-weight: 300;
        margin-top: 1rem;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        border-bottom: 1px solid #e6e6e6;

        .left{
            padding: 0 1rem;
        }
    }
    .button-wrapper{
        text-align: center;
        margin-top: 4em;
        display: flex;
        justify-content: space-evenly;
    }
</style>