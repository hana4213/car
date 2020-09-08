/**
 * Global variables
 */
"use strict";

  var materialParallax = $(".parallax-container"),
      userAgent = navigator.userAgent.toLowerCase(),
      isIE = userAgent.indexOf("msie") !== -1 ? parseInt(userAgent.split("msie")[1], 10) : userAgent.indexOf("trident") !== -1 ? 11 : userAgent.indexOf("edge") !== -1 ? 12 : false,
      isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

/**
 * Initialize All Scripts
 */
$(document).ready(function () {
    var isNoviBuilder = window.xMode;
  /**
       * Material Parallax
       * @description Enables Material Parallax plugin
       */
      if (materialParallax.length) {
        var i;
  
        if (!isNoviBuilder && !isIE && !isMobile) {
          materialParallax.parallax();
        } else {
          for (i = 0; i < materialParallax.length; i++) {
            var parallax = $(materialParallax[i]),
              imgPath = parallax.data("parallax-img");
  
            parallax.css({
              "background-image": 'url(' + imgPath + ')',
              "background-attachment": "fixed",
              "background-size": "cover"
            });
          }
        }
      }

  /* testimonials */
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items: 1
  });
});

$(document).ready(function(){
  $('.camera_wrap').camera({
	playPause: false,
	loader: 'none',
	autoAdvance: false,
      height: '725px',
  });

  $('.form-select-time').select2();
  $('#select-year').select2();
  

});
