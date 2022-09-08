<template>
<!-- Modal
<div class="modal fade" id="updateProduct" tabindex="-1" aria-labelledby="updateProductLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="updateProductLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
  <form @submit.prevent="updateProduct"> 
  <div class="form-group">
    <label for="title">product Title</label>
    <input type="text" class="form-control" id="title" placeholder="Title" v-model="prodTitle">
    <small id="emailHelp" class="form-text text-muted"></small>
  </div>
  <div class="form-group">
    <label for="category">product Category</label>
    <input type="text" class="form-control" id="category" placeholder="[ 'category1', 'category2', 'category3']" v-model="prodCat">
  </div>
    <div class="form-group">
    <label for="description">product Description</label>
    <input type="text" class="form-control" id="description" placeholder="description" v-model="prodDesc">
    <small id="emailHelp" class="form-text text-muted"></small>
  </div>
      <div class="form-group">
    <label for="description">product Stock</label>
    <input type="number" class="form-control" id="stock" placeholder="stock" v-model="prodStock">
    <small id="emailHelp" class="form-text text-muted"></small>
  </div>
  <div class="form-group">
    <label for="color">product color</label>
    <input type="text" class="form-control" id="color" placeholder="[ 'color1', 'color2', 'color3']" v-model="prodColor">
  </div>
      <div class="form-group">
    <label for="price">product Price</label>
    <input type="text" class="form-control" id="price" placeholder="Price" v-model="prodPrice">
    <small id="" class="form-text text-muted"></small>
  </div>
  <div class="form-group">
    <label for="imgUrl">product imgUrl</label>
    <input type="text" class="form-control" id="imgUrl" placeholder="imgUrl" v-model="prodImg1">
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> -->
<div class="modal fade" style="color:black !important;" :id="`editProduct`+product.prodID" tabindex="-1" :aria-labelledby="product.prodID+`EditLabel`" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content text-white">
            <div class="modal-header">
                <h5 class="modal-title" :id="`editProductLabel`+product.prodID">Modal Title</h5>
                <button type="button" :id="`editProductClose`+product.prodID" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body">
                <form method="PUT" @submit.prevent="editProduct">
                    <label class="form-label">ID</label>
                    <input type="number" class="form-control" :value="product.prodID" readonly>
                    <label class="form-label">Product Name</label>
                    <input type="text" class="form-control" v-model="product.prodTitle">
                    <label class="form-label">Product Image</label>
                    <input type="text" class="form-control" v-model="product.prodImg1">
                    <label class="form-label">Description</label>
                    <textarea style="resize:none;" class="form-control" cols="30" rows="2" v-model="product.prodDesc"></textarea>
                    <label class="form-label">Category</label>
                    <input type="text" class="form-control" v-model="product.prodCat">
                    <label class="form-label">Price</label>
                    <input type="number" class="form-control" v-model="product.prodPrice">
                    <label class="form-label">Stock</label>
                    <input type="text" class="form-control" v-model="product.prodStock">
                    <label class="form-label">Price</label>
                    <input type="number" class="form-control" v-model="product.prodPrice">
                    <button type="submit" class="btn btn-grad">Save Changes</button>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-grad" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>