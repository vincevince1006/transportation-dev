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

$(window).resize(function(){
  if ($(window).width() <= 685) {  
    $('#timeline').find('.fa-arrow-right').removeClass('fa-arrow-right').addClass('fa-arrow-down');
  } else { 
    $('#timeline').find('.fa-arrow-down').removeClass('fa-arrow-down').addClass('fa-arrow-right');
  }
});