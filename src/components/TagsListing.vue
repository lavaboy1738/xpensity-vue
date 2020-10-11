<template>
    <div class="tags">
        <ul class="current-tags">
            <li class="tag"><i class="fas fa-hamburger"></i></li>
            <li class="tag"><i class="fas fa-film"></i></li>
            <li class="tag"><i class="fas fa-gas-pump"></i></li>
            <li class="tag"><i class="fas fa-bus"></i></li>
            <li class="tag"><i class="fas fa-plane"></i></li>
            <li class="tag"><i class="fas fa-shopping-cart"></i></li>
            <li class="tag"><i class="fas fa-tools"></i></li>
            <li class="tag"><i class="fas fa-briefcase-medical"></i></li>
            <li class="tag"><i class="fas fa-home"></i></li>
            <li class="tag"><i class="fas fa-piggy-bank"></i></li>
            <li class="tag"><i class="fas fa-dollar-sign"></i></li>
            <li class="tag"><i class="fas fa-piggy-bank"></i></li>
            <li class="tag"><i class="fas fa-dollar-sign"></i></li>
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
        padding: 1em;
        flex-grow: 1;

        .current-tags {
            font-size: 1.4em;
            font-weight: 300;
            display: flex;
            flex-wrap: wrap;

            .tag {
                height: 2em;
                line-height: 2em;
                padding-left: 1em;
                padding-right: 1em;
                padding-bottom: 1em;
                border-radius: 1.2em;
                background-color: lighten($primary-color, 10%);
                margin-right: 0.7em;
                margin-bottom: 0.7em;
            }

            .new-tag {
                button {
                    font-weight: 500;
                    background: transparent;
                    border: none;
                    outline: none;
                }
            }
        }
    }
</style>