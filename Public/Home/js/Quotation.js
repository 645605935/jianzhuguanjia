var Click_TYPE = {
    Subject_Click: 1,
    NavSubject_Click: 2
}
$(function () {
    
    //枚举点击类型(1:专业点击 ; 2：左侧导航点击）
    


    //初始化专业
    Baojia_Subject.Init('zzlxBox', 1, 'SubjectId', 'SubjectLv');

    //专业默认赋值
    if ($("#HidSubjectId") != 0)
    {
        //右侧专业赋默认值
        Baojia_Subject.NavSubject_Check($("#HidSubjectPid").val(), $("#HidSubjectId").val(), 'SubjectId', 'SubjectLv', 'zzlxBox');

        //左侧菜单赋默认值
        Baoija_NavList.Subject_Click("juheweb", Click_TYPE.Subject_Click, $("#HidSubjectId").val());
    }
    //初始化左侧导航
    Baoija_NavList.Init("show", "juheweb");

    //初始化表格
    Boajia_PageSlide.init();
});



var Baojia_Subject = {
    Init: function (subjectTypeUlId, subjectTypeId, subjectElementId, subjectLvElementId) {

        //资质类型点击
        Baojia_Subject.SubjcetType_Click(subjectTypeUlId, subjectLvElementId);

        //加载专业
        Baojia_Subject.InitSubject(subjectTypeId, subjectElementId, subjectLvElementId);

        //加载专业等级
        Baojia_Subject.InitSubjectLv(subjectElementId, subjectLvElementId);

        //初始化专业
        Baojia_Subject.ClearSubjectOptions(subjectElementId);

        //初始化等级显示
        Baojia_Subject.ClearSubjectLvOptions(subjectLvElementId);

    },
    SubjcetType_Click: function (subjectTypeUlId, subjectLvElementId) {
        $("#" + subjectTypeUlId + " li").click(function () {
            if (!$(this).hasClass("li_cur")) {
                Baojia_Subject.Init('zzlxBox', $(this).val(), 'SubjectId', 'SubjectLv');
                $(this).addClass("li_cur").siblings().removeClass("li_cur");
                // 表单赋值
                Baojia_Subject.InitFormItem($(this).val(), '', '');

                //清空等级
                Baojia_Subject.ClearSubjectLvOptions(subjectLvElementId);

                //智能报价
                $("#zhinengbj_wenz").empty().html('<span class="baijia_wenz" id="baijia_wenz" style="font-size:14px;padding-left:10px;">请选择资质类型、专业及等级</span>');
            }

        });

    },
    NavSubject_Check: function (subjectTypeId, subjectId, subjectElementId, subjectLvElementId, subjectTypeUlId) {
        //选择资质类型
        $(this).addClass("li_cur").siblings().removeClass("li_cur");
        $.each($("#" + subjectTypeUlId + " li"), function (index, item) {
            if ($(this).val()== subjectTypeId) {
                $(this).addClass("li_cur").siblings().removeClass("li_cur");
            }
        });
        //选中资质专业
        var arr = [];
        if (subjectTypeId == 1 || subjectTypeId == 2) {
            arr.push('<option value="">资质专业</option>');
            $.each(subject_baojia, function (index, item) {
                if (item.Lv == 2 && item.ParentId == subjectTypeId) {
                    if (item.Id == subjectId) {
                        arr.push('<option value=\'' + item.Id + '\'  data-value="' + item.ParentId + '" selected=selected >' + item.Name + '</option>');
                    } else {
                        arr.push('<option value=\'' + item.Id + '\'  data-value="' + item.ParentId + '" >' + item.Name + '</option>');
                    }
                }
            });
        } else {
            arr.push('<option value=\'0\' data-value=\'-1\' >一 一</option>');
        }
        $('#' + subjectElementId).html(arr.join(''));
        Baojia_Subject.SetSubjectSpanValue(subjectElementId);

        //显示等级
        var arr_sublv = [];
        var majorLv;
        $.each(subject_baojia, function (index, item) {
            if (item.Id == subjectId)
                majorLv = item.MajorLevel;
        });
        if (majorLv != '' && majorLv != null) {
            if (majorLv != '0') {
                $.each(majorLv, function (index, item) {
                    if (item.LevelFlag == 1)
                    {
                        arr_sublv.push('<option value="' + item.LevelValue + '">' + item.LevelText + '</option>');
                        // 表单赋值
                        Baojia_Subject.InitFormItem(subjectTypeId, subjectId, item.LevelValue);


                        $("." + subjectLvElementId).text(item.LevelText);
                    }
                    

                });
            } else {
                arr_sublv.push('<option value="0">一 一</option>');
            }
        }
        $('#' + subjectLvElementId).html(arr_sublv.join(''));
       
    },
    InitSubject: function (subjectTypeId, subjectElementId, subjectLvElementId) {
        var arr = [];
        if (subjectTypeId == 1 || subjectTypeId == 2) {
            arr.push('<option value="">资质专业</option>');
            $.each(subject_baojia, function (index, item) {
                if (item.Lv == 2 && item.ParentId == subjectTypeId) {
                    arr.push('<option value=\'' + item.Id + '\'  data-value="' + item.ParentId + '">' + item.Name + '</option>');
                }
            });
        } else {
            arr.push('<option value=\'0\' data-value=\'-1\' >一 一</option>');
        }
        $('#' + subjectElementId).html(arr.join(''));

        //初始化专业
        Baojia_Subject.ClearSubjectOptions(subjectElementId);

    },
    InitSubjectLv: function (subjectElementId, subjectLvElementId) {
        //专业改变
        $("#" + subjectElementId).change(function () {
            var subjectId = $("#" + subjectElementId + "  option:selected").val();
            var subjectTypeId = $("#" + subjectElementId + "  option:selected").attr("data-value");
            //显示专业
            Baojia_Subject.SetSubjectSpanValue(subjectElementId);
 

            //导航交互
            Baoija_NavList.Subject_Click("juheweb", Click_TYPE.Subject_Click, subjectId);


            var arr_sublv = [];
            var majorLv;
            $.each(subject_baojia, function (index, item) {
                if (item.Id == subjectId)
                    majorLv = item.MajorLevel;
            });
            if (majorLv != '' && majorLv != null) {
                if (majorLv != '0') {
                    $.each(majorLv, function (index, item) {
                        if (item.LevelFlag == 1)
                        {
                            arr_sublv.push('<option value="' + item.LevelValue + '">' + item.LevelText + '</option>');
                            $("." + subjectLvElementId).text(item.LevelText);
                            // 表单赋值
                            Baojia_Subject.InitFormItem(subjectTypeId, subjectId, item.LevelValue);
                        }
                    });
                } else {
                    arr_sublv.push('<option value="0">一 一</option>');
                }
            }
            $('#' + subjectLvElementId).html(arr_sublv.join(''));

        });
        //专业等级改变
        $("#" + subjectLvElementId).change(function () {
            //x显示等级
            Baojia_Subject.SetSubjectLvSpanValue(subjectLvElementId);
        });
    },
    SetSubjectSpanValue: function (subjectElementId) {
        var selectedOpion = $("#" + subjectElementId).find("option:selected");
        $("." + subjectElementId).attr("data-value", selectedOpion.val());
        $("." + subjectElementId).text(selectedOpion.text());
    },
    SetSubjectLvSpanValue: function (subjectLvElementId) {
        var selectedOpion = $("#" + subjectLvElementId).find("option:selected");
        $("." + subjectLvElementId).attr("data-value", selectedOpion.val());
        $("." + subjectLvElementId).text(selectedOpion.text());
    },
    ClearSubjectLvOptions: function (subjectLvElementId) {
        $("." + subjectLvElementId).text('资质等级');
        $("#"+subjectLvElementId+" option").remove();
    },
    ClearSubjectOptions: function (subjectElementId) {
        $("." + subjectElementId).text('资质专业');
    },
    InitFormItem: function (subjectTypeId, subjectId, subjectLv) {
        $("#HidSubjectPid").val(subjectTypeId);
        $("#HidSubjectId").val(subjectId);
        $("#HidSubjectLv").val(subjectLv);
        $("#HidAreaId").val($("#AreaId  option:selected").val());
        $("#HidAreaPid").val($("#AreaPid  option:selected").val());
    }
}
 

