$("#add_CaseInfo").validate({
    debug: true,
    errorElement: "span",
    rules: {
        SubjectType: {
            required: true
        },
        CompanyName: {
            required: true
        },
        Business: {
            maxlength: 60
        },
        ExDate: {
            required: true
        },
        Price: {
            required: true
        },
        BusinessTeam: {
            maxlength: 50
        }
    },
    messages: {
        SubjectType: {
            required: "请选择专业类型"
        },
        CompanyName: {
            required: "请输入公司名称"
        },
        Business: {
            maxlength: "合作业务不能多于{0}个字"
        },
        ExDate: {
            required: "请选择办理周期"
        },
        Price: {
            required: "请输入办理价格"
        },
        BusinessTeam: {
            maxlength: "人员配置不能多于{0}个字"
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
        IsImageUrl();
    },
    submitHandler: function () {
        if (IsImageUrl())
        {
            $.post("/company/updatecaseinfo", $("#add_CaseInfo").serialize(), function (data) {
                if (data.IsSuccess) {
                    upload.StartUpload();
                    if ($("#CaseInfo_PicurePreview").children().attr("src").indexOf("data:") == -1) {
                        location.href = "/company/caseinfo";
                    }
                } else {
                    popup.msgPopup(data.Msg);
                }
            });
        }
    }
});

function deleteByUrl(companyName, subjectType) {
    if (confirm("确定删除此条案例吗？")) {
        $.post("/company/deletecaseinfo", { companyName: companyName, subjectType: subjectType }, function (data) {
            if (data.IsSuccess) {
                location = location;
            } else {
                popup.msgPopup(data.Msg);
            }
        })
    }
}
function IsImageUrl()
{
    if ($("#CaseInfo_PicurePreview").children().attr("src").length != 0 && $("#CaseInfo_PicurePreview").children().attr("src").toLowerCase() != "/images/tx.png") {
        $("#CaseImgError").removeClass("messge error_bg");
        $("#CaseImgError").text("");
        return true;
    } else {
        $("#CaseImgError").addClass("messge error_bg");
        $("#CaseImgError").css("color", "#F66");
        $("#CaseImgError").text("请选择一张图片");
        return false;
    }
}
