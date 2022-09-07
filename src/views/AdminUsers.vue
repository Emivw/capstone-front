<template>
<div class="container-fluid table-responsive py-5"> 
<table class="table table-bordered text-white" >
  <thead class="thead-dark">
    <tr>
      <th scope="col"><button class="btn btn-primary">ADD NEW USER</button></th>
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
      <th scope="col">FULLNAME</th>
      <th scope="col">EMAIL</th>
      <th scope="col">PASSWORD</th>
      <th scope="col">ROLE ID</th>
      <th scope="col">CREATED AT</th>
      <th scope="col">UPDATED AT</th>
      <th scope="col">Operations</th>
    </tr>
  </thead>
  <tbody v-for="user in users" 
    :key="user.id" 
    :user="user">
    <tr>
      <th scope="row">{{user.id}}</th>
      <td>{{user.fullname}}</td>
<td>{{user.email}}</td>
<td>{{user.password}}</td>
<td>{{user.role_id}}</td>
<td>{{user.createdAt}}</td>
<td>{{user.updatedAt}}</td>
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
    users() {
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