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
    import DefaultButton from "../components/DefaultButton.vue";

    @Component({
        components:{DefaultButton},
    })

    export default class EditTag extends Vue{
        get tag(){
            return this.$store.state.currentTag;
        }
        back(){
            this.$router.replace("/tags")
        }
        created(){
            const id = this.$route.params.id;
            this.$store.commit("fetchTags");
            this.$store.commit("setCurrentTag", id);
            if(!this.tag){
                this.$router.replace("/404")
            }
        }
        edit(){
            this.$store.commit("updateTag", this.tag);
        }
        remove(){
            this.$store.commit("removeTag", this.tag.id);
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