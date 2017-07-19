
jQuery.validator.addMethod("chcharacter", function (value, element) {
    var tel = /^[\u4e00-\u9fa5]+$/;
    return this.optional(element) || (tel.test(value));
}, "请输入汉字");

jQuery.validator.addMethod("SelectRequired", function (value, element) {
    return value != 0;
}, "请填写公司规模");

$("#sub_license").validate({
    debug: true,
    errorElement: "p",
    rules: {
        CompanyName: {
            required: true
        },
        AreaId: {
            required: true
        },
        Address: {
            required: true
        },
        Scale: {
            SelectRequired: true
        }
    },
    messages: {
        CompanyName: {
            required: "请输入公司名称全称"
        },
        AreaId: {
            required: "请选着公司地址"
        },
        Address: {
            required: "请填写详细地址"
        },
        Scale: {
            SelectRequired: "请填写公司规模"
        }
    },
    errorPlacement: function (error, element) {
        while (!(element[0].nodeName == "DIV" || element[0].nodeName == "LI")) {
            element = element.parent();
        }
        element.children("span.messge").text(error.text());
        if (error.text() != "") {
            element.children("span.messge").addClass("error_bg");
        }
        else {
            element.children("span.messge").removeClass("error_bg");
        }
        ValidPicture();
    },
    success: function (element) {
        ValidPicture();
    },
    submitHandler: function () {
        $.post("/user/companyattesta", $("#sub_license").serialize(), function (data) {
            if (data.IsSuccess) {
                upload.StartUpload();
                popup.msgPopup(data.Msg);
            } else {
                popup.msgPopup(data.Msg);
            }
        });
    }
});

/*图片验证*/
function ValidPicture() {
    if ($("#LicenseImg").attr("src").length != 0) {
        $("#LicenseError").removeClass("messge error_bg");
        $("#LicenseError").text("");
    } else {
        $("#LicenseError").addClass("messge error_bg");
        $("#LicenseError").css("color", "#F66");
        $("#LicenseError").text("请选择一张图片");
        return;
    }
}
/*查看案例*/
$("#LicensePreview").click(function () {
    $(".frame2").css("left", "380px");
});

$("#see").click(function () {

    $(".frame2").css("display", "block");
    if ($("#License_ImgDiv").css("display") != "none") {
        $(".frame2").css("left", "380px");
    }
    $("#sample").css("height", "245px");
    $("#img1").attr("src", "/Images/sl.png");
    $("#img1").css("width", "192px");
    $("#img1").css("height", "137px");
    $("#img1").css("margin-top", "41px");
})

$("#Case").click(function () {
    if ($("#Caseshow").css("display") == "none") {
        $("#Caseshow").css("display","block");
    } else {
        $("#Caseshow").hide();
    }

});
$("#License").click(function () {
    $("#Caseshow").css("margin-left","200px");
});