<template>
    <div>
        <Layout>
            <div class="wrapper">
                <Types class="top-nav" :type.sync="type"></Types>
                <Tabs :data-source="viewTypes" :viewType.sync="viewType" ></Tabs>
                <div class="details">
                    <ul>
                        <li v-for="(date, index) in groupedList" :key="index">
                            <div class="date">{{convertDate(date.title)}}</div>
                            <div v-for="(item, index) in date.items" :key="index" class="records">
                                <ul>
                                    <li v-for="(originalTagStatement, index) in item.original" :key="index" class="record">
                                            <i class="original-tag" :class="`fas ${originalTagStatement.tag}`"></i>
                                            <span class="comments">{{originalTagStatement.comment}}</span>
                                            <span class="amount">${{originalTagStatement.amount}}</span>
                                    </li>
                                    <li v-for="(addedTagStatement) in item.added" :key="Number(addedTagStatement.tag.id+index)" class="record">
                                            <span class="custom-tag">{{addedTagStatement.tag.name}}</span>
                                            <span class="comments">{{addedTagStatement.comment}}</span>
                                            <span class="amount">${{addedTagStatement.amount}}</span>
                                    </li>
                                </ul>
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
    import clone from "@/library/clone";

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

        get groupedList(){
            const {statements} = this;
            if(statements.length ===0){return []}
            const newList = clone(statements).sort((a,b)=> dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf());
            const finalArray = [];
            let currentDateIndex = 0;
            for(let i = 0; i< newList.length; i++){
                const currentItemDate = dayjs(newList[i].createdAt).format("YYYY-MM-DD")
                if(!finalArray[currentDateIndex]){
                    const object = {title: currentItemDate,
                    items:[{"original": []}, {"added":[]}]}
                    finalArray.push(object);
                    if(typeof newList[i].tag === "string"){
                            finalArray[currentDateIndex].items[0].original.push(newList[i])
                        }else{
                            finalArray[currentDateIndex].items[1].added.push(newList[i])
                        }
                }else if (finalArray[currentDateIndex] && finalArray[currentDateIndex].title === currentItemDate){
                        if(typeof newList[i].tag === "string"){
                            finalArray[currentDateIndex].items[0].original.push(newList[i])
                        }else{
                            finalArray[currentDateIndex].items[1].added.push(newList[i])
                        }
                }else{
                    const object = {title: currentItemDate,
                    items:[{"original": []}, {"added":[]}]}
                    finalArray.push(object);
                    currentDateIndex++
                    if(typeof newList[i].tag === "string"){
                        finalArray[currentDateIndex].items[0].original.push(newList[i])
                    }else{
                        finalArray[currentDateIndex].items[1].added.push(newList[i])
                    }
                }
            }
            return finalArray;
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