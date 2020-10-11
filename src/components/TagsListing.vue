<template>
    <div class="tags">
        <ul class="current-tags">
            <!-- <li class="tag"><i class="fas fa-utensils"></i></li>
            <li class="tag"><i class="fas fa-shopping-cart"></i></li>
            <li class="tag"><i class="fas fa-bus"></i></li>
            <li class="tag"><i class="fas fa-home"></i></li>
            <li class="tag"><i class="fas fa-tools"></i></li>
            <li class="tag"><i class="fas fa-first-aid"></i></li>
            <li class="tag"><i class="fas fa-piggy-bank"></i></li>
            <li class="tag"><i class="fas fa-running"></i></li>
            <li class="tag"><i class="fas fa-plane"></i></li>
            <li class="tag"><i class="fas fa-paw"></i></li>
            <li class="tag"><i class="fas fa-baby"></i></li> -->
            <li class="tag">dine</li>
            <li class="tag">shop</li>
            <li class="tag">grocery</li>
            <li class="tag">util</li>
            <li class="tag">rent</li>
            <li class="tag">subs</li>
            <li class="tag">salary</li>
            <li class="tag">saving</li>
            <li class="tag">ent.</li>
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
            flex-wrap: nowrap;

            .tag {
                font-size: 1.5em;
                padding: 0.3em 1em;
                border-radius: 2em;
                margin-right: 1em;
                background-color: lighten($primary-color, 10%);
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