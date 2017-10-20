// if (document.domain != "zizhiguanjia.com" && document.domain != "www.zizhiguanjia.com" && document.domain != "localhost" && document.domain != "192.168.1.128") {
//     window.location.href = "http://www.zizhiguanjia.com/";
// }
$("#loginout").click(function () {
    var message = "确定要退出当前用户吗？";
    if (confirm(message)) {
        $.post("/user/exituser", "", function (data) {
            if (data.IsSuccess) {
                location.href = "/";
            }
        })
    }
})
$(document).ready(function () {
    if (window.location.href != "http://localhost:7676/" && window.location.href != "http://www.zizhiguanjia.com/" && window.location.href != "http://192.168.1.128/") {
        $(".nav_box").addClass("nav_box_bottom");
        $(".pull_nav").mouseover(function () { $(".pull_box").show(); }).mouseout(function () { $(".pull_box").hide(); });
    } else {
        $(".nav_box").removeClass("nav_box_bottom");
    }

    $(".head_middle_sous").click(function () {
        window.open($(".option_on").val());
    });

    $(".city_qieh").mouseover(function () { $("#city").show(); });
    $("#city").mouseleave(function () { $("#city").hide(); });

    $(".foot_youqlj_nav li").click(function () {
        var hs = $(".foot_youqlj_nav ul").children("li");
        var uls = $("#tab_con").children("div");
        var index = hs.index(this);

        $(hs.eq(index)).attr("class", "foot_youqlj_nav_on");
        $(hs.not(":eq(" + index + ")")).removeClass("foot_youqlj_nav_on");

        $(uls.eq(index)).attr("class", "footer_youqlj").removeClass("footer-con-link");
        $(uls.not(":eq(" + index + ")")).addClass("footer-con-link");
    });

    $(".footer-link h2").click(function () {
        var hs = $(".footer-link").children("h2");
        var uls = $(".footer-link").children("ul");
        var index = hs.index(this);

        $(hs.eq(index)).attr("class", "link_on");
        $(hs.not(":eq(" + index + ")")).removeClass("link_on");

        $(uls.eq(index)).show();
        $(uls.not(":eq(" + index + ")")).hide();
    });

    /*nav 导航——————郭雅南*/
    $("#zzgj_nav ul li").mouseover(function () {
        if ($(this).attr("name") == "zzgj_nav") {
            $(this).find("a").css("color", "#FF4400");
        }
    }).mouseout(function () {
        if ($(this).attr("name") == "zzgj_nav") {
            $(this).find("a").css("color", "#666666");
        }
    });

    // //头部 地区定位选择
    // //如果cookie中有定位则绑定cookie中的地区
    // var cityCookie = "";
    // var cityIdCookie = 0;
    // cookie = getCookie("PC_HEADER_CITY_LOCATION");
    // if (cookie != "null" && cookie != "") {
    //     cookie = eval("(" + cookie + ")");
    //     cityCookie = cookie.Name;
    //     cityIdCookie = cookie.Id;
    // }
    // if (cityCookie == null || cityCookie == '' || cityCookie == '全国') {
    //     $('#city-dingw span').text("全国");
    // }
    // else {
    //     $('#city-dingw span').text(cityCookie);
    //     $('.city_list a').each(function () {
    //         if ($(this).text() == cityCookie) {
    //             $("#zzarea").attr("href", "/" + $(this).attr("data-area") + "-zizhi");
    //             $("#zzarea").text($(this).text() + "资质代办");
    //             $("#azarea").attr("href", "/" + $(this).attr("data-area") + "-anquan");
    //             $("#azarea").text($(this).text() + "安证办理");
    //             return;
    //         }
    //     });
    //     $('#QuickAreaPid option').each(function () {
    //         if (this.innerText == cityCookie) {
    //             $(this).attr('selected', 'selected');
    //             fillPareas(cityIdCookie, '#QuickAreaId', false);
    //             return;
    //         }
    //     });
    //     $('#AreaPid option').each(function () {
    //         if (this.innerText.indexOf(cityCookie) != -1) {
    //             $(this).attr('selected', 'selected');
    //             fillPareas(cityIdCookie, '#AreaId', true);
    //             return;
    //         }
    //     });
    //     $('#Bottom_AreaPid option').each(function () {
    //         if (this.innerText == cityCookie) {
    //             $(this).attr('selected', 'selected');
    //             fillPareas(cityIdCookie, '#Bottom_AreaId', false);
    //             return;
    //         }
    //     });
    // }
    // //定位下拉点击事件
    // $('#city_list a').each(function () {
    //     $(this).bind('click', function () {
    //         $("#city").hide();
    //         $('#city-dingw span').text(this.innerText);

    //         //修改定位 资质代办公司页面页面跳转
    //         if (location.href == 'http://www.zizhiguanjia.com/zizhi/' || location.href == 'http://www.zizhiguanjia.com/zizhi' || location.href.indexOf('-zizhi') > -1) {
    //             if ($('#city-dingw span').text() == '全国') {
    //                 window.location.href = "http://www.zizhiguanjia.com/zizhi/";
    //             }
    //             $('.areas_zzdbgs a').each(function () {
    //                 if ($(this).text() == $('#city-dingw span').text()) {
    //                     window.location.href = $(this).attr('href');
    //                     return;//退出循环
    //                 }
    //             });
    //         }
    //         if ($(this).text() == "全国") {
    //             $("#zzarea").text("资质代办");
    //             $("#zzarea").attr("href", "/zizhi/");
    //             $("#azarea").text("安证办理");
    //             $("#azarea").attr("href", "/anquan/");
    //         } else {
    //             $("#zzarea").text($(this).text() + "资质代办");
    //             $("#zzarea").attr("href", "/" + $(this).attr("data-area") + "-zizhi/");
    //             $("#azarea").text($(this).text() + "安证办理");
    //             $("#azarea").attr("href", "/" + $(this).attr("data-area") + "-anquan/");
    //         }


    //         QuickAreaSelectBind(this.innerText);
    //         AreaSelectBind(this.innerText);
    //         ComapnyUrlBind(this.innerText);
    //         $.post('/Index/SetCityLocationCookie', { "name": this.innerText }, function () {
    //         });
    //     });
    // });

});


