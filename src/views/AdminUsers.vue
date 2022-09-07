<template>
<div class="container-fluid table-responsive py-5"> 
<table class="table table-bordered text-white" >
  <thead class="thead-dark">
    <tr>
      <th scope="col">#ID</th>
      <th scope="col">FULLNAME</th>
      <th scope="col">EMAIL</th>
      <th scope="col">PASSWORD</th>
      <th scope="col">ROLE ID</th>
      <th scope="col">CREATED AT</th>
      <th scope="col">UPDATED AT</th>
      <th scope="col"></th>
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
    </tr>
  </tbody>
</table>
</div>
</template>

<script>
    export default {
          computed: {
    Users() {
      return this.$store.state.users;
    },
  },
  mounted() {
    this.$store.dispatch("getUsers");
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