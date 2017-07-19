

jQuery.validator.addMethod("chcharacter", function (value, element) {
    var tel = /^[\u4e00-\u9fa5]+$/;
    return this.optional(element) || (tel.test(value));
}, "请输入汉字");

jQuery.validator.addMethod("SelectExperience", function (value, element) {
    return value != 0;
}, "请填写公司规模");
jQuery.validator.addMethod("SelectRequired", function (value, element) {
    return value != 0;
}, "请填写公司规模");
jQuery.validator.addMethod("isMobile", function (value, element) {
    var length = value.length;
    var mobile = /^(1[34578]\d{9})$/;
    return this.optional(element) || (length == 11 && mobile.test(value));
}, "请正确填写您的手机号码");
$("#perfet_form").validate({
    debug: true,
    errorElement: "p",
    rules: {
        Advantage: {
            required: true,
            maxlength: 35
        },
        Introduction: {
            required: true,
            minlength: 50,
        },
        ServeAreaPid: {
            required: true
        },
        MemberName: {
            required: true,
            chcharacter: true,
            minlength: 2,
            maxlength: 4
        },
        MemberPhone: {
            required: true,
            isMobile: true
        }
    },
    messages: {
        Advantage: {
            required: "请输入公司优势",
            maxlength: "公司优势不多于{0}个字"
        },
        Introduction: {
            required: "请输入公司简介",
            minlength: "公司简介不能少于{0}个字",
        },
        ServeAreaPid: {
            required: "请选择省份服务地区"
        },
        MemberName: {
            required: "请输入姓名",
            minlength: "姓名限制2-4个汉字",
            maxlength: "姓名限制2-4个汉字"
        },
        MemberPhone: {
            required: "请输入手机号"
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
        /*专业验证*/
        ValidSubject();
    },
    success: function (element) {
        /*专业验证*/
        ValidSubject();
    },
    submitHandler: function () {
        $.post("/user/companyperfect", $("#perfet_form").serialize(), function (data) {
            if (data.IsSuccess) {
                if ($("#Imageimg_div").children().length == 0) {
                    location.href = "/user/waitresult";
                }
                upload.StartUpload();
                upload1.StartUpload();
            } else {
                alert(data.messages);
            }
        });
    }
});



$("#perfer_from").click(function () {
    ValidSubject();
});
function ValidSubject() {
    var subjects = "";
    $("#zizhi button").each(function (e, t) {
        if ($(t).hasClass("in")) {
            subjects += $(t).val();
            //if (e < $("#zizhi button[class='in']").length - 1) {
                subjects += ",";
            //}
        }
        $("#SubjectIds").val(subjects);
        if (subjects == "") {
            $("#subject_error").addClass("error_bg");
            $("#subject_error").text("请选择业务范围分类");
        } else {
            $("#subject_error").removeClass("error_bg");
            $("#subject_error").text("");
        }
    });
}

function removeImg(obj) {
    var imgUrl = $(obj).parent().prev().attr("src");
    if (imgUrl.indexOf("data:") == -1) {
        $.post("/company/removeimage", { imgUrl: imgUrl }, function (data) {
            if (!data.IsSuccess) {
                popup.msgPopup(data.Msg);
            }
        });
    } else {
        var removefile = upload1.Upload.getFile($(obj).parent().prev().attr("id"));
        upload1.Upload.removeFile(removefile);
    }
    $(obj).parent().prev().remove();
    $(obj).parent().remove();
}

window.onload = function () {

    //var now = 0;
    //var pluss = document.getElementById("plus");
    //pluss.onclick = function () {
    //    var oiframe = document.getElementById("iframes");
    //    var oiframes = oiframe.cloneNode(true);
    //    var im = $("#Image_PicurePreview" + now);
    //    var ims = im.cloneNode(true);
    //    ims.attr("id", "Image_PicurePreview0" + now);

    //    oiframes.id = "oiframe" + now++
    //    oiframes.appendChild(ims);
    //    var fuzhi = document.getElementById("fuzhi");
    //    fuzhi.insertBefore(oiframes, pluss);
    //};

    var zizhi = document.getElementById("zizhi").getElementsByTagName("button");
    var noo = 0;
    for (var i = 0; i < zizhi.length; i++) {
        zizhi[i].index = i;
        zizhi[i].onclick = function () {
            noo = this.index;
            if ($("#zizhi button.in").length >= 6 && zizhi[noo].className != "in") {
                $("#subject_error").addClass("error_bg");
                $("#subject_error").text("您最多可选择6个金牌资质服务分类");
                return;
            }
            if (zizhi[noo].className == "in") {
                zizhi[noo].className = "";
                $("#subject_error").removeClass("error_bg");
                $("#subject_error").text("");
            } else {
                zizhi[noo].className = "in";
                $("#subject_error").removeClass("error_bg");
                $("#subject_error").text("");
            }
            ValidSubject();
        };
    }
};


$("#plus").change(function () {
    var objUrl = getObjectURL(this.files[0]);
    //console.log("objUrl = " + objUrl);
    if (objUrl) {
        $(".img1").attr("src", objUrl);
        $(".img1").css("width", "128px");
    }
});