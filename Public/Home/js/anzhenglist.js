﻿$(function () {
    areaData = $.parseJSON(areaData);
    var area = new QuickArea();
    area.CallArea("IndexRegAreaPid", "IndexRegAreaId", "0", "0");
    Page.Init();
});
var Page = {
    Init: function () {

        //点击免费获取报价按钮
        $('.free_design').each(function (index, item) {
            $(item).click(function () {
                //设置获取报价弹框样式 innerheight	返回窗口的文档显示区的高度。
                var height = window.innerHeight / 2 - $('.order-popover').height() / 2;
                var left = $('html').width() / 2 - $('.order-popover').width() / 2;
                $('.order-popover').css('top', height).css('left', left);
                $('.order-suc-popover').css('top', height).css('left', left);
                $('.order-popover').slideDown(200);
                $('.theme-popover-mask').fadeIn(100);
                $('#pop-companyid').val($(this).attr('companyId'));
                var areaPid = $(this).attr('areapid');
                var areaId = $(this).attr('areaid');
                //加载给特定猎头公司下单地区
                if (areaId == 0) {
                    $('#pop-areaid').html('<option value="0">不限</option>');
                    $.each(areaData, function (index, item) {
                        if (item.Id == areaPid) {
                            $('#pop-areapid').html('<option value=' + item.Id + '>' + item.Name + '</option>');
                            return;
                        }
                    });
                } else {
                    var flag = 0;
                    $.each(areaData, function (index, item) {
                        if (item.Id == areaPid) {
                            $('#pop-areapid').html('<option value=' + item.Id + '>' + item.Name + '</option>');
                            flag = flag + 1;
                        }
                        if (item.Id == areaId) {
                            $('#pop-areaid').html('<option value=' + item.Id + '>' + item.Name + '</option>');
                            flag = flag + 1;
                        }
                        if (flag == 2)
                            return;
                    });
                }
            });
        });
        //关闭获取报价弹框
        $('.order-popover .pop-close').on('click', function () {
            $('.order-popover').slideUp(200);
            $('.theme-popover-mask').fadeOut(200);
            $('.resp-err').css('display', 'none').text('');
            $('.pop-err').text('').css('display', 'none');
            $('.pop-err-sa').text('').css('display', 'none');
        });
        //
        $('.order-suc-popover .pop-close').on('click', function () {
            $('.order-suc-popover').slideUp(200);
            $('.theme-popover-mask').fadeOut(200);
            $('.resp-err').css('display', 'none').text('');
        });
        //加载给特定猎头公司下单专业
        //InitSubject.Init('pop-subptype', 'pop-subtype', 'pop-sublv');
    }
}
jQuery.validator.addMethod("mobile", function (value, element) {
    var length = value.length;
    var mobile = /^(1[34578]\d{9})$/;
    return mobile.test(value);
}, "手机号码格式错误");
$("#user_form").validate({
    debug: true,
    errorElement: "p",
    rules: {
        SubjectPid: {
            required: true
        },
        SubjectId: {
            required: true
        },
        SubjectLv: {
            required: true
        },
        AreaPid: {
            required: true
        },
        AreaId: {
            required: true
        },
        Phone: {
            required: true,
            mobile: true
        }
    },
    messages: {
        SubjectPid: {
            required: "请选择办理类型"
        },
        SubjectId: {
            required: "请选择资质情况"
        },
        SubjectLv: {
            required: "请选择人员情况"
        },
        AreaPid: {
            required: "请选择地区"
        },
        AreaId: {
            required: "请选择地区"
        },
        Phone: {
            required: "请留下您的联系方式"
        }
    },
    errorPlacement: function (error, element) {
        //$('.uform-err').text(error.text());
        var err_class;
        switch (element.attr('name')) {
            case 'SubjectPid':
                err_class = '.uform-err-subptype';
                break;
            case 'SubjectId':
                err_class = '.uform-err-subtype';
                break;
            case 'SubjectLv':
                err_class = '.uform-err-sublv';
                break;
            case 'AreaPid':
                err_class = '.uform-err-areapid';
                break;
            case 'AreaId':
                err_class = '.uform-err-areaid';
                break;
            case 'Phone':
                err_class = '.uform-err-phone';
                break;
            default:
                return;
        }
        $("#user_form " + err_class).text(error.text());
        $('#user_form .uform-err').each(function (index, item) {
            if ($(item).text() != '') {
                $(item).css('display', 'inline-block');
                $(item).siblings('.uform-err').css('display', 'none');
                return false;
            }
        });
    },
    success: function (element) {
        var err_class;
        switch (element.attr('for')) {
            case 'SubjectPType':
                err_class = '.uform-err-subptype';
                break;
            case 'SubjectType':
                err_class = '.uform-err-subtype';
                break;
            case 'SubjectLv':
                err_class = '.uform-err-sublv';
                break;
            case 'AreaPid':
                err_class = '.uform-err-areapid';
                break;
            case 'AreaId':
                err_class = '.uform-err-areaid';
                break;
            case 'Phone':
                err_class = '.uform-err-phone';
                break;
            default:
                return;
        }
        $(err_class).text('');
    },
    submitHandler: function () {
        if (!isLogin) {
            IndexBroker($("#user_form"));
        } else if (!isBroker) {
            IndexBroker($("#user_form"));
            return;
        } else {
            popup.msgPopup("暂未对资质代办公司用户开通下单业务！");
        }
    }
});