var Baoija_NavList = {
    Init: function (elementDivId, elementUlId) {
        //初始化菜单
        Baoija_NavList.NavListInit(elementDivId);

        //菜单点击
        Baoija_NavList.SubjectType_Click(elementUlId);

        //菜单专业点击
        Baoija_NavList.Subject_Click(elementUlId, Click_TYPE.NavSubject_Click);

    },
    NavListInit: function (elementDivId) {
        $("#" + elementDivId + " ul li ").each(function (index, element) {
            $(element).addClass("selected");
            $(element).find("div").css("display", "block");
        });
    },
    SubjectType_Click: function (elementUlId) {
        $("#" + elementUlId).find("h4").click(function () {
            var $div = $(this).siblings(".list-item");
            if ($(this).parent().hasClass("selected")) {
                $div.slideUp(600);
                $(this).parent().removeClass("selected");
            }
            if ($div.is(":hidden")) {
                $("#" + elementUlId + " li").find(".list-item").slideUp(600);
                $("#" + elementUlId + " li").removeClass("selected");
                $(this).parent().addClass("selected");
                $div.slideDown(600);
            } else {
                $div.slideUp(600);
            }
        });
    },
    Subject_Click: function (elementUlId, clickType, checkedSubjectId) {
        if (clickType == Click_TYPE.Subject_Click) {
            //选中专业所选中的左侧菜单
            var checkId = $("#" + checkedSubjectId + "_Nav");
            $("#" + elementUlId + " div p a").removeClass("red");
            checkId.addClass("red");
            ////加载表格
            getDetail(checkedSubjectId);


        } else {
            $("#" + elementUlId).find("div p").click(function () {
                $("#" + elementUlId).find("div p a").removeClass("red");
                $(this).find("a").addClass("red");

                //选中左侧菜单所选中的专业
                var subjectTypeId = $(this).parent().prev("h4").attr("data-value");
                var subjectId = parseInt($(this).find("a").attr("id"));

                Baojia_Subject.NavSubject_Check(subjectTypeId, subjectId, 'SubjectId', 'SubjectLv', 'zzlxBox');
               
                    $('html, body').animate({ scrollTop: 0 }, 'slow');
              
            });
        }

    }
}

