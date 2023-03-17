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
