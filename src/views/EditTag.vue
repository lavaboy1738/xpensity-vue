<template>
    <Layout>
        edit tag
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component} from "vue-property-decorator";
    import tagList from "@/models/taglist.model";
    @Component
    export default class EditTag extends Vue{
        created(){
            const id = this.$route.params.id
            tagList.fetch();
            const savedTags = tagList.data;
            const tag = savedTags.filter(tag=> tag.id === id)[0]
            if(tag){
                console.log(tag);
            }else{
                this.$router.replace("/404")
            }
        }
    }
</script>

<style scoped>

</style>