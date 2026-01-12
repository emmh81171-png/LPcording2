
// slickの初期設定
$('.voices__slick').slick({
    infinite: false,
    dots: true,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 5000,
    speed: 600,
    pauseOnHover: false,

    // カスタム矢印の設定
    prevArrow: $('.voices__arrow-prev'),
    nextArrow: $('.voices__arrow-next'),

    // PC（768px以上）のデフォルト設定
    slidesToShow: 3,
    slidesToScroll: 3,

    responsive: [
        {
            // 768px 未満（スマホ）の設定
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

// アコーディオンのタイトルがクリックされたら
$('.question__acordion').on('click', function (e) {
    // .accordion-contentを選択
    var content = $(this).next();

    // .accordion-contentを表示・非表示
    content.slideToggle();
});


$('.question__acordion').on('click', function () {
    $(this).toggleClass('active');
});
