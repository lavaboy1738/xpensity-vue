<template>
    <div class="types">
        <ul>
            <li class="type left" :class="this.type==='-'? 'selected':''" @click="selectType('-')">
                <span>Expenditure</span></li>
            <li class="type right" :class="this.type==='+'? 'selected':''" @click="selectType('+')">
                <span>Income</span></li>
        </ul>
    </div>
</template>

// this is the javascript version
// export default {
//  name: "Types",
//  data(){
//      return {
//          type: "-" //negative sign indicates expenditure, plus sign is income
//      }
// },
//  methods:{
//      selectType(type){ //type can only be minus or plus sign
//          if(type !=="-" && type!=="+"){
//              throw new Error("type is unknown")
//          }
//          this.type = type;
//      }
//  }
// }

//below is the typescript version
<script lang="ts">
    import Vue from 'vue'
    import {Component, Prop} from "vue-property-decorator";

    @Component

    export default class Types extends Vue {
        @Prop(String) readonly  type!: string

        selectType(type: string) { //type can only be minus or plus sign
            if (type !== "-" && type !== "+") {
                throw new Error("type is unknown")
            }
            this.$emit("update:type", type);
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";

    .types {
        background-color: $primary-color;

        ul {
            display: flex;

            li {
                width: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 2.2em;
                font-weight: 200;
                line-height: 2.2em;
                position: relative;
                overflow: hidden;

                span{
                    z-index: 2;
                }

                //below is for the animation

                &::after {
                    content: "";
                    position: absolute;
                    height: 0.1em;
                    width: 100%;
                    bottom: 0;
                    transition: 0.4s all cubic-bezier(0,.45,.52,1.01);
                    background-color: $secondary-color;
                }

                &.left::after {
                    right: -100%;
                }

                &.right::after {
                    left: -100%;
                }

                &.left.selected::after {
                    right: 0;
                }

                &.right.selected::after {
                    left: 0;
                }
            }
        }
    }
</style>