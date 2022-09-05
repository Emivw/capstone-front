<template>
	<!-- Main Content -->
	<div class="container-fluid">
		<div class="row main-content bg-success text-center">
			<div class="col-md-4 text-center company__info" v-if="user">
				<span class="company__logo"><h2><span class="fa fa-android"></span></h2></span>
				<h4 class="company_title" >welcome {{ user.fullname }}</h4>
			</div>
			<div class="col-md-8 col-xs-12 col-sm-12 login_form " v-else>
				<div class="container-fluid">
					<div class="row">
						<h2>Sign Up</h2>
					</div>
					<div class="row">
						<form control="" method="POST" @submit.prevent="register" class="form-group" >
							<div class="row">
								<input type="text" name="fullname" v-model="fullname" id="fullname" class="form__input" placeholder="Full name">
							</div>
              	<div class="row">
								<input type="email" name="email" v-model="email" id="email" class="form__input" placeholder="Email">
							</div>
							<div class="row">
								<input type="text" name="number" v-model="phone" id="number" class="form__input" placeholder="Phone number">
							</div>
							<div class="row">
								<input type="password" name="password" v-model="password" id="password" class="form__input" placeholder="Password">
							</div>
							<div class="row">
								<input type="checkbox" name="remember_me" id="remember_me" class="">
								<label for="remember_me">Remember Me!</label>
							</div>
							<div class="row">
								<input type="submit" value="Submit" class="btn">
							</div>
						</form>
					</div>
					<div class="row">
						<p>Already have a Account? 
					<router-link to="login">
						<a href="#">Login Here</a>
					</router-link>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<scripts>
export default {
	  data() {
    return {
      fullname: "",
      email: "",
      phone: "",
      password: "",
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    register() {
      const user = {
        fullname: this.fullname,
        email: this.email,
        phone: this.phone,
        password: this.password,
      };
      return this.$store.dispatch("register", user);
    },
  },
};
</scripts>
<style scoped>
	.container-fluid{  
		background: url('https://images.pexels.com/photos/235985/pexels-photo-235985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
		background-size: cover;
}
.main-content{
	width: 50%;
	border-radius: 20px;
	box-shadow: 0 5px 5px rgba(0,0,0,.4);
	margin: 5em auto;
	display: flex;
}
.company__info{
	background-color: #541212;
	border-top-left-radius: 20px;
	border-bottom-left-radius: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	color: #fff;
}
.fa-android{
	font-size:3em;
}
@media screen and (max-width: 640px) {
	.main-content{width: 90%;}
	.company__info{
		display: none;
	}
	.login_form{
		border-top-left-radius:20px;
		border-bottom-left-radius:20px;
	}
}
@media screen and (min-width: 642px) and (max-width:800px){
	.main-content{width: 70%;}
}
.row > h2{
	color:#541212;
}
.login_form{
	background-color: #fff;
	border-top-right-radius:20px;
	border-bottom-right-radius:20px;
	border-top:1px solid #ccc;
	border-right:1px solid #ccc;
}
form{
	padding: 0 2em;
}
.form__input{
	width: 100%;
	border:0px solid transparent;
	border-radius: 0;
	border-bottom: 1px solid #aaa;
	padding: 1em .5em .5em;
	padding-left: 2em;
	outline:none;
	margin:1.5em auto;
	transition: all .5s ease;
}
.form__input:focus{
	border-bottom-color: #541212;
	box-shadow: 0 0 5px rgba(0,80,80,.4); 
	border-radius: 4px;
}
.btn{
	transition: all .5s ease;
	width: 70%;
	border-radius: 30px;
	color:#8B9A46;
	font-weight: 600;
	background-color: #fff;
	border: 1px solid #541212;
	margin-top: 1.5em;
	margin-bottom: 1em;
}
.btn:hover, .btn:focus{
	background-color: #541212;
	color:#fff;
}
.bg-success {
    background-color: #541212!important;
}
</style>

