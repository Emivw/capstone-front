<template>
    <div class="wrapper">
<Landing/>
<Testimonial/>
<Carousel/>
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
</style>