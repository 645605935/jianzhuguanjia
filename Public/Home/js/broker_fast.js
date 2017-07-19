function delOrder(isAll, orderId) {
    var arrChk = [];
    if (isAll) {
        arrChk = $("#tb_order input:checkbox[value!='']:checked");
        if (arrChk.length == 0) {
            popup.msgPopup("请选择您要删除的订单");
            return;
        }
    }

    if (confirm("确定要删除选择好的订单吗？")) {
        var strOrderId = "";
        if (isAll) {
            $.each(arrChk, function (i, item) {
                strOrderId += $(item).attr("id");
                if (i < arrChk.length - 1) {
                    strOrderId += "#";
                }
            });
        } else {
            strOrderId = orderId;
        }

        $.post("/usercenter/delorder", { strOrderId: strOrderId }, function (data) {
            if (data.IsSuccess) {
                location = location;
            }
        });
    }
}

function check(obj) {
    $("#tb_order input[type=checkbox]").attr("checked", obj.checked).prop("checked",

        obj.checked);
}
//查询

$(function () {

    $("#TimeType").change(function () {
        $("#search_form").submit();
    });
});
/*显示手机号*/
//function ShowPhone(Id)
//{
//    var htmlId = Id;
//    $.post("/usercenter/getphone", { id: Id }, function (data) {
//        if (data.IsSuccess) {
//            $("#"+htmlId).text(data.phone);
//        }
//    });
//}
function ShowPhone(Id) {
    ShowTip();
    $('#selectedOrderUid').val(Id);
}
$('#btn_confirm').click(function () {
    $('#btn_confirm').attr("disabled", true).css('background', 'gray');
    var orderId = $('#selectedOrderUid').val();
    var ticketCount = $('#NowTicketCount').val();
    if (ticketCount <= 0) {
        CloseTip();
        return;
    }
    $.post("/usercenter/GetOrderPhone", { orderId: orderId }, function (data) {
        if (data.IsSuccess) {
            $("#" + orderId).text(data.phone);
            $('#NowTicketCount').val(ticketCount - 1);
            CloseTip();
        }
        else if (data.Msg == 'NoLogin') {
            location.href = '/user/userlogin/';
        }
        $('#btn_confirm').attr("disabled", false).css('background', '#ff4400');
    });
});
$('.theme-poptit .close').click(function () {
    CloseTip();
});
$('#btn_cancel').click(function () {
    CloseTip();
});
function ShowTip() {
    var NowTicketCount = $('#NowTicketCount').val();
    if (NowTicketCount <= 0) {
        $('.tank_wenz2').html('<p class="striking" style="font-size:24px;">对不起，余“券”不足！</p><p>此次查看将花费<span class="striking"> 1 </span>个订单券，您有<span class="striking"> 0 </span>个可用</p>');
    } else {
        $('.tank_wenz2').html('<p>此次查看将花费<span class="striking">&nbsp;1&nbsp;</span>个订单券，<span class="striking">确认查看？</span></p><p>您当前拥有<span class="striking">&nbsp;' + NowTicketCount + '&nbsp;</span>个订单券<span class="yebz_span"></span></p>');
    }
    $('.theme-popover-mask').fadeIn(100);
    $('.theme-popover').slideDown(200);
}
function CloseTip() {
    $('.theme-popover-mask').fadeOut(100);
    $('.theme-popover').slideUp(200);
}
