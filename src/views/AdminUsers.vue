<template>
<div class="container-fluid table-responsive py-5 mt-5"> 
<table class="table table-bordered text-white" >
  <thead class="thead-dark">
    <tr>
      <th scope="col"><button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createUser">ADD<i class="fa fa-plus-circle" aria-hidden="true"></i></button></th>
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
    <ModalAddUser/>
    <ModalUpdateUser :user="user"/>
    <tr>
      <th scope="row">{{user.id}}</th>
      <td>{{user.fullname}}</td>
<td>{{user.email}}</td>
<td>{{user.password}}</td>
<td>{{user.role_id}}</td>
<td>{{user.createdAt}}</td>
<td>{{user.updatedAt}}</td>
<td>            <button
              data-bs-toggle="modal"
              :data-bs-target="`#editUser` + user.id"
              class="btn">
              Edit
            </button>
<button class="btn btn-primary" @click="this.$store.dispatch('deleteUser', user.id)"><i class="fa fa-trash" aria-hidden="true"></i></button>
</td>
    </tr>
  </tbody>
</table>
</div>
</template>

<script>
import ModalAddUser from '@/components/modalAddUser.vue';
import ModalUpdateUser from '@/components/modalUpdateUser.vue';
    export default {
    computed: {
        users() {
            return this.$store.state.users;
        },
    },
    mounted() {
        this.$store.dispatch("getUsers");
    },
    components: {
        ModalAddUser,
        ModalUpdateUser
    }
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