function QuickAreaSelectBind(provinceName) {
    if (provinceName == '全国') {
        $($('#QuickAreaPid option')[0]).attr('selected', 'selected');
        $('#QuickAreaId').html('<option>--市--</option>');
        return;
    }
    $('#QuickAreaPid option').each(function () {
        if (this.innerText == $('#city-dingw span').text()) {
            //cityId = $(this).val();
            $(this).attr('selected', 'selected');
            fillPareas($(this).val(), '#QuickAreaId', false);
            return;
        }
    });
}
function AreaSelectBind(provinceName) {
    if (provinceName == '全国') {
        $($('#AreaPid option')[0]).attr('selected', 'selected');
        $('#AreaId').html('<option>--请选择--</option>');
        return;
    }
    $('#AreaPid option').each(function () {
        if (this.innerText.indexOf($('#city-dingw span').text()) != -1) {
            //cityId = $(this).val();
            $(this).attr('selected', 'selected');
            fillPareas($(this).val(), '#AreaId', true);
            return;
        }
    });
}
//首页底部快速申请地区加载
//function Bottom_AreaSelectBind(provinceName) {
//    if (provinceName == '全国') {
//        $($('#Bottom_AreaPid option')[0]).attr('selected', 'selected');
//        $('#Bottom_AreaId').html('<option>--请选择--</option>');
//        return;
//    }
//    $('#Bottom_AreaPid option').each(function () {
//        if (this.innerText.indexOf($('#city-dingw span').text()) != -1) {
//            //cityId = $(this).val();
//            $(this).attr('selected', 'selected');
//            fillPareas($(this).val(), '#Bottom_AreaId', false);
//            return;
//        }
//    });
//}
function ComapnyUrlBind(provinceName) {
    if (provinceName == '全国') {
        $('#li_zzdbgs a').attr('href', 'http://www.zizhiguanjia.com/zizhi/');
        $('#li_zzdbgs a').text("资质代办公司");
        $('.areas_zzdbgs a').css('color', '#999');
        return;
    }
    $('.areas_zzdbgs a').each(function () {
        if ($(this).text() == provinceName) {
            $($(this)).css('color', '#ff4400').siblings().css('color', '#999');
            return;
        }
    });
    $('.areas_zzdbgs a').each(function () {
        if ($(this).text() == $('#city-dingw span').text()) {
            $('#li_zzdbgs a').text(provinceName + "资质代办公司");
            $('#li_zzdbgs a').attr('href', $(this).attr('href'));
            return;//退出循环
        }
    });
}
/*回到顶部*/
//当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
$(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 1) {
            $("#float_div").addClass('search_float');
            $(".pull_box").hide();
            $(".pull_nav").mouseover(function () { $(".pull_box").show(); }).mouseout(function () { $(".pull_box").hide(); });
        } else {
            $("#float_div").removeClass('search_float');
            if (window.location.href == "http://localhost:7676/" || window.location.href == "http://www.zizhiguanjia.com/") {
                $(".pull_nav").unbind("mouseover").unbind("mouseout");
                $(".pull_box").show();
            }
        }
        if ($(window).scrollTop() > 100) {
            $("#back-to-top").fadeIn(800);
        }
        else {
            $("#back-to-top").fadeOut(800);
        }
    });

    //当点击跳转链接后，回到页面顶部位置
    $("#back-to-top").click(function () {
        $('body,html').animate({ scrollTop: 0 }, 600);
        return false;
    });
});
//根据省份 加载城市
function fillPareas(provinceId, cityElementId, isShowletter) {
    var areaPhtml = "<option value=''>--市--</option>";
    //if (AreaPpid == "ServeAreaPid") {
    //    areaPhtml = "<option value=''>--不限--</option>";
    //}
    var strsel = "";
    if (isShowletter) {
        for (var i = 0; i < areaData.length; i++) {
            //strsel = areaData[i].Id == currentAreaPid ? "selected=selected" : "";
            if (areaData[i].Lv == 2 && areaData[i].ParentId == provinceId) {
                areaPhtml += "<option value='" + areaData[i].Id + "'  " + strsel + " >" + areaData[i].Initial + " " + areaData[i].Name + "</option>";
            }
        }
    } else {
        for (var i = 0; i < areaData.length; i++) {
            //strsel = areaData[i].Id == currentAreaPid ? "selected=selected" : "";
            if (areaData[i].Lv == 2 && areaData[i].ParentId == provinceId) {
                areaPhtml += "<option value='" + areaData[i].Id + "'  " + strsel + ">" + areaData[i].Name + "</option>";
            }
        }
    }
    $(cityElementId).html(areaPhtml);
}
function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=")
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1
            c_end = document.cookie.indexOf(";", c_start)
            if (c_end == -1) c_end = document.cookie.length
            return decodeURI(document.cookie.substring(c_start, c_end))
        }
    }
    return "";
}



