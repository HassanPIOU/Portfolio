<template>
    <section class="home bg-light vh-100" id="home" style="background-image: url('assets/img/bg/bg.jpg')">
        <div class="container ">
            <div class="row ">
                <div class="col-lg-12 ">
                    <!--social-media-->
                    <div class="social-home">
                        <ul class="list-inline">
                            <li><a href="#" class="text-dark"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="#" class="text-dark"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="#" class="text-dark"><i class="fab fa-instagram"></i></a></li>
                            <li><a href="#" class="text-dark"><i class="fab fa-dribbble"></i></a></li>
                            <li><a href="#" class="text-dark"><i class="fab fa-behance"></i></a></li>
                        </ul>
                    </div>

                    <div class="d-flex align-items-center vh-100">
                        <div class="full-width">
                            <div class="banner">
                                <h6 class="text-dark">Hi There,</h6>
                                <h1 class="text-dark">I Am a
                                    <span class="typed-text">{{ typeValue }}</span>
                                    <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>
                                </h1>
                                <p class="max-width-450 text-dark mt-20 mb-30">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing pretium lacus.
                                </p>
                                <a href="#about" class="btn-custom">
                                    <span><i class="fas fa-user"></i></span>
                                    <span> More About Me</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <!--my-info-->
                    <div class="my-info">
                        <div class="item">
                            <p class="text-dark font-w-700 mb-0">Email</p>
                            <p class="text-dark mb-0">contact@mariam.com</p>
                        </div>

                        <div class="item">
                            <p class="text-dark font-w-700 mb-0">Phone</p>
                            <p class="text-dark mb-0">+113-804-9098</p>
                        </div>

                        <div class="item">
                            <p class="text-dark font-w-700  mb-0">Location</p>
                            <p class="text-dark mb-0">California ,USA</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Banner",
        data: () => {
            return {
                typeValue: '',
                typeStatus: false,
                typeArray: ['Developer', 'Designer', 'DevOps', 'Freelancer'],
                typingSpeed: 200,
                erasingSpeed: 100,
                newTextDelay: 2000,
                typeArrayIndex: 0,
                charIndex: 0
            }
        },
        methods: {
            typeText() {
                if(this.charIndex < this.typeArray[this.typeArrayIndex].length) {
                    if(!this.typeStatus)
                        this.typeStatus = true;
                    this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
                    this.charIndex += 1;
                    setTimeout(this.typeText, this.typingSpeed);
                }
                else {
                    this.typeStatus = false;
                    setTimeout(this.eraseText, this.newTextDelay);
                }
            },
            eraseText() {
                if(this.charIndex > 0) {
                    if(!this.typeStatus)
                        this.typeStatus = true;
                    this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
                    this.charIndex -= 1;
                    setTimeout(this.eraseText, this.erasingSpeed);
                }
                else {
                    this.typeStatus = false;
                    this.typeArrayIndex += 1;
                    if(this.typeArrayIndex >= this.typeArray.length)
                        this.typeArrayIndex = 0;
                    setTimeout(this.typeText, this.typingSpeed + 1000);
                }
            }
        },
        created() {
            setTimeout(this.typeText, this.newTextDelay + 200);
        }

    }
</script>

<style lang="css" scoped>


        span.typed-text {
            color: #2998CD;
        }
        span.cursor {
            display: inline-block;
            margin-left: 3px;
            width: 4px;
            background-color: #2998CD;
            animation: cursorBlink 1s infinite;
        }
        span.cursor.typing {
            animation: none;
        }

    @keyframes cursorBlink {
        49% { background-color: #2998CD; }
        50% { background-color: transparent; }
        99% { background-color: transparent; }
    }
</style>