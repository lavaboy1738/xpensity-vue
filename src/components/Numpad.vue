<template>
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
</template>

<script>
    export default {
        name: "Numpad"
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";
    .numpad {
        .display-number {
            font-size: 3.6em;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            line-height: 1.6em;
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

                &.dot {
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