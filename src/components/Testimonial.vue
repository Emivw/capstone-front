<template>
    <section class="we-offer-area text-center bg-gray">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="site-heading text-center">
                    </div>
                </div>
            </div>
                <div class="row our-offer-items less-carousel">
                    <!-- Single Item -->
                    <div class="col-md-4 col-sm-6 equal-height">
                        <div class="item">
                            <i class="fas fa-pen-fancy"></i>
                            <h4>Authentic</h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            </p>
                        </div>
                    </div>
                    <!-- End Single Item -->

                    <!-- Single Item -->
                    <div class="col-md-4 col-sm-6 equal-height">
                        <div class="item">
                           <i class="fa-solid fa-shop"></i>
                            <h4>Actual Store</h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            </p>
                        </div>
                    </div>
                    <!-- End Single Item -->

                    <!-- Single Item -->
                    <div class="col-md-4 col-sm-6 equal-height">
                        <div class="item">
<i class="fa-solid fa-cart-flatbed"></i>
                            <h4>Same Day Shipment</h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            </p>
                        </div>
                    </div>
                    <!-- End Single Item -->

                    <!-- Single Item -->
                    <div class="col-md-4 col-sm-6 equal-height">
                        <div class="item">
                            <i class="fa-solid fa-cart-flatbed"></i>
                            <h4>Porject Impliment</h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            </p>
                        </div>
                    </div>
                    <!-- End Single Item -->

                    <!-- Single Item -->
                    <div class="col-md-4 col-sm-6 equal-height">
                        <div class="item">
                            <i class="fa-solid fa-calendar-days"></i>
                            <h4>New items every month</h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            </p>
                        </div>
                    </div>
                    <!-- End Single Item -->

                    <!-- Single Item -->
                    <div class="col-md-4 col-sm-6 equal-height">
                        <div class="item">
                           <i class="fa-sharp fa-solid fa-blender-phone"></i>
                            <h4>24/7 Support</h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            </p>
                        </div>
                    </div>
                    <!-- End Single Item -->
                </div>
        </div>
    </section>
</template>

