$(function () {
    var area = new Area();
    area.CallArea("pb_AreaPId", "pb_AreaId", '', '');
    $('#pb_AreaId').html('<option value=\'\' selected=\'true\'>请选择</option>');
    FillPBSubjectPId();
    $('#pb_SubjectPId').change(function () {
        var sunId = $(this).val();
        var arr_subId = [];
        arr_subId.push('<option value=\'\'>请选择</option>');
        $.each(xz_data, function (index, item) {
            if (item.Lv == 3 && item.PId == sunId) {
                arr_subId.push('<option value=\'' + item.ID + '\'>' + item.Name + '</option>');
            }
        });
        $('#pb_SubjectId').html(arr_subId.join(''));
    });
});
jQuery.validator.addMethod("chcharacter", function (value, element) {
    var tel = /^[\u4e00-\u9fa5]+$/;
    return this.optional(element) || (tel.test(value));
}, "请输入汉字");
jQuery.validator.addMethod("number", function (value, element) {
    var tel = /^([1-9][0-9])|([1-9])+$/;
    return this.optional(element) || (tel.test(value));
}, "请输入正确格式的数字");
jQuery.validator.addMethod("isMobile", function (value, element) {
    var length = value.length;
    var mobile = /^(1[34578]\d{9})$/;
    return this.optional(element) || (length == 11 && mobile.test(value));
}, "请正确填写您的手机号码");
jQuery.validator.addMethod("checkPhone", function (value, element) {
    var flag = true;
    $.ajax({
        url: 'http://post.58guakao.com/base/IsPhoneRepeat',
        type: 'post',
        async: false,
        dataType: 'json',
        data: { phone: $("#pb_Phone").val() },
        success: function (data) {
            if (data.Result == 0 || data.Result == 3) {
                //（未注册，注册企业未验证） 显示验证码
                $('.li_pb_ValidateCode').show();
            }
            if (data.Result == -1) {
                $('.error_place_span_pb_Phone').text('此手机号不允许发布');
                flag = false;
            }
        }
    });
    return flag;
}, "此手机号不允许发布");

