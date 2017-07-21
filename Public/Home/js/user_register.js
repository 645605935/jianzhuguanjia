
jQuery.validator.addMethod("isMobile", function (value, element) {
    var length = value.length;
    var mobile = /^(1[34578]\d{9})$/;
    return this.optional(element) || (length == 11 && mobile.test(value));
}, "请正确填写您的手机号码");

jQuery.validator.addMethod("chcharacter", function (value, element) {
    var tel = /^[\u4e00-\u9fa5]+$/;
    return this.optional(element) || (tel.test(value));
}, "请输入汉字");

jQuery.validator.addMethod("checkCode", function (value, element) {
    return !($("#hint").is(":hidden") && value == "");
}, "请输入验证码");


$("#agententer_form").validate({
    debug: true,
    errorElement: "p",
    rules: {
        Agree: {
            required: true
        },
        CompanyName: {
            required: true
        },
        Contact: {
            required: true,
            chcharacter: true,
            rangelength: [2, 4]
        },
        Phone: {
            required: true,
            isMobile: true,
            remote: {
                url: "/user/userbasicisexist",
                type: "post",
                dataType: "json",
                data: { phone: function () { return $("#Phone").val(); } }
            }
        },
        IdentifyingCode: {
            minlength: 6,
            maxlength: 6,
            checkCode: true
        },
        password: {
            required: true,
            chcharacter: false,
            minlength: 6,
            maxlength: 16
        },
        repassword: {
            required: true,
            chcharacter: false,
            equalTo: "#password"
        }
    },
    messages: {
        Agree: {
            required: "请接受资质管家服务协议"
        },
        CompanyName: {
            required: "请输入公司名称全称"
        },
        Contact: {
            required: "请输入称呼",
            chcharacter: "请输入汉字",
            rangelength: "称呼长度为{0}到{1}个汉字"
        },
        Phone: {
            required: "请输入手机号",
            isMobile: "请输入正确的手机号码",
            remote: "该手机号已被注册"
        },
        IdentifyingCode: {
            minlength: "请输入六位验证码",
            maxlength: "请输入六位验证码"
        },
        password: {
            required: "请输入密码",
            chcharacter: "请输入正确密码",
            minlength: "密码最小长度6位",
            maxlength: "密码最长为16位"
        },
        repassword: {
            required: "请再次输入密码",
            chcharacter: "请输入正确密码",
            equalTo: "两次密码输入不一致"
        }
    },
    errorPlacement: function (error, element) {
        while (!(element[0].nodeName == "DIV" || element[0].nodeName == "LI")) {
            element = element.parent();
        }
        element.children("p.messge").text(error.text());
        if (error.text() != "") {
            element.children("p.messge").addClass("error_bg");
        }
        else {
            element.children("p.messge").removeClass("error_bg");
        }
    },
    success: function (element) {
    },
    submitHandler: function () {
        alert(1111)
        if (!$("#hint").is(":hidden") && $("#IdentifyingCode").val() == "") {
            formSubmit();
        } else {
            $.post(""+Home_User_checkvalidatecode+"", { phone: $("#Phone").val(), code: $("#IdentifyingCode").val() }, function (data) {
                var data=JSON.parse(data);
                // console.log(data);return;
                if (!data.IsSuccess) {
                    $("#identifyingCode_error").text("验证码不正确,请重新输入");
                    $("#identifyingCode_error").addClass("messge").addClass("error_bg");
                } else {
                    formSubmit();
                }
            });
        }
    }
});

function formSubmit() {
    $("#identifyingCode_error").text("");
    $("#identifyingCode_error").removeClass("error_bg");
    $.post("/user/agententer", $("#agententer_form").serialize(), function (data) {
        if (data.IsSuccess) {
            var strPhone = $("#Phone").val().substring(0, 3);
            location.href = "/user/agententer?isperfect=true&phone=" + strPhone;
        }
    });
}
