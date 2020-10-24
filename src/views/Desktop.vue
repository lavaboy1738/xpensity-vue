<template>
    <div class="container">
            <div class="content">
                <div class="content-left">
                    <div class="content-left-upper">Welcome to Xpensity</div>
                    <div class="content-left-lower">
                            <p>
                                Xpensity is a personal accounting SPA built to keep track of income and expenditures.
                                <br>
                                It's designed to be <strong>mobile-only</strong> for quick use.
                            </p>

                            <p>To see it on mobile, simply:</p>

                            <p>1. Open camera on your mobile device
                                <br>
                                2. Scan the QR code below
                                <br>
                                3. Open the link in your default browser
                            </p>
                            <div class="code">
                                <img src="../assets/images/xpensity-QRCode.png" alt="">
                            </div>
                    </div>
                </div>
                <div class="content-right">
                    <img src="../assets/images/display.png" alt="">
                </div>
            </div>
    </div>
</template>

<script lang="ts">
    export default {
        name: "Desktop"
    }
</script>

<style lang="scss" scoped>
    .container {
        background-image: linear-gradient(78deg, transparent 0%, transparent 36%, rgba(232, 183, 208, 0.1) 36%, rgba(232, 183, 208, 0.1) 56%, transparent 56%, transparent 100%), linear-gradient(30deg, transparent 0%, transparent 2%, rgba(232, 183, 208, 0.13) 2%, rgba(232, 183, 208, 0.13) 75%, transparent 75%, transparent 100%), linear-gradient(206deg, transparent 0%, transparent 68%, rgba(232, 183, 208, 0.14) 68%, rgba(232, 183, 208, 0.14) 99%, transparent 99%, transparent 100%), linear-gradient(90deg, rgba(232, 183, 208, 0.07), rgba(232, 183, 208, 0.07));
        width: 100vw;
        height: 100vh;

        .content {
            position: absolute;
            max-width: 800px;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            &-left {
                width: 55%;
                &-upper{
                    text-align: center;
                    font-size: 1.8rem;
                    font-weight: 400;
                    margin-bottom: 1rem;
                    animation: entrance 1s ease-out 5s backwards;
                }
                &-lower{
                    p{
                        margin-bottom: 0.8rem;
                        font-size: 1rem;
                        font-weight: 300;
                        strong{
                            font-weight: 500;
                        }
                        animation: entrance 1s ease-out 5.3s backwards;
                    }
                    .code{
                        text-align: center;
                        animation: entrance 1s ease-out 5.6s backwards;
                        img{
                            width: 180px;
                        }
                    }
                }
            }

            &-right{
                width: 45%;
                display: flex;
                justify-content: center;
                align-items: center;
                animation: entrance 1s ease-out 6s backwards;
                img{
                    width: 100%;
                }
            }

        }
    }

    @keyframes entrance{
        0%{
            opacity: 0;
        }
        40%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
</style>