<script>
</script>
<style scoped>
     @import url("https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css");
   .we-offer-area {
    padding: 60px 0;
    min-height: 100vh;
    background: url('https://images.pexels.com/photos/1901028/pexels-photo-1901028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
}
/* // letters */
 
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
 
 
/* ///////////////////////////////////////////////////////////////// */

a, a:hover, a:focus, a:active {
    text-decoraation: none;
    outline: none;
}
ul {
    margin: 0;
    padding: 0;
    list-style: none;
}.bg-gray {
    background-color: #f9f9f9;
}

.site-heading h2 {
  display: block;
  font-weight: 700;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.site-heading h2 span {
  color: #00a01d;
}

.site-heading h4 {
  display: inline-block;
  padding-bottom: 20px;
  position: relative;
  text-transform: capitalize;
  z-index: 1;
}

.site-heading h4::before {
  background: #00a01d none repeat scroll 0 0;
  bottom: 0;
  content: "";
  height: 2px;
  left: 50%;
  margin-left: -25px;
  position: absolute;
  width: 50px;
}

.site-heading {
  margin-bottom: 60px;
  overflow: hidden;
  margin-top: -5px;
}

.carousel-shadow .owl-stage-outer {
  margin: -15px -15px 0;
  padding: 15px;
}
/* services */
.we-offer-area .our-offer-carousel .owl-dots .owl-dot span {
  background: #ffffff none repeat scroll 0 0;
  border: 2px solid;
  height: 15px;
  margin: 0 5px;
  width: 15px;
}

.we-offer-area .our-offer-carousel .owl-dots .owl-dot.active span {
  background: #00a01d none repeat scroll 0 0;
  border-color: #00a01d;
}

.we-offer-area .item {
    background: url('https://images.pexels.com/photos/235985/pexels-photo-235985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1') !important;
  /* background: #ffffff none repeat scroll 0 0; */
  border-left: 2px solid #00a01d;
  -moz-box-shadow: 0 0 10px #cccccc;
  -webkit-box-shadow: 0 0 10px #cccccc;
  -o-box-shadow: 0 0 10px #cccccc;
  box-shadow: 0 0 10px #cccccc;
  overflow: hidden;
  padding: 30px;
  position: relative;
  z-index: 1;
}

.we-offer-area.text-center .item {
  background: #ffffff none repeat scroll 0 0;
  border: medium none;
  padding: 67px 40px 64px;
}

.we-offer-area.text-center .item i {
  background: #00a01d none repeat scroll 0 0;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  color: #ffffff;
  font-size: 40px;
  height: 80px;
  line-height: 80px;
  position: relative;
  text-align: center;
  width: 80px;
  z-index: 1;
  transition: all 0.35s ease-in-out;
  -webkit-transition: all 0.35s ease-in-out;
  -moz-transition: all 0.35s ease-in-out;
  -ms-transition: all 0.35s ease-in-out;
  -o-transition: all 0.35s ease-in-out;
  margin-bottom: 25px;
}

.we-offer-area.text-center .item i::after {
  border: 2px solid #00a01d;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  content: "";
  height: 90px;
  left: -5px;
  position: absolute;
  top: -5px;
  width: 90px;
  z-index: -1;
  transition: all 0.35s ease-in-out;
  -webkit-transition: all 0.35s ease-in-out;
  -moz-transition: all 0.35s ease-in-out;
  -ms-transition: all 0.35s ease-in-out;
  -o-transition: all 0.35s ease-in-out;
}

.we-offer-area.item-border-less .item {
  border: medium none;
}

.we-offer-area .our-offer-items.less-carousel .equal-height {
  margin-bottom: 30px;
}

.we-offer-area.item-border-less .item .number {
  font-family: "Poppins",sans-serif;
  font-size: 50px;
  font-weight: 900;
  opacity: 0.1;
  position: absolute;
  right: 30px;
  top: 30px;
}

.our-offer-carousel.center-active .owl-item:nth-child(2n) .item,
.we-offer-area.center-active .single-item:nth-child(2n) .item {
  background: #00a01d none repeat scroll 0 0;
}

.our-offer-carousel.center-active .owl-item:nth-child(2n) .item i,
.our-offer-carousel.center-active .owl-item:nth-child(2n) .item h4,
.our-offer-carousel.center-active .owl-item:nth-child(2n) .item p,
.we-offer-area.center-active .single-item:nth-child(2n) .item i,
.we-offer-area.center-active .single-item:nth-child(2n) .item h4,
.we-offer-area.center-active .single-item:nth-child(2n) .item p {
  color: #ffffff;
}

.we-offer-area .item i {
  color: #00a01d;
  display: inline-block;
  font-size: 60px;
  margin-bottom: 20px;
}

.we-offer-area .item h4 {
  font-weight: 600;
  text-transform: capitalize;
}

.we-offer-area .item p {
  margin: 0;
}

.we-offer-area .item i,
.we-offer-area .item h4,
.we-offer-area .item p {
  transition: all 0.35s ease-in-out;
  -webkit-transition: all 0.35s ease-in-out;
  -moz-transition: all 0.35s ease-in-out;
  -ms-transition: all 0.35s ease-in-out;
  -o-transition: all 0.35s ease-in-out;
}

.we-offer-area .item::after {
  background: #00a01d none repeat scroll 0 0;
  content: "";
  height: 100%;
  left: -100%;
  position: absolute;
  top: 0;
  transition: all 0.35s ease-in-out;
  -webkit-transition: all 0.35s ease-in-out;
  -moz-transition: all 0.35s ease-in-out;
  -ms-transition: all 0.35s ease-in-out;
  -o-transition: all 0.35s ease-in-out;
  width: 100%;
  z-index: -1;
}

.we-offer-area .item:hover::after {
  left: 0;
}

.we-offer-area .item:hover i,
.we-offer-area .item:hover h4,
.we-offer-area .item:hover p {
  color: #ffffff !important;
}

.we-offer-area.text-center .item:hover i::after {
  border-color: #ffffff !important;
}

.we-offer-area.text-center .item:hover i {
  background-color: #ffffff !important;
  color: #00a01d !important;
}

.we-offer-area.text-left .item i {
  background: #00a01d none repeat scroll 0 0;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  color: #ffffff;
  display: inline-block;
  font-size: 60px;
  height: 100px;
  line-height: 100px;
  margin-bottom: 30px;
  position: relative;
  width: 100px;
  z-index: 1;
  text-align: center;
}

.we-offer-area.text-left .item i::after {
  border: 2px solid #00a01d;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  content: "";
  height: 120px;
  left: -10px;
  position: absolute;
  top: -10px;
  width: 120px;
}
</style>