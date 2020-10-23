<template>
    <div>
        <Layout>
            <div class="wrapper">
                <Types class="top-nav" :type.sync="type"></Types>
                <Tabs :data-source="viewTypes" :viewType.sync="viewType" ></Tabs>
                <div class="details">
                    <ul>
                        <li v-for="(date, index) in results()" :key="index">
                            <div class="date">{{convertDate(index)}}</div>
                            <div v-for="(item, index) in date" :key="index" class="records">
                                <div v-if="index==='original'">
                                    <ul>
                                        <li v-for="(record, index) in item" :key="index" class="record">
                                            <i class="original-tag" :class="`fas ${record.tag}`"></i>
                                            <span class="comments">{{record.comment}}</span>
                                            <span class="amount">${{record.amount}}</span>
                                        </li>
                                    </ul>
                                </div>
                                <div v-else>
                                    <ul>
                                        <li v-for="(record, index) in item" :key="index" class="record">
                                            <span class="custom-tag">{{record.tag.name}}</span>
                                            <span class="comments">{{record.comment}}</span>
                                            <span class="amount">${{record.amount}}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </Layout>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Layout from "../components/layout.vue";
    import Types from "../components/Types.vue";
    import Tabs from "../components/Tabs.vue";
    import {Component} from "vue-property-decorator";
    import viewTypes from "@/constants/viewtypes.ts";
    import dayjs from "dayjs";

    type SplitByDate = {
        groupType: string;
        value: Statement[]|[];
    }

    const oneDay = 86400*1000;

    @Component({
        components:{
            Layout,
            Types,
            Tabs
        },
    })

    export default class Stats extends Vue{
        get statements(){
            return (this.$store.state as RootState).statementList;
        }

        type="-";
        viewType = "day";
        viewTypes = viewTypes;

        created(){
            this.$store.commit("fetchStatements");
        }

        convertDate(string: string){
            const day = dayjs(string);
            const now = new Date();
            if(day.isSame(now, "day")){
                return "Today";
            }else if(day.isSame(now.valueOf() - oneDay, "day")){
                return "Yesterday";
            }else if(day.isSame(now, "year")){
                return day.format("MMM DD");
            }else{
                return day.format("YYYY/MM/DD");
            }
        }

        results(){
            const statements = this.statements;
            const prepHashTable: {[key: string]: Statement[]} = {};
            const finalHashTable: {[key: string]: SplitByDate[]} = {};
            for(let i = 0; i<this.statements.length; i++){
                const [date, time] = statements[i].createdAt.split("T");
                prepHashTable[date] = prepHashTable[date] || [];
                prepHashTable[date].push(statements[i]);
            }
            for(const date in prepHashTable){
                finalHashTable[date] = {"original":[], "added":[]};
                for(const item in prepHashTable[date]){
                    if(typeof prepHashTable[date][item].tag === "string"){
                        finalHashTable[date]["original"].push(prepHashTable[date][item]);
                    }else{
                        finalHashTable[date]["added"].push(prepHashTable[date][item]);
                    }
                }
            }
            return finalHashTable;
        }
    }
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
    .wrapper{
        display: flex;
        flex-direction: column;
        .top-nav ::v-deep li{
            background-color: lighten($primary-color, 10%);
            &::after{
                height: 100% !important;
                background-color: $primary-color !important;
            }
        }
        .details{
            flex-grow: 1;
            .date{
                padding: 0 1rem;
                line-height: 2rem;
                height: 2rem;
                font-weight: 300;
                font-size: 1.2rem;
                background-color: lighten($primary-color, 12%);
            }
            .records{
                padding: 0 1rem;
                .record{
                    height: 1.7rem;
                    line-height: 1.7rem;
                    font-size: 1rem;
                    font-weight: 300;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    .fas, .custom-tag{
                        width: 3rem;
                        margin-right: 1rem;
                    }
                    .comments{
                        flex-grow: 1;
                        font-weight: 200;
                        opacity: 0.7;
                        overflow: hidden;
                        max-height: 1.7rem;
                    }
                    .custom-tag{
                        overflow: hidden;
                    }
                    .amount{
                        margin-left: 1rem;
                    }
                }
            }
        }
    }
</style>