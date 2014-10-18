$(window).load(function () {
 	$('.sidenav.right ul > li').click(function (ev) {
 	    $(this).find('>ul').fadeToggle();
 	    ev.stopPropagation();
 	});
 	$('.sidenav.right ul > li a.back').click(function (ev) {
 	    $(this).parent().parent().fadeOut();
 	    ev.stopPropagation();
 	});
});
$(window).on("load resize", function () {
  if ($(window).width() <= 768) {
      $(document).on("swipeleft", function () {
          $(".sidenav.right").addClass('sidenavhover');
          $(".overlay").fadeIn();
          $(".sidenav.right li.user").addClass('usershow');
      });
      $(document).on("swiperight", function () {
          $(".sidenav.right").removeClass('sidenavhover');
          $(".sidenav.right ul > li ul").hide();
          $(".overlay").fadeOut();
          $(".sidenav.right li.user").removeClass('usershow');
      });
      $(".overlay").click(function () {
          $(".sidenav.right").removeClass('sidenavhover');
          $(".sidenav.right ul > li ul").hide();
          $(".overlay").fadeOut();
          $(".sidenav.right li.user").removeClass('usershow');
      });
  }
  if ($(window).width() >= 769) {
      $(".sidenav.right").mouseover(function () {
          $(".sidenav.right").addClass('sidenavhover');
          $(".sidenav.right li.user").addClass('usershow');
          $(".overlay").fadeIn();
      });
      $(".overlay").click(function () {
          $(".sidenav.right").removeClass('sidenavhover');
          $(".sidenav.right ul > li ul").slideUp(100);
          $(".sidenav.right li.user").removeClass('usershow');
          $(".overlay").fadeOut();
      });
  }  if ($(window).height() < 458) {
      $(".sidenav.right ul > li.logout").css('position', 'relative');
      $(".sidenav.right ul > li.logout").css('border-top', '0');
  }
  if ($(window).height() > 458) {
      $(".sidenav.right ul > li.logout").css('position', 'absolute');
      $(".sidenav.right ul > li.logout").css('border-top', '1px solid #eeeeee');
  }
  if ($(window).height() < 588) {
      $(".sidenav.right.sidenavhover ul > li.logout").css('position', 'relative');
      $(".sidenav.right.sidenavhover ul > li.logout").css('border-top', '0');
  }
  if ($(window).height() > 588) {
      $(".sidenav.right.sidenavhover ul > li.logout").css('position', 'absolute');
      $(".sidenav.right.sidenavhover ul > li.logout").css('border-top', '1px solid #eeeeee');
  }
});