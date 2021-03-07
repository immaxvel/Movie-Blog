//login slider//
$(".show-login-btn").on("click", function () {
  $(".login-box").toggleClass("showed");
});
$(".hide-login-btn").on("click", function () {
  $(".login-box").toggleClass("showed");
});

//swiper//
var swiper = new Swiper('.swiper-container', {
effect: 'coverflow',
grabCursor: true,
centeredSlides: true,
loop: true,
slidesPerView: 'auto',
coverflowEffect: {
  rotate: 50,
  stretch: 0,
  depth: 100,
  modifier: 1,
  slideShadows : true,
},
pagination: {
  el: '.swiper-pagination',
},
}); 
//play avengers//
$(".play").on("click", function () {
$(".avenger_trailer").toggleClass("showed");
});
$(".close").on("click", function () {
$(".avenger_trailer").toggleClass("showed");
});
//play MI//
$(".playMI").on("click", function () {
$(".MI_trailer").toggleClass("showed");
});
$(".close_MI").on("click", function () {
$(".MI_trailer").toggleClass("showed");
});
//play Venom//
$(".playVenom").on("click", function () {
$(".Venom_trailer").toggleClass("showed");
});
$(".close_Venom").on("click", function () {
$(".Venom_trailer").toggleClass("showed");
});
