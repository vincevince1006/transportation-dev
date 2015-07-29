$("#list h3").click(function(){
      if($(this).next().hasClass('hide')) {
          $(this).next().slideDown(200,function(){
            $(this).removeClass('hide').addClass('show').removeAttr('style');
          });
        $(this).find('.fa-angle-right').removeClass('fa-angle-right').addClass('fa-angle-down');
      } else {
          $(this).next().slideUp(300,function(){
            $(this).addClass('hide').removeClass('show').removeAttr('style');
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