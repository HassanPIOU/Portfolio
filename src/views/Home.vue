<template>
  <div>

    <!--Home -->
    <Banner />

    <!-- About -->
    <About />

    <!-- Services -->
    <Services />

    <!-- Works -->
    <Work />

    <!-- testimonials-->
    <Testimonial />

    <!-- Blog -->
    <BlogHome />

    <!-- Contact -->

    <Contact />
    <!--Footer-->

    <div class="social-footer">
      <ul class="list-inline">
        <li><a href="#"><i class="fab fa-facebook-f text-dark"></i></a></li>
        <li><a href="#"><i class="fab fa-twitter text-dark"></i></a></li>
        <li><a href="#"><i class="fab fa-instagram text-dark"></i></a></li>
        <li><a href="#"><i class="fab fa-dribbble text-dark"></i></a></li>
        <li><a href="#"><i class="fab fa-behance text-dark"></i></a></li>
      </ul>
    </div>

  </div>
</template>

<script>

    import Contact from "../components/Contact";
    import Testimonial from "../components/Testimonial";
    import Work from "../components/Work";
    import Services from "../components/Services";
    import About from "../components/About";
    import Banner from "../components/Banner";
    import BlogHome from "../components/BlogHome";

    export default {
        name: "Home",
        components : {BlogHome, Banner, About, Services, Work, Testimonial, Contact},
    }
</script>

<style scoped lang="css">

</style>