$('.get-price-form').validate({
    rules: {
        debug: true,
        Phone: {
            required: true,
            mobile: true
        },
        SubjectPid: {
            required: true
        },
        SubjectId: {
            required: true
        },
        SubjectLv: {
            required: true
        },
        AreaPid: {
            required: true
        },
        AreaId: {
            required: true
        }
    },
    messages: {
        Phone: {
            required: "请留下您的联系方式"
        },
        SubjectPid: {
            required: "请选择办理类型"
        },
        SubjectId: {
            required: "请选择资质情况"
        },
        SubjectLv: {
            required: "请选择人员情况"
        },
        AreaPid: {
            required: "请选择省份"
        },
        AreaId: {
            required: "请选择城市"
        }
    },
    errorPlacement: function (error, element) {
        var err_class;
        switch (element.attr('name')) {
            case 'Phone':
                err_class = '.pop-phone-err';
                break;
            case 'SubjectPid':
                err_class = '.pop-subptype-err';
                break;
            case 'SubjectId':
                err_class = '.pop-subtype-err';
                break;
            case 'SubjectLv':
                err_class = '.pop-sublv-err';
                break;
            case 'AreaPid':
                err_class = '.pop-areapid-err';
                break;
            case 'AreaId':
                err_class = '.pop-areaid-err';
                break;
            default:
                return;
        }
        $(err_class).css('display', 'block').text(error.text()).addClass('error_bg');
    },
    success: function (element) {
        var clr_class;
        switch ($(element).attr('for')) {
            case 'pop-phone':
                clr_class = '.pop-phone-err';
                break;
            case 'pop-subptype':
                clr_class = '.pop-subptype-err';
                break;
            case 'pop-subtype':
                clr_class = '.pop-subtype-err';
                break;
            case 'pop-sublv':
                clr_class = '.pop-sublv-err';
                break;
            case 'pop-areapid':
                clr_class = '.pwop-areapid-err';
                break;
            case 'pop-areaid':
                clr_class = '.pop-areaid-err';
                break;
            default:
                return;
        }
        $(clr_class).css('display', 'none').removeClass('error_bg').text('');
        $('.resp-err').css('display', 'none').text('');
    },
    submitHandler: function () {
        $.post('/UserApplication/AddApplication', $('.get-price-form').serialize(), function (data) {
            if (data.IsSuccess) {
                $('.order-popover').css('display', 'none');
                $('.order-suc-popover').show();
                $("#reset").trigger("click");                
            } else {
                $('.resp-err').text(data.Msg).show();
            }
        });
    }
});

function IndexBroker(form) {
    $.post("/userapplication/addapplication", form.serialize(), function (data) {
        if (data.IsSuccess) {
            var id = $('#SubjectType').val();
            window.location.href = '/userapplication/quotationresult?id=' + id;
        } else {
            popup.msgPopup(data.Msg);
        }
    });
};
