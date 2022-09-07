<template>
    <div class="container-fluid">
    <div class="p-5 text-white">
            <h1 class="display-3">Noir Gentlemen Gifts</h1>
            <p class="lead">WELCOME TO THE NOIR WHERE WE KEEP THE GENTS LOOKING LIKE GENTLEMEN</p>
            <hr class="my-2">
<div class="center">
  <div class="down"></div>
</div>
    </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.container{
        top: 500px;
    }
    .center {
  position: absolute;
  top: 96%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.down {
  position: relative;
  width: 50px;
  height: 80px;
  border-radius: 25px;
  background: transparent;
  border:  4px solid #fff;
  overflow: hidden;
}
.down:before {
  content: "";
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #fff;
  left: 50%;
  top: 10px;
  transform: translate(-50%, 0);
  animation: animate 1s infinite linear;
}
.down:after {
  content: "";
  position: absolute;
  width: 6px;
  height: 15px;
  border-radius: 50%;
  background: #fff;
  left: 50%;
  top: 5px;
  transform: translate(-50%, 0);
  border-radius: 3px;
}
@keyframes animate {
  0% {
    transform: translate(-50%, 20px);
    opacity: 0;
  }
  50% {
    transform: translate(-50%, 60px);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, 100px);
    opacity: 0;
  }
}
.container-fluid {
height: 100vh;
background: url('https://c.wallhere.com/photos/87/c9/fury_noirblanc_plymouth_voiture_car_monochrome_nb_blackandwhite-524603.jpg!d');
background-size: cover;
}
 /* lights*/
@import url('https://fonts.googleapis.com/css2?family=Londrina+Outline&Open+Sans:wght@700&display=swap');
 html {
	 box-sizing: border-box;
}
 *, *:before, *:after {
	 box-sizing: inherit;
}
 body {
	 background-image: radial-gradient(#3a3a3a, #252525);
	 height: 100vh;
}
 .container {
	 display: flex;
	 flex-direction: column;
	 align-items: center;
	 justify-content: center;
	 text-transform: uppercase;
	 height: 100vh;
}
 .name {
	 animation: blink 3s infinite linear alternate;
	 color: #fff;
	 font-family: '
	Londrina Outline'
	, sans-serif;
	 font-size: 8rem;
	 font-weight: 700;
	 text-align: center;
	 text-transform: uppercase;
	 text-shadow: 0 0 5px #ff7bac, 0 0 10px #ff7bac, 0 0 20px #ff7bac, 0 0 40px #ff7bac, 0 0 80px #ff7bac, 0 0 100px #ff7bac, 0 0 120px #ff7bac;
}
 .name >
 .letter {
	 margin: 0 9px;
}
 @keyframes blink {
	 60%, 70%, 79% {
		 opacity: 1;
	}
	 65%, 67%, 76%, 78% {
		 opacity: 0.2;
	}
	 66%, 69%, 77% {
		 opacity: 0.8;
	}
}
 .surname {
	 animation: border-flickr 6s ease-in-out 6.18s infinite alternate both;
	 color: #d6d1e8;
	 font-family: '
	Open Sans'
	, sans-serif;
	 font-size: 2rem;
	 font-weight: 600;
	 padding: 8px 16px;
	 text-align: center;
	 text-transform: uppercase;
	 text-shadow: #a48ff2 2px 2px 10px;
}
 .surname >
 .letter {
	 margin: 0 20px;
}
 .surname >
 .letter--0 {
	 animation: flickr 6s ease-in-out 0.15s infinite alternate both;
}
 .surname >
 .letter--1 {
	 animation: flickr 6s ease-in-out 4.38s infinite alternate both;
}
 .surname >
 .letter--2 {
	 animation: flickr 6s ease-in-out 2.59s infinite alternate both;
}
 .surname >
 .letter--3 {
	 animation: flickr 6s ease-in-out 0.92s infinite alternate both;
}
 .surname >
 .letter--4 {
	 animation: flickr 6s ease-in-out 0.55s infinite alternate both;
}
 .surname >
 .letter--5 {
	 animation: flickr 6s ease-in-out 8.14s infinite alternate both;
}
 .surname >
 .letter--6 {
	 animation: flickr 6s ease-in-out 4.79s infinite alternate both;
}
 .surname >
 .letter--7 {
	 animation: flickr 6s ease-in-out 5.68s infinite alternate both;
}
 .surname >
 .letter--8 {
	 animation: flickr 6s ease-in-out 0.08s infinite alternate both;
}
 @keyframes flickr {
	 0%, 2%, 35%, 37%, 39%, 41%, 100% {
		 opacity: 1;
	}
	 1%, 3%, 34%, 36%, 38%, 40% {
		 opacity: 0;
	}
}
 @keyframes border-flickr {
	 0%, 2%, 4%, 6%, 33%, 35%, 37%, 39%, 41%, 100% {
		 border: 2px solid white;
		 box-shadow: #a48ff2 0px 0px 10px, inset #a48ff2 2px 2px 10px;
	}
	 1%, 3%, 5%, 34%, 36%, 38%, 40% {
		 border-color: transparent;
		 box-shadow: unset;
	}
}
 
 


</style>