<template>
    <div class="nav-wrapper">
        <div class="content">
            Money
        </div>
        <Nav/>
    </div>
</template>

<script>
    import Nav from "@/components/Nav"
    export default {
        name:"Money",
        components: {Nav}
    }
</script>

<style lang="scss" scoped>
.nav-wrapper{
    border: 5px solid red;
    display: flex;
    flex-direction: column;
    height: 100vh;
}

.content{
    border: 5px solid blue;
    overflow: auto;
    flex-grow: 1;
}

</style>