var Boajia_PageSlide = {
    init: function () {
        var scrollHeight = 0;
        $(window).scroll(function () {
            //#subNav定位
            scrollHeight = $(window).scrollTop();//滚动条滚过的高度
            if (scrollHeight >= ($('.zzdb_top').height() + 40)) {
                $('#subNav').css('position', 'fixed');
                $('#subNav').css('top', '125.2px');

                $("#CerNav").css('position', 'fixed');
                $("#CerNav").css("top", "125.2px");
            }
            else {
                $('#subNav').css('position', 'static');
                $('#subNav').css('top', '125.2px');

                $("#CerNav").css('position', 'static');
                $("#CerNav").css("margin-top", "0px");
            }

            if ((($("#options2").offset().top - $(document).scrollTop()) < 800) || $(document).scrollTop() < 300) {
                $("#CerNav").css('position', 'static');
                $("#CerNav").css("top", "0px");
            }

            //根据滚动过的距离改变#subNav选中状态 
            if (scrollHeight < ($('.zzdb_top').height() + $('.zizhixuzhi').height() - $('#subNav').height() + 40)) {
                $('.zzxz a').addClass('clickstyle');
                $($('.zzxz').siblings().find('a')).removeClass('clickstyle');
            } else if (scrollHeight < ($('.zzdb_top').height() + $('.zizhixuzhi').height() + $('#yongxinfuwu').height() - $('#subNav').height() + 100)) {
                $('.yxfw a').addClass('clickstyle');
                $($('.yxfw').siblings().find('a')).removeClass('clickstyle');
            } else if (scrollHeight < ($('.zzdb_top').height() + $('.zizhixuzhi').height() + $('#yongxinfuwu').height() + $('#shilizhanshi').height() - $('#subNav').height() + 100)) {
                $('.slzs a').addClass('clickstyle');
                $($('.slzs').siblings().find('a')).removeClass('clickstyle');
            } else {
                $('.wxts a').addClass('clickstyle');
                $($('.wxts').siblings().find('a')).removeClass('clickstyle');
            }
        });
        //#subNav点击 滚动效果
        $('.zzxz').click(function () {
            $("html,body").animate({ scrollTop: height = $('.zzdb_top').height() + 10 }, 500);
        });
        $('.yxfw').click(function () {
            $("html,body").animate({ scrollTop: height = $('.zzdb_top').height() + $('.zizhixuzhi').height() - $('#subNav').height() + 40 }, 500);
        });
        $('.slzs').click(function () {
            $("html,body").animate({ scrollTop: height = $('.zzdb_top').height() + $('.zizhixuzhi').height() + $('#yongxinfuwu').height() - $('#subNav').height() + 500 }, 500);
        });
        $('.wxts').click(function () {
            $("html,body").animate({ scrollTop: height = $('.zzdb_top').height() + $('.zizhixuzhi').height() + $('#yongxinfuwu').height() + $('#shilizhanshi').height() - $('#subNav').height() + 300 }, 500);
        });
    }
}



