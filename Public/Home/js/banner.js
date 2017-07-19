//网站首页banner动画切换类
function Banner() {
    var cutBanner = function (bannerContainer, bannerList, time) {
        var arrBannerImg = bannerList.find("p");
        var numList = bannerContainer.find(".slider_mark").find("li");
        var aList = bannerContainer.find(".slider_mark").find(".slider_ico");

        var count = bannerList.find("p").length;
        var n = 0;
        var selectnum = 1;
        //bannerList.find("a:not(:first-child)").hide();

        //执行动画事件
        numList.mouseover(function () {
            var imgList = bannerList.find("p").filter(":visible");
            var i = $(this).attr("data") - 1;
            n = i;
            if (i >= count) return;
            if (!imgList.is(':animated'))
                imgList.fadeOut(300).parent().children().eq(i).fadeIn(200);

            $(this).toggleClass("mark_dot_on");
            $(this).siblings().removeAttr("class");
        });

        $(".bLeft").click(function () {
            selectnum = parseInt($(".mark_dot_on").attr("data"));
            var prenum = (selectnum - 1) > 0 ? (selectnum - 1) : count;
            numList.eq(prenum - 1).trigger('mouseover');
        });
        $(".bRight").click(function () {
            selectnum = parseInt($(".mark_dot_on").attr("data"));
            var nextnum = (selectnum + 1) <= count ? (selectnum + 1) : 1;
            numList.eq(nextnum - 1).trigger('mouseover');
        });

        var t = setInterval(function () { showAuto(); }, time);

        //停止动画
        arrBannerImg.hover(function () { clearInterval(t); }, function () { t = setInterval(function () { showAuto(); }, time); });
        aList.hover(function () { clearInterval(t); }, function () { t = setInterval(function () { showAuto(); }, time); });
        $(".bLeft").hover(function () { clearInterval(t); }, function () { t = setInterval(function () { showAuto(); }, time); });
        $(".bRight").hover(function () { clearInterval(t); }, function () { t = setInterval(function () { showAuto(); }, time); });

        //trigger遇到hover无法触发，修改为mouseenter / mouseleave / mouseover / mouseout
        var showAuto = function () {
            n = n >= (count - 1) ? 0 : ++n;
            for (var i = 0; i < bannerContainer.length; i++) {
                numList.eq(n).trigger('mouseover');
            }

        };
    };

    this.CallBanner = function (bannerContainer, bannerList, time) {
        cutBanner(bannerContainer, bannerList, time * 1000);
    };
}






