require('jquery');
require('bootstrap-sass');

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-28630641-1', 'auto');
ga('send', 'pageview');


// $(function() {
//   $('.hero-bg h1').fadeIn(5000);
// });

// $('.site-logo-link').hover(function() {
//   $(this).find('img').attr('src', '/assets/images/main_logo_flipped.png');
// }, function() {
//   $(this).find('img').attr('src', '/assets/images/main_logo.png');
// });

(function($) {

  if( Modernizr.touch ) {
    $('.portfolio a').css('opacity', 1).css('background', 'rgba(0,0,0,0.4)');
  }
})(jQuery);