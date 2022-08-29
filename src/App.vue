<template>
<div class="container-fluid bg-dark">
  
<Navbar/>
  <router-view/>
  <Footer/>
</div> 
</template>
<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
    components: { Navbar, Footer }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Monoton&family=Rubik+Dirt&display=swap');
#app {

/* font-family: 'Rubik Dirt', cursive; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1 {
  font-family: 'Monoton', cursive;
}
h2 {
  font-family: 'Monoton', cursive;
}
h3 {
  font-family: 'Monoton', cursive;
} 
h4 {
  font-family: 'Monoton', cursive;
}
h5 {
  font-family: 'Monoton', cursive;
}
h6 {
  font-family: 'Monoton', cursive;
}


</style>
