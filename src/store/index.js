import { createStore } from 'vuex'
const api = 'https://capstone-api-final.herokuapp.com/'
export default createStore({
  state: {
    user: null,
    users: null,
    products: null,
    product: null,
    errMsg: null
  },
  getters: {
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setProduct(state, product) {
      state.product = product;
    },
    setUser(state, user) {
      state.user = user;
    },
    setUsers(state, users) {
      state.users = users;
    },
    setErrMsg(state, errMsg) {
      state.errMsg = errMsg;

    }
  },
  actions: {
    register: async (context, payload) => {
      console.log("Hi")
      try {
        await fetch("https://capstone-api-final.herokuapp.com/auth/register", {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
        })
          .then((res) => res.json())
          .then((data) => {

            let { user } = data;
            console.log(user);
            context.commit("setUser", user);
            // .then(() => console.log(context.state.user))
            // alert('Login in success')
            // router.push("/products");
          })
          .catch((err) => {
            context.commit('setErrMsg', err);
          });


      } catch (e) {
        context.commit('setErrMsg', e.message)
      }


    },
    login: async (context, payload) => {
      console.log("Hi")
      try {
        await fetch("https://capstone-api-final.herokuapp.com/auth/login", {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
        })
          .then((res) => res.json())
          .then((data) => {

            let { user } = data;
            console.log(user);
            context.commit("setUser", user);
            // .then(() => console.log(context.state.user))
            // alert('Login in success')
            // router.push("/products");
          })
          .catch((err) => {
            context.commit('setErrMsg', err);
          });


      } catch (e) {
        context.commit('setErrMsg', e.message)
      }


    },
    async getProducts(context) {
      fetch(api + 'products')
        .then((res) => res.json())
        .then((data) => context.state.products = data.products)
    },
    async getProduct(context, id) {
      console.log('hi');
      fetch(api + 'products/' + id)
        .then((res) => res.json())
        .then((data) => console.log(context.state.product = data.product))
      
    },
    createProduct: async (context, payload) => {
      console.log("Hi")
      try {
        await fetch(api + 'products/', {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
        })
          .then((res) => res.json())
          .then((data) => {

            let { product } = data;
            console.log(user);
            context.commit("setProduct", product);
            // .then(() => console.log(context.state.user))
            // alert('Login in success')
            // router.push("/products");
          })
          .catch((err) => {
            context.commit('setErrMsg', err);
          });


      } catch (e) {
        context.commit('setErrMsg', e.message)
      }


    },
    updateProduct: async (context, payload) => {
      console.log("Hi")
      try {
        await fetch(api + 'products/' + id, {
          method: "PATCH",
          body: JSON.stringify(payload),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
        })
          .then((res) => res.json())
          .then((data) => {

            let { product } = data;
            console.log(user);
            context.commit("setProduct", product);
            // .then(() => console.log(context.state.user))
            // alert('Login in success')
            // router.push("/products");
          })
          .catch((err) => {
            context.commit('setErrMsg', err);
          });


      } catch (e) {
        context.commit('setErrMsg', e.message)
      }


    },
    async getUsers(context) {
      fetch(api + 'user')
        .then((res) => res.json())
        .then((data) => context.state.users = data.users)
    },
    async getUser(context, id) {
      console.log('hi');
      fetch(api + 'user/' + id)
        .then((res) => res.json())
        .then((data) => console.log(context.state.user = data.users))

    },
    // async getProductByCat(context, category) {
    //   fetch('http://localhost:3000/prodCat/' + category)
    //     .then((res) => res.json())
    //     .then((data) =>
    //       context.commit('setProducts', data.results))
    // },
  },
  modules: {
  }
})
