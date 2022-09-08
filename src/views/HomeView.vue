<template>
  <div class="wrapper">
    <Landing />
    <div class="classic">
      <h6>WHAT WE OFFER</h6>
    </div>
    <Testimonial />
    <div class="classic">
      <h6>our Wares</h6>
    </div>
    <Carousel />
    <div class="classic">
      <h6>Reach OUT</h6>
    </div>
    <Contact />
  </div>
</template>

<script>
import Contact from "@/components/Contact.vue";
import Landing from "@/components/Landing.vue";
import Carousel from "@/components/Carousel.vue";
import Testimonial from "@/components/Testimonial.vue";
export default {
  components: { Landing, Carousel, Testimonial, Contact },
};
</script>

<style scoped>
.wrapper {
  height: 100%;
}
.classic {
  background: black;
  background-size: ;
  height: 100%;
}
</style>
