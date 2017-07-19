function pop(id) {
    popup.pagePopup("免费报价", "/company/quoteBox?cid=" + id, "500", "360");
}


function showPhone(companyId) {
    var html = "";
    $.post("/company/GetPhone", { cid: companyId }, function (data) {
        if (data.IsSuccess) {
            document.getElementById(companyId).innerHTML = data.phone;
            $("." + companyId).css("display", "none");
            html += "&nbsp;&nbsp;<font color='#333' size='3'>" + data.contact + "</font>";
            $("#" + companyId).append(html);
        }
    });
};
//公司列表页我要获取报价随滚动位置显示
$(function () {
    (function Scroll() {
        $(window).scroll(function () {
            if ($(document).scrollTop() > $('.company_r').height()-20) {
                $('#zhizgj_left').addClass('scroll').css('top', $(document).scrollTop() + 70);
            }
            else {
                $('#zhizgj_left').remove('scroll').css('top', '0px');
            }
        });
    })();
});