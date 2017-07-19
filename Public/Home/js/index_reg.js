areaData = $.parseJSON(areaData);
$(function () {
    var area = new QuickArea();
    area.CallArea("IndexRegAreaPid", "IndexRegAreaId", "0", "0");
    var area_a = new QuickArea();
    area_a.CallArea("IndexRegAreaPid_a", "IndexRegAreaId_a", "0", "0");
    //加载给特定猎头公司下单专业
    InitSubject.Init('SubjectPType', 'SubjectType', 'SubjectLv');
    InitSubject.InitSelect('SubjectType', '', '资质专业');
    InitSubject.InitSelect('SubjectLv', '', '资质等级');

    $(".index_baojxx li").click(function () {
        var index_baojxx = $(this).index();
        $(this).parent().nextAll("form").hide().eq(index_baojxx).show();
        $(this).addClass("index_baojxx li on").siblings().removeClass("index_baojxx li on");
    });
});



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
            required: "请选择资质类型"
        },
        SubjectId: {
            required: "请选择资质专业"
        },
        SubjectLv: {
            required: "请选择专业等级"
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


$("#anzheng_form").validate({
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
        $("#anzheng_form " + err_class).text(error.text());
        $('#anzheng_form .uform-err').each(function (index, item) {
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
            IndexBroker($("#anzheng_form"));
        } else if (!isBroker) {
            IndexBroker();
            return;
        } else {
            popup.msgPopup("暂未对资质代办公司用户开通下单业务！");
        }
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
