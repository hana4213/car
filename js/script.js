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

  $('#select-time').select2();
  $('#select-year').select2();

  var today = moment().format('dddd DD MMMM YYYY');
  $('#pick-up-date').bootstrapMaterialDatePicker({
    time: false,
    format: 'dddd DD MMMM YYYY',
    minDate: today,
    year: false
  });
  
  $('.form-input').focus(function(){
    let data = $(this).data('id');
    $('.label-input-'+data).addClass('label-disable');
    var text = $(this).val();
    console.log('t1:'+text);
  });

  $('.form-input').focusout(function(){
    let data = $(this).data('id');
    var text = $(this).val();
    var mail = $(this).data('mail');
    var phone = $(this).data('phone');
    console.log(text);
    if(text == '') {
      $('.error-'+data).text('The text field is required.');
      $('.label-input-'+data).removeClass('label-disable');
    } else {
      $('.label-input-'+data).addClass('label-disable');
      if(mail == '1') {
        let repx = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;
        let result = repx.test(text);
        if(result == false) {
          $('.error-'+data).text('The email is not a valid email.');
        } else {
          $('.error-'+data).text('');
        }
      }  else if(phone == '1') {
        let repx = /^[0-9]{9,11}$/;
        let result = repx.test(text);
        if(result == false) {
          $('.error-'+data).text('Only numbers are required.');
        } else {
          $('.error-'+data).text('');
        }       
      } else {
        $('.error-'+data).text('');
      }
    }
  });

  $(window).scroll(function() {
   var hT = $('.services h2').offset().top,
       hH = $('.in-left h4').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS >= (hT+hH-wH)){
       $('.in-left').addClass('fade-in-left');
   }
  });

  $(window).scroll(function() {
   var hT = $('.in-right h4').offset().top,
       hH = $('.in-right h4').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH)){
       $('.in-right').addClass('fade-in-right');
   }
  });

  $(window).scroll(function() {
   var hT = $('.price h2').offset().top,
       hH = $('.price .box .title').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH)){
       $('.price .box').addClass('fade-in-up');
   }
  });

  $(window).scroll(function() {
   var hT = $('.learn h2').offset().top,
       hH = $('.learn .box img').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH)){
       $('.learn .box').addClass('fade-in-up');
   }
  });
});

$(document).ready(function(){
  $('.camera_wrap').camera({
    playPause: false,
    loader: 'none',
    autoAdvance: false,
    height: '725px',
  });
});
