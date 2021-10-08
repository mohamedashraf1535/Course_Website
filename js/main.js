var o=$(".navbar .logo").html();$(".mm-logo").append(o);
var e=$(".menu-navbar .menu").html();$(".mm-nav .mm-list").append(e);
var y=$(".nav-top .email-location").html();$(".mm-email-location").append(y);
var z=$(".social").html();$(".mm-social").append(z);

function addClass() {
  var addActive = document.getElementById("menu-mobile");
  var addOverlay = document.getElementById("menu-mobile-overlay");
  addActive.classList.add("active");
  addOverlay.classList.add("active");
}
function removeClass() {
 var removeActive = document.getElementById("menu-mobile");
 removeActive.classList.remove("active");
 var removeOverlay = document.getElementById("menu-mobile-overlay");
 removeOverlay.classList.remove("active");
}