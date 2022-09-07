<template>
  <div class="wrapper">
  <div class="container">
    <div class="row">
      <div v-if="product" id="item">
        <div class="row">
          <div class="col-md-6">
            <img :src="product.prodImg1" alt=" " class="img-fluid" />
          </div>
          <div class="col-md-6">
            <div class="information-area">
              <div id="details" class="info-top">
                <h1>{{ product.prodTitle }}</h1>
                <p>{{ product.prodDesc }}</p>
                <p>R{{ product.prodPrice }}</p>
              </div>
              <div class="btn btn-grad mx-4">
                <a class="text-white" @click="addProductToCart">Add To Cart</a>
              </div>
              <router-link to="/products"
                ><button class="btn btn-grad">Go Back</button></router-link
              >
            </div>
          </div>
        </div>
      </div>
      <div v-else>Loading....</div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  mounted() {
    this.$store.dispatch("getProduct", this.$route.params.id);
  },
};
</script>
<style scoped>
img {
  width: fit-content;
}
a {
  text-decoration: none;
}
.wrapper{
  height: 100%;
      background: url('https://images.pexels.com/photos/1901028/pexels-photo-1901028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
      background-size: cov;
      padding-top: 10%;
}
.container{
  	 		background: url('https://images.pexels.com/photos/235985/pexels-photo-235985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
			background-size: cover;
        color: #541212 !important;
        border-radius: 5%;
}
.info-top h1{
  color: #0d0925;
}

#main {
  background-image: linear-gradient(to right, #eb3349 0%, #f45c43 51%, #eb3349 100%);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;

}
#item {
  padding: 50px;
}
.price {
  color: black;
  font-size: 22px;
}
.btn-grad {
  background-image: linear-gradient(to right, #111011 0%, #854343 51%, #570912 100%);
  font-size: 10px !important;

  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
  display: flex;
  justify-content: center;
  padding: none !important;
}
.btn {
  display: inline-block;
  font-weight: 400;
  font-size: 10px !important;
  line-height: 1.5;
  color: #f8d4c0;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  /* padding: 0.375rem 0.75rem; */
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.btn-grad:hover {
  background-position: right center; /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}
</style>
