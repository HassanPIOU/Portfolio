<template>
    <section class="section contact pb-70" id="contact">
        <div class="container">
            <div class="row mb-50">
                <div class="col-md-12">
                    <div class="section-title">
                        <h2 class="text-dark mb-0">Contact Me</h2>
                        <p class="text-muted mb-0">Feel Free To Contact Me Any Time </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6">

                    <form action=""   @submit.prevent="sendContactMessage()" method="post" id="main_contact_form" class="form contact_form ">

                        <div class="form-group">
                            <input type="text" name="name" v-model="state.form.fullname" id="name" class="form-control" placeholder="Name" required="required">
                        </div>

                        <div class="form-group">
                            <input type="email" name="email" v-model="state.form.email" id="email" class="form-control" placeholder="Email" required="required">
                        </div>

                        <div class="form-group">
                            <input type="text" name="subject"  v-model="state.form.sujet" id="subject" class="form-control" placeholder="Subject" required="required">
                        </div>

                        <div class="form-group"  :class="{'--exceeded' : caracterCount > 1000}">
                            ({{caracterCount}}/1000)
                            <textarea name="message" id="message" cols="30" v-model="state.form.comment" rows="5" class="form-control" placeholder="Message" required="required"></textarea>
                        </div>

                        <button  type="submit" name="submit" class="btn-custom">
                            <div v-if="state.loading" class="spinner-border spinner-border-sm"></div>
                            <span v-if="state.loading" style="padding-left: 10px;">Sending</span>

                            <span v-else>
                                <span><i class="fas fa-paper-plane"></i></span>
                            <span> Send Message</span>
                          </span>
                        </button>
                    </form>
                </div>
                <!--Contact -info -->
                <div class="col-lg-6">
                    <h5 class="text-dark">Let's talk about everything!</h5>
                    <p class="text-dark mb-30">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Lorem
                        ipsum dolor sit amet, consectetuer adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
                    <div class="contact-info">
                        <div class="item mb-20">
                            <p class="text-dark font-w-700 mb-0">Phone: </P>
                            <p class="text-dark mb-0"><i class="fas fa-phone base-color"></i>+113-804-9098</p>
                        </div>
                        <div class="item mb-20">
                            <p class="text-dark font-w-700 mb-0">Email: </p>
                            <p class="text-dark mb-0"><i class="fas fa-envelope base-color"> </i> contact@mariam.com</p>
                        </div>
                        <div class="item mb-20">
                            <p class="text-dark font-w-700 mb-0">Adress: </p>
                            <p class="text-dark mb-0"><i class="fas fa-map-marker-alt base-color"> </i>1000 Proctor St USA.</p>
                        </div>
                        <div class="item">
                            <p class="text-dark font-w-700 mb-0">Skybe: </p>
                            <p class="text-dark mb-0"> <i class="fab fab fa-skype base-color"> </i>mariam.wallas</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {reactive,computed} from 'vue'
    import axios from "axios"
    import {API_LINK_CONTACT} from "../modules/config";
    import { useToast } from "vue-toastification";

    export default {
        name: "Contact",
        setup(){
            const state = reactive({
              form : {
                  fullname: "",
                  email: '',
                  sujet: '',
                  comment: '',
              },
                loading: false,
                sitekey : "6LfIJrIZAAAAALHJS_NCZpnQZKksm2p6Agz6ryl5"
            })
            const caracterCount = computed(() =>  state.form.comment.length)

            const toast = useToast();


            function sendContactMessage(){
                state.loading = !false
                     axios.post(API_LINK_CONTACT, this.form)
                         .then((res) => {
                             console.log(res)
                             state.loading = false
                             toast.success(res, {
                                 timeout: 2000
                             });
                         })
                         .catch((error) => {
                             console.log(error)
                             state.loading = false
                             toast.error(error.message, {
                                 timeout: 2000
                             });

                         }).finally(() => {
                         state.loading = false
                     });
            }



            return {
                state,
                caracterCount,
                sendContactMessage,
                toast
            }
        },
        methods : {

        }
    }


</script>

<style scoped>
    .--exceeded{
        color : #d34533;
    }

</style>