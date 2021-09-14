// scrollspy

$(document).ready(function () {
  var dolly = $("a.nav-link");

  $(document).scroll(function () {
    dolly.each(function () {
      var container = $(this).attr("href");
      var containerOffset = $(container).offset().top;
      var containerHeight = $(container).outerHeight();
      var containerBottom = containerOffset + containerHeight;
      var scrollPosition = $(document).scrollTop();

      if (
        scrollPosition < containerBottom - 20 &&
        scrollPosition >= containerOffset - 20
      ) {
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
      }
    });
  });
});

// navigation toggle

$(document).ready(function () {
  $("#check").click(function () {
    $(".menu_item").slideToggle("1000");
  });
});

$(document).ready(function () {
  $("li a").click(function () {
    $(".menu_item").hide("1000");
  });
});
