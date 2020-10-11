<template>
    <div class="types">
        <ul>
            <li class="type selected">Expenditure</li>
            <li class="type">Income</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Types"
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
</style>