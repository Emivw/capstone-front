import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null,
    users: null,
    products: null,
    product: null
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
    }
  },
  actions: {
    register: async (context, data) => {
      console.log("Sup")
      await fetch('https://capstone-api-final.herokuapp.com//register', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
        .then(res => res.json())
        .then(userData => console.log(userData))
    },
    login: async (context, data) => {
      console.log("Hi")
      fetch("https://capstone-api-final.herokuapp.com//login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          let user = data.msg
          context.commit("setUser", user);
          // .then(() => console.log(context.state.user))
          // alert('Login in success')
          // router.push("/products");
        });
      
      
    },
    async getProducts(context) {
      fetch('https://capstone-api-final.herokuapp.com/products/')
        .then((res) => res.json())
        .then((data) => context.state.products = data.prods)
    },
    async getProduct(context, id) {
      fetch('https://capstone-api-final.herokuapp.com/products/' + prodID)
        .then((res) => res.json())
        .then((data) => context.commit('setProduct', data.prods))
      
    },
    // async getProducts(context) {
    //   fetch('http://localhost:3000/prod')
    //     .then((res) => res.json())
    //     .then((data) => console.log(data.prods),
    //       context.commit('setProducts', data.prods));
    // },
    // async getProduct(context, id) {
    //   fetch('http://localhost:3000/prod/' + id
    //     .then((res) => res.json())
    //     .then((data) => context.commit('setProduct', data.prod))
    //   )
    // },
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
