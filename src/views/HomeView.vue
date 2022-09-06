<template>
    <div class="wrapper">
<Landing/>
<Testimonial/>
<Carousel/>
    </div>
</template>

<script>
import Landing from '@/components/Landing.vue';
import Carousel from '@/components/Carousel.vue';
import Testimonial from '@/components/Testimonial.vue';
    export default {
    components: { Landing, Carousel, Testimonial }
}
</script>

<style scoped>
.wrapper{
height: 500vh;
}
</style>