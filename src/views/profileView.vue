<template>
<div class="profile-container container-fluid mt-5 pt-5">
<div v-if="user" class="container">
  <button
              data-bs-toggle="modal"
              :data-bs-target="`#editUser` + user.id"
              class="btn">
              Edit
            </button>
<!-- <ModalUpdateUser :product="product"/>a n  -->
            <form method="PUT" @submit.prevent="editUser">
                    <label class="form-label">ID</label>
                    <input type="number" class="form-control" :value="user.id" readonly>
                    <label class="form-label text-start">User Full Name</label>
                    <input type="text" class="form-control" :value="user.fullname" readonly>
                    <label class="form-label text-start">User Email</label>
                    <input type="text" class="form-control" :value="user.email" readonly>
                    <label class="form-label text-start">Password</label>
                    <input type="text" class="form-control" :value="user.password" readonly>
                    <label class="form-label text-start">Role ID</label>
                    <input type="number" class="form-control" :value="user.role_id" readonly>
                    <label class="form-label text-start">Phone No.</label>
                    <input type="text" class="form-control" :valuel="user.phone" readonly>
                    <button type="button" class="btn btn-grad" @click="editUser(user.id)">Save Changes</button>
                </form>
</div>
<div class="">
<h1>{{user.id}}</h1>
<h1>{{user.fullname}}</h1>
<h1>{{user.email}}</h1>
<h1>{{user.password}}</h1>
<h1>{{user.role_id}}</h1>
<h1>{{user.phone}}</h1>
</div>
</div>
</template>

<script>
import ModalUpdateUser from '@/components/modalUpdateUser.vue';
    export default {
    name: "profile",
    computed: {
        user() {
            return this.$store.state.user;
        },
    },
    mounted() {
        this.$store.dispatch("getUser", this.$store.state.user.id);
    },
    components: { ModalUpdateUser }
}
</script>

<style scoped>
  .profile-container{
    background: url('https://images.pexels.com/photos/235985/pexels-photo-235985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
background-size: contain;
background-repeat: none;
  }

</style>