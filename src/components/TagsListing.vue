<template>
    <div class="tags">
        <ul class="current-tags">
            <li class="tag"><i class="fas fa-utensils"></i></li>
            <li class="tag"><i class="fas fa-shopping-cart"></i></li>
            <li class="tag"><i class="fas fa-bus"></i></li>
            <li class="tag"><i class="fas fa-home"></i></li>
            <li class="tag"><i class="fas fa-tools"></i></li>
            <li class="tag"><i class="fas fa-first-aid"></i></li>
            <li class="tag"><i class="fas fa-piggy-bank"></i></li>
            <li class="tag"><i class="fas fa-running"></i></li>
            <li class="tag"><i class="fas fa-plane"></i></li>
            <li class="tag"><i class="fas fa-paw"></i></li>
            <li class="tag"><i class="fas fa-baby"></i></li>
            <li class="tag new-tag">
                <button>
                    <i class="fas fa-plus"></i>
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "TagsListing"
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";

    .tags {
        flex-grow: 1;
        overflow: auto;
        width: 100%;
        padding: 1em;

        .current-tags {
            font-weight: 300;
            display: flex;
            flex-wrap: wrap;

            .tag {
                height: 2em;
                width: 2em;
                font-size: 2em;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 0.5em;
                margin-right: 0.5em;
                background-color: lighten($primary-color, 10%);
            }

            .new-tag {
                font-weight: 500;
                background-color: white;
                border: 2px solid darken($primary-color, 10%);
                outline: none;

                button {
                    outline: none;
                    color: darken($primary-color, 10%);
                    background: none;
                    border: none;
                }
            }
        }
    }
</style>