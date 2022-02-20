$(function(){
    $('.header__slider').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"> Previous </button>', 
    nextArrow: '<button type="button" class="slick-next"> Next </button>',
    fade: true,
    responsive: [{
        breakpoint: 371,
        settings: {
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000
        }
    }]

    });

    $('.product__name').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.product__content',
    focusOnSelect: true, //переключает слайды 
    vertical: true,
    prevArrow: '<button type="button" class="product-prev"> Previous </button>', 
    nextArrow: '<button type="button" class="product-next"> Next </button>',
    responsive: [
        {
            breakpoint: 891,
            settings: {
                vertical: false,
                slidesToShow: 3,
                arrows: false,
                dots: true
        },
    },
    {
        breakpoint: 461,
        settings: {
            vertical: false,
            slidesToShow: 1,
            arrows: false,
            dots: true
        },
    },
    
    
    ]

    });
    $('.product__content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.product__name',
    fade: true, //способ анимации
    arrows : false
    });

    $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active');

    });

});