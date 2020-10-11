<template>
    <div>
        <Layout content-class="layout">
            <Numpad/>
            <Types/>
            <Comments/>
            <TagsListing/>
        </Layout>
    </div>
</template>

<script>
    import Layout from "../components/layout.vue";
    import Numpad from "../components/Numpad.vue";
    import TagsListing from "../components/TagsListing.vue";
    import Types from "../components/Types.vue";
    import Comments from "../components/Comments.vue";

    export default {
        name: "Money",
        components: {
            Layout,
            Numpad,
            TagsListing,
            Types,
            Comments
        }
    }
</script>

<style lang="scss">
    .layout {
        display: flex;
        flex-direction: column-reverse;
        flex-wrap: nowrap;
    }
</style>

<style lang="scss" scoped>

</style>