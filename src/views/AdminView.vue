<template>
<div class="container-fluid table-responsive py-5"> 
<table class="table table-bordered text-white" v-for="product in products" 
    :key="product.prodID" 
    :product="product">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#ID</th>
      <th scope="col">TITLE</th>
      <th scope="col">CATEGORY</th>
      <th scope="col">STOCK</th>
      <th scope="col">DESCRIPTION</th>
      <th scope="col">COLOR</th>
      <th scope="col">PRICE</th>
      <th scope="col">IMAGE1</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{{product.prodID}}</th>
      <td>{{product.prodTitle}}</td>
<td>{{product.prodCat}}</td>
<td>{{product.prodStock}}</td>
<td>{{product.prodDesc}}</td>
<td>{{product.color}}</td>
<td>{{product.prodPrice}}</td>
<td><img :src="product.prodImg1" alt=""></td>
    </tr>
  </tbody>
</table>
</div>
</template>

<script>
    export default {
          computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
    }
</script>

<style scoped>
.container {
    min-height: 100vh;
}
img {   
    width: 200px;
    height: 100px;
}
table-hover{
    color:aqua;
}

</style>