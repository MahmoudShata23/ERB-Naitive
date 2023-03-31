/* global bootstrap: false */
(() => {
  "use strict";
  const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.forEach((tooltipTriggerEl) => {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });
})();
$("#toggle-sidebar").click(function () {
  $("#small-sidebar").toggleClass("hide");
  $("#sidebar").toggleClass("hide");
});
$("#buttonOffcanvas").click(function () {
  $("#offcanvasClose").toggleClass("show");
  // $("#sidebar").toggleClass("hide");
});
function openCloseNav(navName, buttonName, backdrop) {
  $(`#${navName}`).toggleClass("show");
  $(`#${backdrop}`).toggleClass("show");
  $(`#${buttonName}`).toggleClass("show");
}
function animated(x) {
  $(x).addClass("animated");
  // setTimeout(() => {
  //   $(x).removeClass("animated");
  // }, 10000);
}
function noneAnimated(x) {
  $(x).removeClass("animated");
  // setTimeout(() => {
  //   $(x).removeClass("animated");
  // }, 10000);
}
$('.form-show-data').ready(function(){
  $(".toggle-edit-user").click(function(){
    $(".form-show-data").toggle(200);
    $("#editForm").toggle(200)
  });
});

$(document).ready(function() {

    
  var readURL = function(input) {
      if (input.files && input.files[0]) {
          var reader = new FileReader();
          reader.onload = function (e) {
              $('.profile-pic').attr('src', e.target.result);
          }
          reader.readAsDataURL(input.files[0]);
      }
  }
  $(".file-upload").on('change', function(){
      readURL(this);
  });
  $(".upload-button").on('click', function() {
     $(".file-upload").click();
  });
});