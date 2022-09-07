<template>
<div class="container-fluid table-responsive py-5"> 
<table class="table table-bordered text-white" >
  <thead class="thead-dark">
      <tr>
      <th scope="col"><button class="btn btn-primary">ADD NEW PRODUCT</button></th>
      <th scope="col"><button class="btn btn-primary">SORT <i class="fa fa-sort-alpha-asc" aria-hidden="true"></i></button></th>
      <th scope="col">
      <form action="">
      <input type="search" name="search" placeholder="search">
      <button class="btn btn-primary"><i class="fa fa-search" aria-hidden="true"></i></button>
      </form>
      </th>
    </tr>
    <tr>
      <th scope="col">#ID</th>
      <th scope="col">TITLE</th>
      <th scope="col">CATEGORY</th>
      <th scope="col">STOCK</th>
      <th scope="col">DESCRIPTION</th>
      <th scope="col">COLOR</th>
      <th scope="col">PRICE</th>
      <th scope="col">IMAGE1</th>
      <th scope="col">Operations</th>
    </tr>
  </thead>
  <tbody v-for="product in products" 
    :key="product.prodID" 
    :product="product">
    <tr>
      <th scope="row">{{product.prodID}}</th>
      <td>{{product.prodTitle}}</td>
<td>{{product.prodCat}}</td>
<td>{{product.prodStock}}</td>
<td>{{product.prodDesc}}</td>
<td>{{product.color}}</td>
<td>{{product.prodPrice}}</td>
<td><img :src="product.prodImg1" alt=""></td>
<td><button class="btn btn-primary">Update</button>
<button class="btn btn-primary">Delete</button>
</td>
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
.container-fluid {
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