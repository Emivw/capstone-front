<template>
    <div class="wrapper">
<Landing/>
<div class="classic">
</div>
<Testimonial/>
<div class="classic">
</div>
<Carousel/>
<div class="classic">
</div>
<Contact/>

    </div>
</template>

<script>
    import Contact from '@/components/Contact.vue';
import Landing from '@/components/Landing.vue';
import Carousel from '@/components/Carousel.vue';
import Testimonial from '@/components/Testimonial.vue';
    export default {
    components: { Landing, Carousel, Testimonial, Contact }
}
</script>

<style scoped>
.wrapper{
height: 100%;
}
.classic {
background: black;
background-size:;
height: 10vh;
}
</style>