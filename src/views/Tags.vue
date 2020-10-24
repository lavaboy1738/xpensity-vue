<template>
    <div>
        <Layout>
            <div class="top-nav">Custom Tags</div>
            <div class="tag-list" v-if="this.savedTags.length>0">
                <router-link 
                :to="`/tags/edit/${tag.id}`"
                v-for="tag in savedTags" 
                :key="tag.id" 
                class="tag"> 
                    <span>{{tag.name}}</span> 
                    <i class="fas fa-chevron-right"></i>
                </router-link>
            </div>
            <div class="no-tags" v-else>No Custom Tags</div>
            <div class="button-wrapper">
                <DefaultButton @click.native="createTag">New Tag</DefaultButton>
            </div>
        </Layout>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";
    import {mixins} from "vue-class-component";
    import Layout from "../components/layout.vue";
    import DefaultButton from "../components/DefaultButton.vue";
    import {TagHelper} from "@/mixins/TagHelper";


    @Component({
        components:{
            Layout,
            DefaultButton
        },
    })
    export default class Tags extends mixins(TagHelper){
        get savedTags () {
            return this.$store.state.tagList;
        }
        created(){
            this.$store.commit("fetchTags");
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
        background-color: white;
    }
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

    .no-tags{
            font-size: 1.2rem;
            font-weight: 200;
            text-align: center;
            margin-top: 10rem;
            opacity: 0.6;
    }

    .button-wrapper{
        text-align: center;
        margin-top: 4em;
    }
</style>