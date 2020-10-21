<template>
    <div class="container" v-setHeight>
        <div class="text-wrapper">
                <div class="text-1 text"><slot/></div>
                <div class="text-2 text"><slot/></div>
                <div class="text-3 text"><slot/></div>
                <div class="text-4 text"><slot/></div>
                <div class="text-5 text"><slot/></div>
                <div class="text-6 text"><slot/></div>
                <div class="text-7 text"><slot/></div>
                <div class="text-8 text"><slot/></div>
                <div class="text-9 text"><slot/></div>
                <div class="text-10 text"><slot/></div>
                <div class="text-11 text"><slot/></div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component, Prop} from "vue-property-decorator";
    
    @Component
    export default class Intro extends Vue{
        @Prop(String) readonly text: string| undefined;
    }
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.container {
    color: white;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    margin: 0px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background:$primary-color;
    animation: slide-out-container 3s cubic-bezier(0.97, 0.01, 0.36, 0.99) 2.8s;
    animation-fill-mode: forwards;
    overflow: hidden;
    .text-wrapper {
        .text {
            font-family: 'Montserrat', sans-serif;
            font-weight: 300;
            font-size: 8vh;
        }
        .text-1,
        .text-3,
        .text-4,
        .text-8,
        .text-9,
        .text-11 {
            // color: rgba(0, 0, 0, 0);
            // -webkit-text-stroke: 1px white;
            color: lighten($primary-color, 10%)
        }

        @keyframes blink {
            0% {
                opacity: 0%;
            }
            1% {
                opacity: 100%;
            }
            99% {
                opacity: 100%;
            }
            100% {
                opacity: 0;
            }
        }

        .text-1 {
            animation: blink 0.8s linear 0.9s, blink 0.8s linear 2s;
            opacity: 0;
        }

        .text-2 {
            animation: blink 0.8s linear 0.8s, blink 0.8s linear 2.1s;
            opacity: 0;
        }

        .text-3 {
            animation: blink 0.8s linear 0.7s, blink 0.8s linear 2.2s;
            opacity: 0;
        }

        .text-4 {
            animation: blink 0.8s linear 0.6s, blink 0.8s linear 2.3s;
            opacity: 0;
        }

        .text-5 {
            animation: blink 0.8s linear 0.5s, blink 0.8s linear 2.4s;
            opacity: 0;
        }

        .text-6 {
            animation: blink 0.8s linear 0.4s, blink 0.8s linear 2.5s, slide-out 1s linear 3.2s, slide-out 0.8s ease 4s, slide-out 0.5s ease 4.8s;
            opacity: 0;
        }

        .text-7 {
            animation: blink 0.8s linear 0.5s, blink 0.8s linear 2.4s;
            opacity: 0;
        }

        .text-8 {
            animation: blink 0.8s linear 0.6s, blink 0.8s linear 2.3s;
            opacity: 0;
        }

        .text-9 {
            animation: blink 0.8s linear 0.7s, blink 0.8s linear 2.2s;
            opacity: 0;
        }

        .text-10 {
            animation: blink 0.8s linear 0.8s, blink 0.8s linear 2.1s;
            opacity: 0;
        }

        .text-11 {
            animation: blink 0.8s linear 0.9s, blink 0.8s linear 2s;
            opacity: 0;
        }

        @keyframes slide-out {
            0% {
                opacity: 0%;
            }
            1% {
                opacity: 100%;
            }

            9% {
                opacity: 100%;
            }
            10% {
                opacity: 0%;
            }

            19% {
                opacity: 0%;
            }
            20% {
                opacity: 100%;
            }

            29% {
                opacity: 100%;
            }
            30% {
                opacity: 0%;
            }

            39% {
                opacity: 0%;
            }
            40% {
                opacity: 100%;
            }

            49% {
                opacity: 100%;
            }

            50%{
                opacity: 0;
            }
            59% {
                opacity: 0%;
            }
            60% {
                opacity: 100%;
            }

            69% {
                opacity: 100%;
            }

            70%{
                opacity: 0;
            }

            79% {
                opacity: 0%;
            }
            80% {
                opacity: 100%;
            }

            89% {
                opacity: 100%;
            }

            90%{
                opacity: 0;
            }

            95%{
                opacity: 100%;
            }
        }

        @keyframes slide-out-container {
            0% {
                top: 0;
            }

            40% {
                top: 0;
            }

            100% {
                top: -120%;
            }
        }

        @media (max-width: 990px) {
            .header {
                font-size: 8vh;
            }

            .text {
                font-size: 7vh;
            }
        }
    }
}
</style>