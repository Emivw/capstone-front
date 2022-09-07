<template>
  <!-- Main Content -->
  <div class="container-fluid">
    <div class="row main-content bg-success text-center">
      <div class="col-md-4 text-center company__info">
        <span class="company__logo"
          ><h2><span class=""></span></h2
        ></span>

        <h4 class="company_title"></h4>
      </div>
      <div class="col-md-8 col-xs-12 col-sm-12 login_form">
        <div class="container-fluid">
          <div class="row">
            <h2>Contact Us</h2>
          </div>
          <div class="row">
            <form @submit.prevent="login" class="form-group">
              <div class="row">
                <input
                  type="email"
                  name="email"
                  v-model="email"
                  id="email"
                  class="form__input"
                  placeholder="email"
                />
              </div>
              <div class="row">
                <input
                  type="text"
                  name="subject"
                  v-model="subject"
                  id="subject"
                  class="form__input"
                  placeholder="subject"
                />
              </div>
              <div class="row">
                <textarea  minlength="20" id="message" cols="30" rows="7" placeholder="Your Message*" required></textarea>
              </div>
              <div class="row">
                <button type="submit" class="btn">submit</button>
              </div>
            </form>
          </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      err: "",
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    login() {
      console.log("login");
      const payload = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("login", payload);
    },
  },
};
</script>
<style scoped>
.container-fluid {
  background: url("https://images.pexels.com/photos/235985/pexels-photo-235985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
}
.main-content {
  width: 50%;
  border-radius: 20px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.4);
  margin:  auto;
  display: flex;
}
.company__info {
  background-color: #8b9a46;
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
.btn {
  transition: all 0.5s ease;
  width: 70%;
  border-radius: 30px;
  color: #8b9a46;
  font-weight: 600;
  background-color: #fff;
  border: 1px solid 541212;
  margin-top: 1.5em;
  margin-bottom: 1em;
}
.btn:hover,
.btn:focus {
  background-color: #541212;
  color: #fff;
}
.bg-success {
  background-color: #541212 !important;
}
</style>
