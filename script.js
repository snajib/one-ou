$(document).ready(function() {


    //moving and replacing the slides
    $(".slides").sortable({
        placeholder: 'slide-placeholder',
       axis: "y",
       revert: 150,
       start: function(e, ui){
           
           placeholderHeight = ui.item.outerHeight();
           ui.placeholder.height(placeholderHeight + 15);
           $('<div class="slide-placeholder-animator" data-height="' + placeholderHeight + '"></div>').insertAfter(ui.placeholder);
       
       },
       change: function(event, ui) {
           
           ui.placeholder.stop().height(0).animate({
               height: ui.item.outerHeight() + 15
           }, 300);
           
           placeholderAnimatorHeight = parseInt($(".slide-placeholder-animator").attr("data-height"));
           
           $(".slide-placeholder-animator").stop().height(placeholderAnimatorHeight + 15).animate({
               height: 0
           }, 300, function() {
               $(this).remove();
               placeholderHeight = ui.item.outerHeight();
               $('<div class="slide-placeholder-animator" data-height="' + placeholderHeight + '"></div>').insertAfter(ui.placeholder);
           });
           
       },
       stop: function(e, ui) {
           
           $(".slide-placeholder-animator").remove();
           
       },
    });


    //accordian effect
    $( function() {
        $( ".accordion" ).accordion({
            active: false,
          collapsible: true
        });
      } );

      


    //hide with resize

    $(window).resize(function() {

        if($(window).width() < 490) {
            $(".menu li").fadeOut();
        }

        else {
            $(".menu li").fadeIn();
        }
    
        if($(window).width() < 214) {
            $(".user-name-position").fadeOut();
        }

        else {
            $(".user-name-position").fadeIn();
        }
        

    });


})

