$("#list h3").click(function(){
      if($(this).next().hasClass('hide')) {
          $(this).next().slideUp(0,function(){
            $(this).removeClass('hide').slideDown(400);
          });
        $(this).find('.fa-angle-right').removeClass('fa-angle-right').addClass('fa-angle-down');
      } else {
          $(this).next().slideUp(400,function(){
            $(this).addClass('hide').removeAttr('style');
          });
        $(this).find('.fa-angle-down').removeClass('fa-angle-down').addClass('fa-angle-right');
      }
});

$(function() {
    // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);
});

function checkSize() {
  if ($('.arrow').css('display') == 'block') {  
    $('.arrow').removeClass('fa-arrow-right').addClass('fa-arrow-down');
  } else {
    $('.arrow').removeClass('fa-arrow-down').addClass('fa-arrow-right');    
  }
};