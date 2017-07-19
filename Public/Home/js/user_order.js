function delOrder(isAll, orderType, orderId) {
    var arrChk = [];
    if (isAll) {
        arrChk = $("#tb_order input:checkbox[value!='']:checked");
        if (arrChk.length==0) {
            popup.msgPopup("请选择您要删除的订单");
            return;
        }
    }

    if (confirm("确定要删除选择好的订单吗？")) {
        var strOrderId = "";
        if (isAll) {
            $.each(arrChk, function (i, item) {
                strOrderId += $(item).attr("value") + "," + $(item).attr("id");
                if (i < arrChk.length - 1) {
                    strOrderId += "#";
                }
            });
        } else {
            strOrderId = orderType + "," + orderId;
        }

        $.post("/order/delorder", { strOrderId: strOrderId }, function (data) {
            if (data.IsSuccess) {
                location = location;
            }
        });
    }
}

function check(obj) {
    $("#tb_order input[type=checkbox]").attr("checked", obj.checked).prop("checked", obj.checked);
}


//搜索

$(function () {
  
    $("#ProductName").change(function () {
        $("#search_form").submit();
     });
  });
