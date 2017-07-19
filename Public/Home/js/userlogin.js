
$(function () {
    $("#registers").click(function () {
        popup.closePopup();
        popup.pagePopup("注册", "/user/tipregister", 700, 500);
    })
})
jQuery.validator.addMethod("isMobile", function (value, element) {
    var length = value.length;
    var mobile = /^(1[34578]\d{9})$/;
    return this.optional(element) || (length == 11 && mobile.test(value));
}, "请正确填写您的手机号码");

$("#login_form").validate({
    debug: true,
    errorElement: "p",
    rules: {
        Phone: {
            required: true,
            isMobile: true
        },
        password: {
            required: true,
            minlength: 6,
            maxlength: 16
        }
    },
    messages: {
        Phone: {
            required: "请输入手机号",
            isMobile: "请输入正确的手机号码"
        },
        password: {
            required: "请输入密码",
            minlength: "密码最小长度6位",
            maxlength: "密码最长为16位"

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
        $.post("/user/UserLogin", $("#login_form").serialize(), function (data) {
            if (data.IsSuccess) {
                if (typeof (currentUrl) != "undefined") {
                    if (typeof (popup) != "undefined") {
                        popup.closePopup();
                    }
                    location.reload();
                }
                else {
                    if (data.Isbroker) {
                        location.href = "/usercenter/brokerindex";
                    } else {
                        location.href = "/";
                    }

                }

            }
            else {
                $("#mima").addClass("error_bg");
                $("#mima").append("用户名或密码错误");
            }
        })
    }
});

