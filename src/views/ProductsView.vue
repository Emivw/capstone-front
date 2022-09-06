<template>
  <div class="wrapper">
    <div class="container">
<div v-if="products" class="row p-5">
    <ProductCard 
    v-for="product in products" 
    :key="product.prodID" 
    :product="product"/>
</div>
<div v-else>Loading....</div>
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';
export default {
        name: 'products',
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
    components: { ProductCard }
}
</script>

<style scoped>
  .container{

  }
  .wrapper{
  height: 100vh;
      background: url('https://i.pinimg.com/originals/b6/a1/cd/b6a1cdabd0417caeee8626c333caf822.jpg');
      background-size: cover;
}

</style>