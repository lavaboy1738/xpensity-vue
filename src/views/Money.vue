<template>
    <div>
        <Layout content-class="layout">
            <Numpad @update:value="confirmAmount" @submit="addStatement" />
            <Types :type.sync="singleStatement.type"/>
            <Comments @update:value="updateComments" :value="singleStatement.comment"/>
            <TagsListing :data-source="tags" :newTags.sync="newTags" @update:selectedTag = "updateSelectedTag"/>
        </Layout>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";
    import Layout from "../components/layout.vue";
    import Numpad from "../components/Numpad.vue";
    import TagsListing from "../components/TagsListing.vue";
    import Types from "../components/Types.vue";
    import Comments from "../components/Comments.vue";
    import tags from "@/constants/tags";
    // import store from "@/store/index2";

    window.localStorage.setItem("XpensityVersion", "0.0.1");


    @Component({
        components: {
            Layout,
            Numpad,
            TagsListing,
            Types,
            Comments
        },
    })
    export default class Money extends Vue {
        get newTags(){
            return this.$store.state.tagList;
        }
        get statements(){
            return this.$store.state.statementList;
        }

        singleStatement: Statement = {
            tag: "",
            comment: "",
            type: "-",
            amount: 0,
            createdAt: undefined
        }

        created(){
            this.$store.commit("fetchStatements");
        }

        tags = tags;

        updateSelectedTag(selectedTag: string){
            this.singleStatement.tag = selectedTag;
        }
        updateComments(comments: string){
            this.singleStatement.comment = comments;
        }
        confirmAmount(num: string){
            this.singleStatement.amount = Number(num);
        }
        addStatement(){
            if(!this.singleStatement.tag || this.singleStatement.tag.length === 0){
                return window.alert("Please Pick A Tag");
            }
            this.$store.commit("createStatement", this.singleStatement);
            this.singleStatement.comment = ""
        }

        // @Watch("statements")
        // onStatementsChange(){
        //     statementList.save();
        // }
    }
</script>

<style lang="scss">
    .layout {
        display: flex;
        flex-direction: column-reverse;
        flex-wrap: nowrap;
    }
</style>

<style lang="scss" scoped>

</style>