<template>
<div class="container-fluid table-responsive py-5 mt-5"> 
<table class="table table-bordered text-white" v-if="products">
  <thead class="thead-dark">
      <tr>
      <th scope="col"><button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createProduct">ADD<i class="fa fa-plus-circle" aria-hidden="true"></i></button></th>
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
    <ModalUpdateProd :product="product"/>
<ModalAddProd/>
    <tr>
      <th scope="row">{{product.prodID}}</th>
      <td>{{product.prodTitle}}</td>
<td>{{product.prodCat}}</td>
<td>{{product.prodStock}}</td>
<td>{{product.prodDesc}}</td>
<td>{{product.prodColor}}</td>
<td>{{product.prodPrice}}</td>
<td><img :src="product.prodImg1" alt=""></td>
<td>            <button
              data-bs-toggle="modal"
              :data-bs-target="`#editProduct` + product.prodID"
              class="btn">
              Edit
            </button>

<button class="btn btn-primary" @click="this.$store.dispatch('deleteProduct', product.prodID)"><i class="fa fa-trash" aria-hidden="true"></i></button>
</td>
    </tr>
  </tbody>
</table>
<div v-else>loading...</div>
</div>
<!-- Button trigger modal
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createProduct">
  Launch demo modal
</button> -->

</template>

<script>
import ModalUpdateProd from '@/components/modalUpdateProd.vue';
import ModalAddProd from '@/components/modalAddProd.vue';
export default {
    data() {
        return {
            prodTitle: "",
            prodCat: "",
            prodStock: "",
            prodDesc: "",
            prodColor: "",
            prodPrice: "",
            prodImg1: "",
        };
    },
    computed: {
        products() {
            return this.$store.state.products;
        }
    },
    mounted() {
        this.$store.dispatch("getProducts");
    },
    methods: {
        deleteProduct() {
            this.$store.dispatch("deleteProduct", this.id);
        }
    },
    components: {
        ModalUpdateProd,
        ModalAddProd
    }
}
</script>

<style scoped>
    .modal{
        height: 100%;
        width: 100%;
    }
.container-fluid {
    min-height: 100%;
}
img {   
    width: 200px;
    height: 100px;
}
table-hover{
    color:aqua;
}
	.container-fluid{  
		background: url('https://images.pexels.com/photos/235985/pexels-photo-235985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
}
.main-content {
  width: 50%;
  border-radius: 20px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.4);
  margin: 5em auto;
  display: flex;
}
.company__info {
  background-color: #8B9A46;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
}
.fa-android {
  font-size: 3em;
}
@media screen and (max-width: 640px) {
  .main-content {
    width: 90%;
  }
  .company__info {
    display: none;
  }
  .login_form {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
}
@media screen and (min-width: 642px) and (max-width: 800px) {
  .main-content {
    width: 70%;
  }
}
.row > h2 {
  color: #541212;
}
.login_form {
  background-color: #fff;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top: 1px solid #ccc;
  border-right: 1px solid #ccc;
}
form {
  padding: 0 2em;
}
.form__input {
  width: 100%;
  border: 0px solid transparent;
  border-radius: 0;
  border-bottom: 1px solid #aaa;
  padding: 1em 0.5em 0.5em;
  padding-left: 2em;
  outline: none;
  margin: 1.5em auto;
  transition: all 0.5s ease;
}
.form__input:focus {
  border-bottom-color: #541212;
  box-shadow: 0 0 5px rgba(0, 80, 80, 0.4);
  border-radius: 4px;
}
/* .btn {
  transition: all 0.5s ease;
  width: 70%;
  border-radius: 30px;
  color: #8B9A46;
  font-weight: 600;
  background-color: #fff;
  border: 1px solid 541212;
  margin-top: 1.5em;
  margin-bottom: 1em;
} */
.btn:hover,
.btn:focus {
  background-color: #541212;
  color: #fff;
}
.bg-success {
    background-color: #541212!important;
}

</style>