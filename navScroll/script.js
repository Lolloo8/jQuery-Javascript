

$(window).scroll(function(){
    if($(window).scrollTop() <= 100){
        jQuery('.header').removeClass('test');
    } else {
        jQuery('.header').addClass('test');
    }
});