<template>
    <div class="nav">
        <router-link to="/money" class="item" active-class="selected"><i class="far fa-edit"></i></router-link>
        <router-link to="/tags" class="item" active-class="selected"><i class="fas fa-list-ul"></i></router-link>
        <router-link to="/stats" class="item" active-class="selected"><i class="far fa-chart-bar"></i></router-link>
    </div>
</template>

<script>
    export default {
        name: "Nav"
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";

    .nav {
        display: flex;
        @extend %shadow;

        .item {
            width: 33.33333%;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 4em;

            &.selected {
                background-color: darken($primary-color, 10%);

                .fas,
                .far {
                    color: white;
                }
            }

            .fas,
            .far {
                font-size: 3em;
                color: #333333;
            }
        }
    }
</style>