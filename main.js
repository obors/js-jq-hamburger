// $(".hamburger-menu.active").click(function (){
//   ('.hamburger-menu').css('display','block');
//
// });
//
//
// function showHide(){
//   var click = document.getElementByClassName("fas fa-times")
//   if (("hamburger-menu").style.display="none"){
//     ("hamburger-menu").style.display="block";
//
//   }else {
//     ("hamburger-menu").style.display="none";
//   }
//
// }

//   document.getElementsByClassName("close").addEventListener("click", myFunction);
  // var hamburgerMenu = getElementsByClassName("hamburger-menu");
//   function myFunction() {
//   document.getElementById("LinkDisplay").style.display="block" ;
// }
// $("i").click(function (){
//
//   $(".hamburger-menu").addClass(".active")
// })
$(".header-right > a").click(function() {

  $(".hamburger-menu").addClass('active');
})
$(".close").click(function() {

  $(".hamburger-menu").removeClass('active');
})
// // const hamburgerMenu = document.querySelector("hamburger-menu")

// Individuiamo l´elemento da clickare x visualizzare il menu hamburger
// $(".header-right > a ").click(function (){
//
//   $(".hamburger-menu").show();
//
//
// });
//
// //Individuiamo l´elemento da clickare x nascondere il menu hamburger
//
// $(".close ").click(function (){
//
//   $(".hamburger-menu").hide();
//
//
// });
