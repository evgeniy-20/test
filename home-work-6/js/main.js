$(function(){
    tabInit();
    sliderInit();
})
function tabInit() {
    $(".tabs").tabs();
}
function sliderInit() {
    $('.slick-slider').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',

    });
}