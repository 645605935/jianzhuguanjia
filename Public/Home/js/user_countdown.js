
//用户注册短信验证码
function settime(obj) {
    var phoneCheck = /^(1[34578]\d{9})$/;
    if (!phoneCheck.test($("#Phone").val())) {
        $("#phone_error").text("请输入手机号");
        $("#phone_error").addClass("messge").addClass("error_bg");
        return;
    } else {
        $.post("/sms/getvalidatecode", { phone: $("#Phone").val(), code: $("#IdentifyingCode").val() }, function (data) {
            if (!data.IsSuccess) {
                $("#identifyingCode_error").text("验证码发送失败,请重新获取");
                $("#identifyingCode_error").addClass("messge").addClass("error_bg");
            }
        });
    }

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
            $("#smsId").val("免费获取验证码");
            timeout = 60;
            $("#smsId").removeAttr("disabled");
            $("#hint").css("display", "block");
            $("#registerId").val("跳过验证，免费注册");
        }
    }, 1000);
}

//打开和关闭服务条款js；
window.onload = function () {
    var x = document.getElementById("x");
    var k = document.getElementById("k");
    var kk = document.getElementById("agree2");
    var popup = document.getElementById("popup");

    k.onclick = function () {
        popup.style.display = "block";
    };
    x.onclick = function () {
        popup.style.display = "none";
    };
    kk.onclick = function () {
        popup.style.display = "none";
        $("#Agree").prop("checked", "checked");
    };
};