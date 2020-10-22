<template>
    <div>
        <Layout>
            <Types class="top-nav" :type.sync="type"></Types>
            <Tabs :data-source="array" :viewType.sync="viewType" ></Tabs>
        </Layout>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Layout from "../components/layout.vue";
    import Types from "../components/Types.vue";
    import Tabs from "../components/Tabs.vue";
    import {Component} from "vue-property-decorator";
    @Component({
        components:{
            Layout,
            Types,
            Tabs
        }
    })
    export default class Stats extends Vue{
        type="-";
        viewType = "day";
        array=[
            {text:"Day", viewType:"day"},
            {text:"Week", viewType:"week"},
            {text:"Month", viewType:"month"},
        ];
    }
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
    .top-nav ::v-deep li{
        background-color: lighten($primary-color, 10%);
        &::after{
            height: 100% !important;
            background-color: $primary-color !important;
            z-index: 1 !important;
        }
    }
</style>