<template>
    <div>
        <Layout content-class="layout">
            <Numpad @update:value="confirmAmount" @submit="addStatement" />
            <Types :type.sync="singleStatement.type"/>
            <Comments @update:value="updateComments" />
            <TagsListing :data-source="tags" :newTags.sync="newTags" @update:selectedTag = "updateSelectedTag"/>
        </Layout>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component, Watch} from "vue-property-decorator";
    import Layout from "../components/layout.vue";
    import Numpad from "../components/Numpad.vue";
    import TagsListing from "../components/TagsListing.vue";
    import Types from "../components/Types.vue";
    import Comments from "../components/Comments.vue";
    import statementList from "../models/statements.model";
    import tagList from "../models/taglist.model";

    window.localStorage.setItem("XpensityVersion", "0.0.1");
    
    const statements = statementList.fetch();

    @Component({
        components: {
            Layout,
            Numpad,
            TagsListing,
            Types,
            Comments
        }
    })
    export default class Money extends Vue {
        newTags = window.tagList;

        statements: Statement[] = statements;
        singleStatement: Statement = {
            tag: "",
            comment: "",
            type: "-",
            amount: 0,
            createdAt: undefined
        }

        tags = ['fa-utensils',
            'fa-shopping-cart',
            'fa-bus',
            'fa-home',
            'fa-tools',
            'fa-first-aid',
            'fa-piggy-bank',
            'fa-running',
            'fa-plane',
            'fa-paw',
            'fa-baby'
        ]

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
            statementList.create(this.singleStatement);
        }

        @Watch("statements")
        onStatementsChange(){
            statementList.save();
        }
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