<template>
    <div class="container">
    <div class="p-5 bg-dark text-white">
            <h1 class="display-3">THIS IS US</h1>
            <p class="lead">Jumbo helper text</p>
            <hr class="my-2">
            <p>More info</p>
            <p class="lead">
                <a class="btn btn-primary btn-lg" href="Jumbo action link" role="button">Jumbo action name</a>
            </p>
    </div>
<Carousel/>
    </div>
</template>
<script>
import Carousel from "../components/Carousel.vue";
    export default {
        components: {  Carousel }
    }
</script>

<style scoped>
.container {
height: 200vh;
}

</style>