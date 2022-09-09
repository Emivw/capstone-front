<template>
<div class="profile-container container mt-5 pt-5">
<div v-if="user">
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
    }
</script>

<style scoped>

</style>