<template>
    <div>
        <Layout>
            <ol class="tag-list">
                <li class="tag"> <span>subs</span> <i class="fas fa-chevron-right"></i></li>
                <li class="tag"> <span>dental</span> <i class="fas fa-chevron-right"></i></li>
                <li class="tag"> <span>amazon</span> <i class="fas fa-chevron-right"></i></li>
                <li class="tag"> <span>fines</span> <i class="fas fa-chevron-right"></i></li>
            </ol>
            <div class="button-wrapper">
                <button class="new-tag">New Tag </button>
            </div>
        </Layout>
    </div>
</template>

<script>
    import Layout from "../components/layout.vue";
    export default {
        components:{Layout}
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";
    .tag-list{
        background-color: white;
        font-size: 1.6em;
        li{
            min-height: 2.5em;
            border-bottom: 1px solid #e6e6e6;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 1em;
        }
        i{
            color: $primary-color;
        }
    }

    .button-wrapper{
        text-align: center;
        margin-top: 4em;
        .new-tag{
        padding: 0.3em 1em;
        font-size: 1.6em;
        font-weight: 400;
        color: white;
        border: none;
        border-radius: 0.3em;
        outline: none;
        background: darken($primary-color, 10%);
    }
    }
</style>