<template>
    <div>
        <layout>
            <div class="tags">
                <ul class="current-tags">
                    <li class="tag">dine</li>
                    <li class="tag">grocery</li>
                    <li class="tag">gas</li>
                    <li class="tag">utilities</li>
                </ul>
                <div class="new-tag">
                    <button>new tag</button>
                </div>
            </div>
            <div class="comments">
                <input type="text" placeholder="add comments">
            </div>
            <div class="types">
                <ul>
                    <li class="type">Expenditure</li>
                    <li class="type">Income</li>
                </ul>
            </div>
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
                    <button class="numpad-button">OK</button>
                    <button class="numpad-button">0</button>
                    <button class="numpad-button">.</button>
                    <button class="numpad-button">Date</button>
                </div>
            </div>
        </layout>
    </div>
</template>

<script>
    import Layout from "../components/layout.vue";
    export default {
        name:"Money",
        components: {Layout}
    }
</script>

<style lang="scss" scoped>
</style>