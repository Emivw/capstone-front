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
import Landing from "./components/Landing.vue";
export default {
    components: { Navbar, Footer, Landing }
}
</script>
<style>
  @font-face {
    font-family: teamSpirit;
    src: url("./assets/teamspirit/TeamSpiritNF.otf") format("opentype");
}

@font-face {
    font-family: carnaval;
    font-weight: bold;
    src: url("./assets/CarnevaleeFreakshow/Carnevalee Freakshow.ttf") format("truetype");
}
@import url('https://fonts.googleapis.com/css2?family=Monoton&family=Rubik+Dirt&display=swap');
#app {

/* font-family: 'Rubik Dirt', cursive; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #541212 !important;
  background-color: #0F0E0E;
  font-family: 'carnaval', cursive;
}
.btn{
  background-color: #541212  !important;
  color: #EEEEEE;
}
button{
    background-color: #541212  !important;
  color: #EEEEEE;
}
h1 {
  font-family: 'teamSpirit', cursive;
}
a {
  font-family: 'carnaval', cursive;
  color: #8B9A46 !important;
}
h2 {
  font-family: 'teamSpirit', cursive;
}
h3 {
 font-family: 'teamSpirit', cursive;
} 
h4 {
  font-family: 'teamSpirit', cursive;
}
h5 {
  font-family: 'teamSpirit', cursive;
}
h6 {
  font-family: 'teamSpirit', cursive;
}
router-view{
  height: 100vh;
}


</style>
