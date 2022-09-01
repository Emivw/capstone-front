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
      <th scope="col">IMAGE2</th>
      <th scope="col">IMAGE3</th>
      <th scope="col">IMAGE4</th>
      <th scope="col">IMAGE5</th>
      <th scope="col">IMAGE6</th>
      <th scope="col">IMAGE7</th>
      <th scope="col">IMAGE8</th>
      <th scope="col">IMAGE9</th>
      <th scope="col">IMAGE10</th>
      <th scope="col">IMAGE11</th>
      <th scope="col">IMAGE12</th>
      <th scope="col">IMAGE13</th>
      <th scope="col">IMAGE14</th>
      <th scope="col">IMAGE15</th>
      <th scope="col">IMAGE16</th>
      
      
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
<td><img :src="product.prodImg2" alt=""></td>
<td><img :src="product.prodImg3" alt=""></td>
<td><img :src="product.prodImg4" alt=""></td>
<td><img :src="product.prodImg5" alt=""></td>
<td><img :src="product.prodImg6" alt=""></td>
<td><img :src="product.prodImg7" alt=""></td>
<td><img :src="product.prodImg8" alt=""></td>
<td><img :src="product.prodImg9" alt=""></td>
<td><img :src="product.prodImg10" alt=""></td>
<td><img :src="product.prodImg11" alt=""></td>
<td><img :src="product.prodImg12" alt=""></td>
<td><img :src="product.prodImg13" alt=""></td>
<td><img :src="product.prodImg14" alt=""></td>
<td><img :src="product.prodImg15" alt=""></td>
<td><img :src="product.prodImg16" alt=""></td>
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