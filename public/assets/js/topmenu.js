$(window).load(function () {
 	$('.sidenav.top ul > li').click(function (ev) {
 	    $(this).find('>ul').fadeToggle();
 	    ev.stopPropagation();
 	});
 	$('.sidenav.top > ul > li, .sidenav.top > ul > li > ul').mouseleave(function (ev) {
 	    $('.sidenav.top ul > li > ul').fadeOut();
 	    ev.stopPropagation();
 	});
 	$('.sidenav.top > ul').mouseleave(function (ev) {
 	    $(this).fadeOut();
 	    ev.stopPropagation();
 	});
 	$(document).click(function (ev) {
	 	$('.sidenav.top > ul > li ul').fadeOut();
	 	ev.stopPropagation();
 	});
 	$('.sidenav.top ul > li ul').mouseleave(function (ev) {
 	    $(this).fadeOut();
 	    ev.stopPropagation();
 	});

 	$('.sidenav.top ul > li a.back').click(function (ev) {
 	    $(this).parent().parent().fadeOut();
 	    ev.stopPropagation();
 	});
});
$(window).on("load resize", function () {
  if ($(window).width() >= 769) { 
      $(".sidenav.top").removeClass('sidenavhover');
      $(".sidenav.top ul > li ul").hide();
      $(".overlay").fadeOut();
      $(".sidenav.top li.user").removeClass('usershow');
      $(".sidenav.top").removeClass('sidenavhover');
      $(".sidenav.top ul > li ul").hide();
      $(".overlay").fadeOut();
      $(".sidenav.top li.user").removeClass('usershow');
      $(".sidenav.top ul > li.logout").css('position', 'relative');
	  $(".sidenav.top ul > li.logout").css('border-top', '0');
  }
  if ($(window).width() <= 768) {
      $(document).on("swiperight", function () {
          $(".sidenav.top").addClass('sidenavhover');
          $(".overlay").fadeIn();
          $(".sidenav.top li.user").addClass('usershow');
      });
      $(document).on("swipeleft", function () {
          $(".sidenav.top").removeClass('sidenavhover');
          $(".sidenav.top ul > li ul").hide();
          $(".overlay").fadeOut();
          $(".sidenav.top li.user").removeClass('usershow');
      });
      $(".overlay").click(function () {
          $(".sidenav.top").removeClass('sidenavhover');
          $(".sidenav.top ul > li ul").hide();
          $(".overlay").fadeOut();
          $(".sidenav.top li.user").removeClass('usershow');
      });
	  if ($(window).height() < 588) {
	      $(".sidenav.top.sidenavhover ul > li.logout").css('position', 'relative');
	      $(".sidenav.top.sidenavhover ul > li.logout").css('border-top', '0');
	  }
	  if ($(window).height() > 588) {
	      $(".sidenav.top.sidenavhover ul > li.logout").css('position', 'absolute');
	      $(".sidenav.top.sidenavhover ul > li.logout").css('border-top', '1px solid #eeeeee');
	  }
  }

});