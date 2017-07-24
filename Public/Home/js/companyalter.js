var AreaId = $("#InpAreaId").val() == "0" ? "" : $("#InpAreaId").val();
jQuery.validator.addMethod("chcharacter", function (value, element) {
    var tel = /^[\u4e00-\u9fa5]+$/;
    return this.optional(element) || (tel.test(value));
}, "请输入汉字");
jQuery.validator.addMethod("modelphone", function (value, element) {
    var phone = /^(\d{3,4}\-?)?\d{7,8}$/;
    return this.optional(element) || (phone.test(value));
}, "请重新输入固定电话");
$("#sub_company").validate({
    debug: true,
    errorElement: "span",
    rules: {
        name: "required",
        Name: {
            required: true

        },
        Introduction: {
            required: true,
            minlength: 50
        },
        contact: {
            required: true,
            chcharacter: true
        },
        TelPhone: {
          //  required: true,
            modelphone: true
        },
        Email: {
            email: true
        },
        address: {
            required: true
        },
        AreaId: {
            required: true
        }

    },
    messages: {
        Name: {
            required: "公司名称不能为空"
        },
        Introduction: {
            required: "公司简介不能为空",
            minlength: "公司简介不能小于50个字"
        },
        contact: {
            required: "联系人不能为空"
        },
        TelPhone: {
            //required: "固定电话不能为空",
            minlength: "电话号码输入错误"
        },
        Email: {
            email: "请输入正确的邮箱"
        },
        address: {
            required: "地址不能为空"
        },
        AreaId: {
            required: "请选择地区"
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

    },
    submitHandler: function () {
        $.post(""+Home_Accountinfor_companyalter+"", $("#sub_company").serialize(), function (data) {
            var data=JSON.parse(data);
            if (data.IsSuccess) {
                popup.msgPopup(data.Msg);
            }
        })
    }
})
$(document).ready(function () {
  
});
 