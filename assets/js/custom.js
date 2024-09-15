$(function () {
    $(".toggle-show").click(function(){
        $(this).toggleClass("open");
        $(".nav-content").slideToggle();
    });
    $(window).on('resize', function(){
        if(window.innerWidth > 767){
            $(".nav-content").removeAttr("style");
        }
    });
  });

  
  $(window).on('load', function () {
    $(".plus-pic").click(function () {
      $(this).toggleClass('open');
      $('.submenu-listing').slideToggle();
    });
});
$(".custom-select").each(function() {
  var classes = $(this).attr("class"),
      id      = $(this).attr("id"),
      name    = $(this).attr("name");
  var template =  '<div class="' + classes + '">';
      template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
      template += '<div class="custom-options">';
      $(this).find("option").each(function() {
        template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
      });
  template += '</div></div>';
  
  $(this).wrap('<div class="custom-select-wrapper"></div>');
  $(this).hide();
  $(this).after(template);
});
$(".custom-option:first-of-type").hover(function() {
  $(this).parents(".custom-options").addClass("option-hover");
}, function() {
  $(this).parents(".custom-options").removeClass("option-hover");
});
$(".custom-select-trigger").on("click", function() {
  $('html').one('click',function() {
    $(".custom-select").removeClass("opened");
  });
  $(this).parents(".custom-select").toggleClass("opened");
  event.stopPropagation();
});
$(".custom-option").on("click", function() {
  $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
  $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
  $(this).addClass("selection");
  $(this).parents(".custom-select").removeClass("opened");
  $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
});


$(function () {
  $('.banner-slider').slick({
      dots: true,
      arrows: false, 
      slidesToShow: 4,
      slidesToScroll: 1,
            responsive: [
        {
          breakpoint: 993,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 377,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });  
});

$(function () {
  $('.banner-people').slick({
      dots: true,
      arrows: false, 
      slidesToShow: 6,
      slidesToScroll: 1,
            responsive: [
        {
          breakpoint: 993,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 377,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });  
});











$window = $(window);
$slick_slider = $('.banner-news');
settings = {
      dots: true,
      arrows: false, 
      slidesToShow: 4,
      slidesToScroll: 1,
      variableWidth: true,
            responsive: [
        {
          breakpoint: 993,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 377,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
};
$slick_slider.slick(settings);
$(window).on('load', function () {
  if ($window.width() > 991) {
      $slick_slider.slick('unslick');
    return
  }

});  
