$(document).on('ready page:load turbolinks:load', function() {
  // Add meta view port
  $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1">');

  // Add remove Collapse class
  if ($(window).width() <= 768) {
    $('#tabs').addClass('collapse');
  } else {
    $('#tabs').removeClass('collapse');
  }

  $(window).resize(function(){
    if ($(window).width() <= 768) {
      $('#tabs').addClass('collapse');
    } else {
      $('#tabs').removeClass('collapse');
    }
  });

  // Add burger
  html_responsive = ' \
    <ul class="header-item tabs mobile"> \
      <li> \
        <button class="navbar-toggle button_mobile_burger" type="button" data-toggle="collapse" href="#tabs" aria-expanded="true" aria-controls="tabs"> \
          <span class="sr-only">Toggle navigation</span> \
          <span class="icon-bar"></span> \
          <span class="icon-bar"></span> \
          <span class="icon-bar"></span> \
        </button> \
      </li> \
    </ul> \
  '

  if (!$('.header-item').hasClass('mobile')) {
    $(html_responsive).insertAfter('#site_title');
  }

  // Dropdown menus
  $('.has_nested').addClass('dropdown');
  $('.has_nested > a').addClass('dropdown-toggle');
  $('.has_nested > ul').addClass('dropdown-menu');
  $('.has_nested > a').attr({
    "data-toggle" : "dropdown",
    "role" : "button",
    "aria-haspopup" : "true",
    "aria-expanded" : "false"
  });
  $('.has_nested > a').append('<span class="caret"></span>');

});
