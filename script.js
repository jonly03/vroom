$(document).ready(() => {
  $("#opening").addClass("animate");

  let vh = $(window).height();
  let bodyH = (96 * vh) / 100;
  $("body").css("height", `${bodyH}px`);
});
