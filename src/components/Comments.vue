<template>
            <div class="comments">
                <input type="text" placeholder="add comments">
            </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";

    .comments {
        min-height: 4em;
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
</style>