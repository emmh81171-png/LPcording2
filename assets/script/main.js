
// slickの初期設定
$('.cover__slick').slick({
    infinite: true,
    dots: true,
    arrows: false,
    fade: true,
    autoplay: false,
    autoplaySpeed: 5000,
    speed: 600,
    pauseOnHover: false
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
