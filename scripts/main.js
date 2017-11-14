//nav導覽列
$(function () {
    $(".hamburger").click(function () {
        $(this).toggleClass("hamburger-x");
        $("nav ul").slideToggle();
        $("nav").toggleClass("nav-change");
        $("nav li a").toggleClass("a-change");
        $(".logo svg path").toggleClass("svg-path-change");
    });

    $(window).resize(function () {
        var w = $(window).width();

        if (w > 750) {
            $("nav ul").show();
        } else {
            $("nav ul").hide();
            $(".hamburger").removeClass("hamburger-x");
            $("nav").removeClass("nav-change");
            $("nav li a").removeClass("a-change");
            $(".logo").removeClass("logo-change");
            $(".logo svg path").removeClass("svg-path-change");
        }
    });
});


//情境圖Slider
$(function () {
    $(".slider").bxSlider({
        mode: "horizontal",
        speed: 450,
        auto: false,
        easing: "cubic-bezier(.62,0,.05,1)",
    });
});


//滑鼠移入圖片時出現圖說連結
//滑鼠移入.a-line時變色
$(function () {
    var duration = 300;
    var $images = $(".slider li, .pro-1, .pro-2, .pro-3");
    var $a = $(".a-line");

    $images
        .on("mouseover", function () {
            $(this).find("figcaption").stop(true).animate({
                opacity: 1,
                left: 50
            }, 400);
            $(this).find(".shadow").stop(true).animate({
                opacity: 1
            }, duration);
        })
        .on("mouseout", function () {
            $(this).find("figcaption").stop(true).animate({
                opacity: 0,
                left: 150
            }, 400);
            $(this).find(".shadow").stop(true).animate({
                opacity: 0
            }, duration);
        });

    $a
        .on("mouseover", function () {
            $(this).stop(true).addClass("a-line-hover").animate({
                opacity: .7
            }, 150);
        })
        .on("mouseout", function () {
            $(this).stop(true).removeClass("a-line-hover").animate({
                opacity: 1
            }, 150);
        });
});


//視窗寬度小於某值時，抓取.seq-title高度以設定.seq2高度和.seq-next位置
$(function () {
    var w = $(window).width();
    var a = $(".seq2 .seq-title").height();
    var b = w * .614 + a + 247;
    var c = w * .307 - b * .5 + 107;

    if (w < 883) {
        $(".seq2").css("height", b);
        $(".seq2 .seq-next").css("top", c);
    }

    $(window).resize(function () {
        var w = $(window).width();
        var a = $(".seq2 .seq-title").height();
        var b = w * .614 + a + 247;
        var c = w * .307 - b * .5 + 107;

        if (w < 883) {
            $(".seq2").css("height", b);
            $(".seq2 .seq-next").css("top", c);
        } else {
            $(".seq2").css("height", 480);
            $(".seq2 .seq-next").css("top", -26);
        }
    });
});


//頁首第二張背景圖RWD換圖
$(function () {
    var w = $(window).width();

    if (w < 1200) {
        $("#step2 img").attr("src", "img/top/Top-2-2_black.jpg");
    } else {
        $("#step2 img").attr("src", "img/top/Top-2_black.jpg");
    }

    $(window).resize(function () {
        var w = $(window).width();

        if (w < 1200) {
            $("#step2 img").attr("src", "img/top/Top-2-2_black.jpg");
        } else {
            $("#step2 img").attr("src", "img/top/Top-2_black.jpg");
        }
    });
});


//頁首背景圖自動縮放
(function () {
    var options = {
        //    minWidth: 800,
        //    minHeight: 600,
    };

    //　元素快取
    var
        $window = $(window),
        $contents = $('#step1,#step2,#step3,#textt'),
        //    $background = $('#background'),
        $background = $('#sequence'),
        $img = $background.find('img');


    //　將背景圖調整為畫面置中
    function adjustImage(_obj) {
        var
            ww = $window.width(),
            wh = $window.height(),
            iw = _obj.width(),
            ih = _obj.height(),
            scale = Math.max(ww / iw, wh / ih),
            sw = Math.floor(iw * scale),
            sh = Math.floor(ih * scale),
            moveX = Math.floor((ww - sw) / 2),
            /*左右置中*/
            moveY = Math.floor((wh - sh) / 2);

        _obj.css({
            width: sw,
            height: sh,
            left: moveX,
            /*左右置中*/
            top: moveY
        });
    }

    //　配合瀏覽器視窗大小重新調整圖片外框大小
    function resize() {
        var
            ww = $window.width(),
            wh = $window.height(),
            _opw = options.minWidth,
            _oph = options.minHeight,
            _res = {
                w: _opw > ww ? _opw : ww,
                h: _oph > wh ? _oph : wh
            };

        $background.css({
            width: _res.w,
            height: _res.h
        });

        $contents.css({
            width: _res.w,
            height: _res.h
        });

        $background.find('img').each(function () {
            adjustImage($(this));
        });
    }


    $window.on('resize', resize);
    $window.on('load', function () {
        setTimeout(function () {
            $contents.css('background', 'none').fadeIn();
        }, 400);
        resize();
    });
}());
