$(function(){
    $('.header__slider').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"> Previous </button>', 
    nextArrow: '<button type="button" class="slick-next"> Next </button>',
    fade: true

    });

    $('.product__name').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.product__content',
    focusOnSelect: true, //переключает слайды 
    vertical: true,
    prevArrow: '<button type="button" class="product-prev"> Previous </button>', 
    nextArrow: '<button type="button" class="product-next"> Next </button>'

    });
    $('.product__content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.product__name',
    fade: true, //способ анимации
    arrows : false
    });

});