<template>
<div class="container-fluid table-responsive py-5 mt-5 mt-5"> 
<table class="table table-bordered text-white" >
  <thead class="thead-dark">
    <tr>
      <th scope="col">Users</th>
      <th scope="col">Products</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
    <router-link to="admin/users">
      <button class="btn btn-primary">Users</button>
    </router-link>
      </th>
      <td>
    <router-link to="admin/products">
      <button class="btn btn-primary">Products</button>
    </router-link>
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