//免费获取精准报价
$('#baojia_btn').click(function () {

    var type = $("#baojia_form .type").val();
    var zhuanye = $("#baojia_form .zhuanye").val();
    var dengji = $("#baojia_form .dengji").val();

    var province = $("#baojia_form .province").val();
    var city = $("#baojia_form .city").val();

    if (province == '' || city == '') {
        popup.msgPopup("请选择地区！");
    } else if (type == '' || zhuanye == '' || dengji == '') {
        popup.msgPopup("请选择资质专业！")
    } else if ($("#UserId").val() > 0) {
        $("#fromSubBtn").click();
    } else {
        $('.theme-popover-mask').fadeIn(100);
        $('.theme-popover').slideDown(200);
    }

});

//验证
var validPhone = /^(1[34578]\d{9})$/;

function CheckPhone(phone) {
    if (phone != null && phone != "") {
        if (validPhone.test(phone)) {
            $("#phone_err").css("display", "none");
            return true;
        } else {
            $("#phone_err").css("display", "block");
            $("#phone_err").text("请输入正确的手机号");
            return false;
        }
    } else {
        $("#phone_err").css("display", "block");
        $("#phone_err").text("请输入您的手机号");
        return false;

    }
}

$("#Phone").change(function () {
    var phone = $("#Phone").val();
    CheckPhone(phone);
});




//提交表单
$("#fromSubBtn").click(function () {
    var phone = $("#Phone").val();
    if ( CheckPhone(phone)) {
        var areaPid = $("#AreaPid  option:selected").val();
        var areaId = $("#AreaId  option:selected").val();
        if (areaId == "" || areaId == 0 || areaId == null) {
            popup.msgPopup("请选择地区！");
        } else {
            $("#AreaPidHid").val(areaPid);
            $("#AreaIdHid").val(areaId);

            $.post("/userapplication/addapplication", $("#sub_from").serialize(), function (data) {
                if (data.IsSuccess) {
                    window.location = "/userapplication/quotationresult?id=" + data.SubjectId;
                } else {
                    popup.msgPopup(data.Msg);
                }
            });
        }
    }
});

//关闭弹框
$('.theme-poptit .close').click(function () {
    $('.theme-popover-mask').fadeOut(100);
    $('.theme-popover').slideUp(200);
});

