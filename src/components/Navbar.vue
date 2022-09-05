<template>
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">EMI'S</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <router-link to="/">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Home</a>
        </li>
        </router-link>
        <router-link to="/about">
        <li class="nav-item">
          <a class="nav-link"  href="#">About</a>
        </li>
        </router-link>

                <router-link to="/products">
        <li class="nav-item">
          <a class="nav-link"  href="#">Products</a>
        </li>
        </router-link>
      <form class="d-flex flex-row ">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      </ul>
              <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Account <i class="fa fa-address-card" aria-hidden="true"> </i>
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown" v-if="!user">
          <router-link to="/signup">
            <li><a class="dropdown-item" href="#">Signup</a></li>
          </router-link>
           <router-link to="/login">
            <li><a class="dropdown-item" href="#">Login</a></li>
           </router-link>
          </ul>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown" v-if="user">
           <router-link to="/login">
            <li><a class="dropdown-item" href="#">Logout</a></li>
           </router-link>
            <li><hr class="dropdown-divider"></li>
                    <router-link to="/admin">
            <li class="nav-item"><a class="nav-link" href="#">Admin</a></li>
        </router-link>
          </ul>
        </li>
    </div>
  </div>
</nav>
</template>
<script>

</script>
<style scoped>
  nav{
    background: url('https://images.pexels.com/photos/1901028/pexels-photo-1901028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
    background-size: ;
  }
    ul{
    background: url('https://images.pexels.com/photos/1901028/pexels-photo-1901028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
    background-size: ;
  }
li{
    text-decoration: none;
    list-style: none;
  }
nav {
  padding: 30px;
  background-color: #541212;
  
}

nav a {
  font-weight: bold;
  color: #EEEEEE !important;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>