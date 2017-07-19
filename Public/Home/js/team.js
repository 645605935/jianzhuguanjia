
jQuery.validator.addMethod("isphone", function (value, element) {
    var phone = /^(\d{3,4}\-?)?\d{7,8}$/;
    return this.optional(element) || (phone.test(value));
}, "请输入正确的固定电话或手机号");

$("#add_Team").validate({
    debug: true,
    errorElement: "span",
    rules: {
        MemberName: {
            required: true
        },
        MemberPhone: {
            required: true,
            isphone: true
        },
        MemberExperience: {
            required: true
        }
    },
    messages: {
        MemberName: {
            required: "请输入姓名"
        },
        MemberPhone: {
            required: "请输入联系方式"
        },
        MemberExperience: {
            required: "请选择从业经验"
        }
    },
    errorPlacement: function (error, element) {
        while (!(element[0].nodeName == "LI")) {
            element = element.parent();
        }
        element.children("span.messge").text(error.text());
        if (error.text() != "") {
            element.children("span.messge").addClass("error_bg");
        }
        else {
            element.children("span.messge").removeClass("error_bg");
        }
    },
    success: function (element) {
        //if ($("#Team_PicurePreview").children().attr("src").length != 0 && $("#Team_PicurePreview").children().attr("src").toLowerCase() != "/images/tx.png") {
        //    $("#TeamImgError").removeClass("messge error_bg");
        //    $("#TeamImgError").text("");
        //} else {
        //    $("#TeamImgError").addClass("messge error_bg");
        //    $("#TeamImgError").css("color", "#F66");
        //    $("#TeamImgError").text("请选择一张图片");
        //    return;
        //}
    },
    submitHandler: function () {
        $.post("/company/updateteam", $("#add_Team").serialize(), function (data) {
            if (data.IsSuccess) {
                upload.StartUpload();
                if ($("#Team_PicurePreview").children().attr("src").indexOf("data:") == -1) {
                    location.href = "/company/team";
                }
            } else {
                popup.msgPopup(data.Msg);
            }
        })
    }
});

function deleteTeam(phone, isHot) {
    if (isHot=="true") {
        popup.msgPopup("热线联系人作为24小时联络对象，故无法删除。");
    } else {
        if (confirm("确定删除此团队成员吗？")) {
            $.post("/company/deleteteam", { phone: phone }, function (data) {
                if (data.IsSuccess) {
                    location = "/company/team";
                } else {
                    popup.msgPopup(data.Msg);
                }
            });
        }
    }
}