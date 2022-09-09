<template>
  <div class="wrapper mt-5">
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
  height: 100%;
      background: url('https://images.pexels.com/photos/326333/pexels-photo-326333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
      background-size: cover;
}

</style>