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
