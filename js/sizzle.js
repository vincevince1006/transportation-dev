var visible = true;
// gives all #list paragraph elements a default class of hide for accessibility purposes. This is instead of using 'display:none'
$("#list p").addClass('hide');

$("#list h3").click(function(){
  $('#list h3').find('.fa-angle-up').removeClass('fa-angle-up').addClass('fa-angle-down');
//slide down the link list below the h3 when clicked - but only if its closed
    if(!$(this).next().is( visible ))
    {
      $("#list p").addClass('hide');
      $(this).next().slideUp(0,function(){
    	$(this).removeClass('hide')
         	.slideDown('fast')
  		});
      $(this).find('.fa-angle-down').removeClass('fa-angle-down').addClass('fa-angle-up');
    }
visible = ! visible;
  });