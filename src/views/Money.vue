<template>
    <div>
        <layout>
            <div class="wrapper">
                <div class="tags">
                    <ul class="current-tags">
                        <li class="tag">dine</li>
                        <li class="tag">grocery</li>
                        <li class="tag">gas</li>
                        <li class="tag">utilities</li>
                    </ul>
                    <div class="new-tag">
                        <button>New Tag</button>
                    </div>
                </div>
                <div class="comments">
                    <input type="text" placeholder="add comments">
                </div>
                <div class="types">
                    <ul>
                        <li class="type selected">Expenditure</li>
                        <li class="type">Income</li>
                    </ul>
                </div>
                <div class="numpad">
                    <div class="display-number">100</div>
                    <div class="numpad-buttons">
                        <button class="numpad-button">1</button>
                        <button class="numpad-button">2</button>
                        <button class="numpad-button">3</button>
                        <button class="numpad-button">Del.</button>
                        <button class="numpad-button">4</button>
                        <button class="numpad-button">5</button>
                        <button class="numpad-button">6</button>
                        <button class="numpad-button">C</button>
                        <button class="numpad-button">7</button>
                        <button class="numpad-button">8</button>
                        <button class="numpad-button">9</button>
                        <button class="numpad-button ok">OK</button>
                        <button class="numpad-button zero">0</button>
                        <button class="numpad-button dot">.</button>
                    </div>
                </div>
            </div>
        </layout>
    </div>
</template>

<script>
    import Layout from "../components/layout.vue";
    export default {
        name: "Money",
        components: {
            Layout
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";

    .wrapper {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }

    .tags {
        padding: 1.6em;
        height: 100%;

        .current-tags {
            font-size: 1.4em;
            font-weight: 300;
            display: flex;

            .tag {
                height: 2em;
                line-height: 2em;
                padding-left: 1em;
                padding-right: 1em;
                border-radius: 1.2em;
                background-color: lighten($primary-color, 10%);
                margin-right: 1em;
            }
        }

        .new-tag {
            padding-top: 1.6em;

            button {
                font-weight: 500;
                opacity: 0.6;
                background: transparent;
                border: none;
                border-bottom: 1px solid;
                padding: 0.1em 0.3em;
            }
        }
    }

    .comments {
        padding: 0 1.6em;
        background-color: lighten($primary-color, 16%);
        display: flex;

        input {
            font-size: 1.4em;
            padding: 0.7em 0;
            border: none;
            background: transparent;
            outline: none;
            flex-grow: 1;
        }
    }

    .types {
        background-color: $primary-color;

        ul {
            display: flex;

            li {
                width: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 2em;
                font-weight: 200;
                line-height: 3em;
                position: relative;

                &.selected::after {
                    content: "";
                    position: absolute;
                    height: 0.1em;
                    width: 100%;
                    background-color: $secondary-color;
                    left: 0;
                    bottom: 0;
                }
            }
        }
    }

    .numpad {
        .display-number {
            font-size: 3.6em;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            line-height: 2em;
            padding-left: 1rem;
            padding-right: 1rem;
            text-align: right;
            @extend %inwardShadow;
        }

        .numpad-buttons {
            @extend %clearfix;

            .numpad-button {
                width: 25vw;
                background: transparent;
                border: none;
                font-size: 3em;
                font-weight: 200;
                height: 3.5rem;
                outline: none;

                &.ok {
                    float: right;
                    height: 7rem;
                    font-weight: 400;
                }

                &.zero {
                    width: 50vw;
                }

                &.dot{
                    font-weight: 400;
                }

                &:nth-child(1) {
                    background: lighten($primary-color, 16%);
                }

                &:nth-child(2),
                &:nth-child(5) {
                    background: lighten($primary-color, 13%);
                }

                &:nth-child(3),
                &:nth-child(6),
                &:nth-child(9) {
                    background: lighten($primary-color, 10%);
                }

                &:nth-child(4),
                &:nth-child(7),
                &:nth-child(10) {
                    background: lighten($primary-color, 8%);
                }

                &:nth-child(8),
                &:nth-child(11),
                &:nth-child(13) {
                    background: lighten($primary-color, 5%);
                }

                &:nth-child(12) {
                    background: darken($primary-color, 1%);
                }

                &:nth-child(14) {
                    background: lighten($primary-color, 2%);
                }
            }
        }
    }
</style>