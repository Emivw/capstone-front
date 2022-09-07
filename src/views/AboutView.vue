<template>
<div class="container-fluid">

<Testimonial/>

</div>
</template>

<script>
import Testimonial from '@/components/Testimonial.vue';
    export default {
    components: { Testimonial }
    }
</script>

<style scoped>
.container-fluid{
height: 100vh;
}
</style>