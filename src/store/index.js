import { createStore } from 'vuex'
const api = 'https://capstone-api-final.herokuapp.com/'
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
      await fetch('https://capstone-api-final.herokuapp.com/register', {
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
      fetch("https://capstone-api-final.herokuapp.com/login", {
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
      fetch(api +'products')
        .then((res) => res.json())
        .then((data) => context.state.products = data.products)
    },
    // async getProduct(context, prodID) {
    //   fetch(api + '/products' + prodID)
    //     .then((res) => res.json())
    //     .then((data) => context.commit('setProduct', data.prods))
      
    // },
    // getproduct: async (context, prodID) => {
    //   let res = await fetch(api + prodID);
    //   let data = await res.json();
    //   let result = data.results;
    //   if (result) {
    //     context.commit('setProduct', result)
    //   } else {
    //     console.log('loading...')
    //   }
    // },
    // async getProducts(context) {
    //   fetch('http://localhost:3000/prod')
    //     .then((res) => res.json())
    //     .then((data) => console.log(data.prods),
    //       context.commit('setProducts', data.prods));
    // },
    async getProduct(context, id) {
      fetch(api + 'products/' + id)
        .then((res) => res.json())
        .then((data) => context.state.product = data.results)
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
