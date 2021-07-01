<template>
    <footer id="footer">
        <div class="container">
            <div class="logo-block">
                <img src="~/assets/img/footer-logo.svg" alt="美仕媞時尚醫美診所">
                <div class="footer-icons">
                    <a href="https://line.me/ti/p/@all1852n" target="_blank">
                        <img class="icon" src="~/assets/img/footer-1.svg" alt="line">
                    </a>
                    <a href="https://www.facebook.com/messages/t/586478828141918" target="_blank">
                        <img class="icon" src="~/assets/img/footer-2.svg" alt="message">
                    </a>
                    <a href="https://www.facebook.com/maxbeautyclinic/" target="_blank">
                        <img class="icon" src="~/assets/img/footer-3.svg" alt="fb">
                    </a>
                    <a href="tel:+88622718-7779" target="_blank">
                        <img class="icon" src="~/assets/img/footer-4.svg" alt="phone">
                    </a>
                </div>
            </div>
            <div class="text-block">
                <p>週一～週五 12:00-21:00</p>
                <p>週六 11:00-19:00 週日休診</p>
                <p>預約專線：02-2718-7779</p>
                <p>地址：台北市松山區民權東路三段178號15樓(航廈大樓)</p>
            </div>
        </div>
    </footer>
</template>

<style lang="scss">
    #footer {
        background-color: #8E2E63;
        padding: 1% 10%;
        padding-bottom: 3%;
        @media screen and (max-width: 992px) {
            padding: 3% 5%;
        }
        .container {
            max-width: 1280px;
            margin: 0 auto;
            color: #fff;
            display: flex;
            align-items: center;
            @include mobile {
                flex-direction: column;
                padding-bottom: 20%;
            }
            .logo-block {
                position: relative;
                width: 40%;
                max-width: 500px;
                padding: 2% 0;
                display: inline-block;
                img {
                    width: 100%;
                }
                @include mobile {
                    width: 80%;
                }
                .footer-icons {
                    @include mobile {
                        display: none;
                    }
                }
            }
            .text-block {
                flex-grow: 1;  
                display: inline-block;
                padding-left: 5%;
                padding-top: 2%;
                letter-spacing: 1px;
                font-weight: 200;
                font-size: 80%;

                @media screen and (max-width: 992px) {
                    padding-top: 1%;
                    padding-left: 5%;
                    font-size: 90%;
                }
                @include mobile {
                    text-align: center;
                }
                
                p:nth-child(2) {
                    margin-bottom: 5%;
                    @media screen and (max-width: 992px) {
                        margin-bottom: 2%;
                    }
                }
            }
            .footer-icons {
                position: absolute;
                width: 30%;
                right: 0;
                bottom: 5%;
                display: flex;
                a {
                    margin: 1%;
                    &:hover {
                        opacity: 0.9;
                    }
                }
            }
        }
    }
</style>