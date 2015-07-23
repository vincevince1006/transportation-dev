var visible = true;
// gives all #list paragraph elements a default class of hide for accessibility purposes. This is instead of using 'display:none'
$("#list p").addClass('hide');

$("#list h3").click(function(){
  $('#list h3').find('.fa-angle-down').removeClass('fa-angle-down').addClass('fa-angle-right');
//slide down the link list below the h3 when clicked - but only if its closed
    if(!$(this).next().is( visible ))
    {
      $("#list p").addClass('hide');
      $(this).next().slideUp(0,function(){
    	$(this).removeClass('hide')
         	.slideDown('fast')
  		});
      $(this).find('.fa-angle-right').removeClass('fa-angle-right').addClass('fa-angle-down');
    }
visible = ! visible;
  });

$(document).ready(function() {
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