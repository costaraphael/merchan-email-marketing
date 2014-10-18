$(window).load(function () {
 	$('.sidenav.topf ul > li').click(function (ev) {
 	    $(this).find('>ul').fadeToggle();
 	    ev.stopPropagation();
 	});
 	$('.sidenav.topf > ul > li, .sidenav.topf > ul > li > ul').mouseleave(function (ev) {
 	    $('.sidenav.topf ul > li > ul').fadeOut();
 	    ev.stopPropagation();
 	});
 	$('.sidenav.topf > ul').mouseleave(function (ev) {
 	    $(this).fadeOut();
 	    ev.stopPropagation();
 	});
 	$(document).click(function (ev) {
	 	$('.sidenav.topf > ul > li ul').fadeOut();
	 	ev.stopPropagation();
 	});
 	$('.sidenav.topf ul > li ul').mouseleave(function (ev) {
 	    $(this).fadeOut();
 	    ev.stopPropagation();
 	});

 	$('.sidenav.topf ul > li a.back').click(function (ev) {
 	    $(this).parent().parent().fadeOut();
 	    ev.stopPropagation();
 	});
});
$(window).on("load resize", function () {
  if ($(window).width() >= 769) { 
      $(".sidenav.topf").removeClass('sidenavhover');
      $(".sidenav.topf ul > li ul").hide();
      $(".overlay").fadeOut();
      $(".sidenav.topf li.user").removeClass('usershow');
      $(".sidenav.topf").removeClass('sidenavhover');
      $(".sidenav.topf ul > li ul").hide();
      $(".overlay").fadeOut();
      $(".sidenav.topf li.user").removeClass('usershow');
      $(".sidenav.topf ul > li.logout").css('position', 'relative');
	  $(".sidenav.topf ul > li.logout").css('border-top', '0');
  }
  if ($(window).width() <= 768) {
      $(document).on("swiperight", function () {
          $(".sidenav.topf").addClass('sidenavhover');
          $(".overlay").fadeIn();
          $(".sidenav.topf li.user").addClass('usershow');
      });
      $(document).on("swipeleft", function () {
          $(".sidenav.topf").removeClass('sidenavhover');
          $(".sidenav.topf ul > li ul").hide();
          $(".overlay").fadeOut();
          $(".sidenav.topf li.user").removeClass('usershow');
      });
      $(".overlay").click(function () {
          $(".sidenav.topf").removeClass('sidenavhover');
          $(".sidenav.topf ul > li ul").hide();
          $(".overlay").fadeOut();
          $(".sidenav.topf li.user").removeClass('usershow');
      });
	  if ($(window).height() < 588) {
	      $(".sidenav.topf.sidenavhover ul > li.logout").css('position', 'relative');
	      $(".sidenav.topf.sidenavhover ul > li.logout").css('border-top', '0');
	  }
	  if ($(window).height() > 588) {
	      $(".sidenav.topf.sidenavhover ul > li.logout").css('position', 'absolute');
	      $(".sidenav.topf.sidenavhover ul > li.logout").css('border-top', '1px solid #eeeeee');
	  }
  }

});