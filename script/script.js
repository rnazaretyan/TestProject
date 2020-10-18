$(document).ready(function() {
   
    /*$('.label-wrapper').on('click', '.tab', function() {
        $('.label-wrapper').find('.active').removeClass("active");
        $(this).addClass('active');
        $('.tab-form').eq($(this).index()).addClass('active');        
    })*/

    $('.sign-tab').on('click', function(){
        $('.sign-form').removeClass('del');
        $('.reg-form').addClass('del');
       // $('.form-wrapper').css('backgroundColor', '#29285c');
        $(this).addClass('big-font');
        $('.reg-tab').removeClass('big-font');
        $('.square').addClass('animation-reg');
        $('.reg-arrow').removeClass('del');
        $('.sign-arrow').addClass('del');
    });
    $('.reg-tab').on('click', function(){
        $('.reg-form').removeClass('del');
        $('.sign-form').addClass('del');
        //$('.form-wrapper').css('backgroundColor', 'white');
        $(this).addClass('big-font');
        $('.sign-tab').removeClass('big-font');
        $('.square').removeClass('animation-reg');
        $('.square').addClass('animation-sign');
        $('.reg-arrow').addClass('del');
        $('.sign-arrow').removeClass('del');
    });

});

/*$('.reg-tab').on('click', function(){
    $('.reg-form').removeClass('del');
    $('.sign-form').addClass('del');
   // $('.form-wrapper').css('backgroundColor', '#29285c');
    $(this).addClass('big-font');
    $('.sign-tab').removeClass('big-font');
    $('.square').addClass('animation-reg');
});
$('.sign-tab').on('click', function(){
    $('.sign-form').removeClass('del');
    $('.reg-form').addClass('del');
    //$('.form-wrapper').css('backgroundColor', 'white');
    $(this).addClass('big-font');
    $('.reg-tab').removeClass('big-font');
    $('.square').removeClass('animation-reg');
    $('.square').addClass('animation-sign');
});

});*/