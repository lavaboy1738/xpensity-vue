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
                    <button>New Tag</button>
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
@import "~@/assets/style/helper.scss";
    .tags{
        padding: 1.6em;
        .current-tags{
            font-size: 1.4em;
            display: flex;

            .tag{
                height: 2em;
                line-height: 2em;
                padding-left: 1em;
                padding-right: 1em;
                border-radius: 1.2em;
                background-color: lighten($primary-color, 10%);
                margin-right: 1em;
            }
        }
        .new-tag{
            padding-top: 1.6em;
            
            button{
                opacity: 0.6;
                background: transparent;
                border: none;
                border-bottom: 1px solid;
                padding: 0.1em 0.3em;
            }
        }
    }
</style>