$('#publish_form').validate({
    debug: true,
    errorElement: "p",
    rules: {
        pb_Name: {
            required: true,
            chcharacter: true,
            rangelength: [2, 4]
        },
        pb_SubjectPId: {
            required: true
        },
        pb_SubjectId: {
            required: true
        },
        pb_NeedCount: {
            required: true,
            number: true
        },
        pb_Price: {
            required: true,
            number: true
        },
        pb_AreaPId: {
            required: true
        },
        pb_AreaId: {
            required: true
        },
        pb_Phone: {
            required: true,
            isMobile: true,
            checkPhone: true
        },
        pb_ValidateCode: {
            required: true,
            rangelength: [6, 6]
        },
        pb_PassWord: {
            required: true
        },
        pb_CompanyName: {
            required: true,
            rangelength: [4, 20]
        }
    },
    messages: {
        pb_Name: {
            required: "请输入您的称呼",
            chcharacter: "请输入汉字",
            rangelength: "请输入2-4个汉字"
        },
        pb_SubjectPId: {
            required: "请选择所需人才"
        },
        pb_SubjectId: {
            required: "请选择所需人才"
        },
        pb_NeedCount: {
            required: "请输入数量",
            number: "请输入数字"
        },
        pb_Price: {
            required: "请输入价格",
            number: "请输入数字"
        },
        pb_AreaPId: {
            required: "请选择地址"
        },
        pb_AreaId: {
            required: "请选择住址"
        },
        pb_Phone: {
            required: "请输入电话",
            isMobile: "手机号格式不正确",
            checkPhone: "此手机号不允许发布"
        },
        pb_ValidateCode: {
            required: "请输入验证码",
            rangelength: "请输入6位验证码"
        },
        pb_PassWord: {
            required: "请输入密码"
        },
        pb_CompanyName: {
            required: "请输入企业名称",
            rangelength: "公司名称不能少于4个字符"
        }
    },
    errorPlacement: function (error, element) {
        var element_name = $(element).attr('Name');
        switch (element_name) {
            case 'pb_CompanyName':
                $('.error_place_company_name span').text(error.text()); break;
            case 'pb_SubjectPId':
                $('.error_place_span_pb_SubjectPId').text('请选择人才类型'); break;
            case 'pb_SubjectId':
                $('.error_place_span_pb_SubjectId').text('请选择人才等级'); break;
            case 'pb_AreaPId':
                $('.error_place_span_pb_AreaPId').text('请选择省份'); break;
            case 'pb_AreaId':
                $('.error_place_span_pb_AreaId').text('请选择城市'); break;
            case 'pb_AreaPId2':
                $('.error_place_span_pb_AreaPId2').text('请选择省份'); break;
            case 'pb_AreaId2':
                $('.error_place_span_pb_AreaId2').text('请选择城市'); break;
            case 'pb_Phone':
                if (error.text() == '') {
                    $('.error_place_span_pb_Phone').text('');
                } else {
                    $('.error_place_span_pb_Phone').text(error.text());
                    $('.li_pb_ValidateCode').css('display', 'none');
                }
                break;
            default:
                $(element).parent().children().last().text(error.text()); break;
        }
    },
    success: function (element) {
        var element_for = $(element).attr('for');
        switch (element_for) {
            case 'pb_CompanyName':
                $('.error_place_company_name span').html('&nbsp;'); break;
            case 'pb_SubjectPId':
                $('.error_place_span_pb_SubjectPId').html(''); break;
            case 'pb_SubjectId':
                $('.error_place_span_pb_SubjectId').html(''); break;
            case 'pb_AreaPId':
                $('.error_place_span_pb_AreaPId').html(''); break;
            case 'pb_AreaId':
                $('.error_place_span_pb_AreaId').html(''); break;
            case 'pb_AreaPId2':
                $('.error_place_span_pb_AreaPId2').html(''); break;
            case 'pb_AreaId2':
                $('.error_place_span_pb_AreaId2').html(''); break;
            default:
                $(element).parent().children().last().text();
                break;
        }
    },
    submitHandler: function () {
        //提交表单
        $.ajax({
            url: 'http://post.58guakao.com/base/PublishCompanyInformation',
            type: 'post',
            data: $('#publish_form').serialize(),
            dataType: 'json',
            async: false,
            success: function (data) {
                $('.error_place_company_name').text('');
                if (data.Result) {
                    //发布成功 //报价弹窗
                    $('.theme-popover-mask').fadeIn(100);
                    $('.theme-popover').slideDown(200);
                }
                else {
                    $('.error_place_company_name').text(data.Message);
                    if(data.Message=="服务器错误，发布失败")
                    {
                        $.post('/company/addlog', { message: data.Message }, function () { });
                    }
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $.post('/company/addlog', { message: XMLHttpRequest.statusText }, function () { });
            }
        });
    }
});
$('.theme-poptit .close').click(function () {
    location.href = 'http://www.zizhiguanjia.com';
    $('.theme-popover-mask').fadeOut(100);
    $('.theme-popover').slideUp(200);
});
//初始化专业下拉框
function FillPBSubjectPId() {
    var arr_subPId = [];
    var arr_subId = [];
    arr_subPId.push('<option value=\'\'>请选择</option>');
    arr_subId.push('<option value=\'\'>请选择</option>');
    $.each(xz_data, function (index, item) {
        if (item.Lv == 2) {
            arr_subPId.push('<option value=\'' + item.ID + '\'>' + item.Name + '</option>');
        }
    });
    $('#pb_SubjectPId').html(arr_subPId.join(''));
    $('#pb_SubjectId').html(arr_subId.join(''));
}
//点击获取验证码
$('#smsId').click(function () {
    var phone = $('#pb_Phone').val();
    $.post('http://post.58guakao.com/base/SendShortMessage', { phone: $('#pb_Phone').val() }, function (data) {
        if (!data.Result) {
            alert('验证码发送失败');
        }
    });
    var timeout = 60;
    var timer;
    if (timer != null) {
        clearTimeout(timer);
        timer = null;
    }
    timer = setInterval(function () {
        $("#smsId").attr("disabled", "disabled");
        if (timeout > 0) {
            $("#smsId").val(timeout-- + "秒后获取验证码");
        } else {
            clearInterval(timer);
            $("#smsId").val("获取验证码");
            timeout = 60;
            $("#smsId").removeAttr("disabled");
            $("#hint").css("display", "block");
            $("#registerId").val("获取验证码");
        }
    }, 1000);
});
$('#blzz').click(function () {
    location.href = 'http://www.zizhiguanjia.com/baojia/';
});