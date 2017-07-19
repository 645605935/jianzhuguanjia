//报价表格、标准、承包范围
$(document).ready(

    );
function getDetail(id) {
    $.post("/userapplication/getdetail", { id: id }, function (data) {
        if (data.IsSuccess) {
            var summary = '<span class="zzdb_xiangqzt"> 1 </span>个技术负责人，<span class="zzdb_xiangqzt"> 10 </span>个技工，<span class="zzdb_xiangqzt"> 1 </span>个一级建造师，<span class="zzdb_xiangqzt"> 2 </span>个二级建造师，<span class="zzdb_xiangqzt"> 5 </span>个中级职称证书，<span class="zzdb_xiangqzt"> 15 </span>个八大员 ';
            var summary = data.SubPname + "-" + data.SubName + "-" + data.MajorLevel + "需要匹配的人员：";
            var baoJiaHtml = '<table width="680" height="500" border="0" align="center" cellpadding="0" cellspacing="0" class="biaojiab">';
            baoJiaHtml += '<tr><td width="84" height="50" align="center" valign="middle" id="biaoj_title1">费用分类</td>';
            baoJiaHtml += '<td width="76" height="50" align="center" valign="middle" id="biaoj_title2">人员类别</td>';
            baoJiaHtml += '<td width="68" height="50" align="center" valign="middle" id="biaoj_title3">人数</td>';
            baoJiaHtml += '<td width="124" height="50" align="center" valign="middle" id="biaoj_title4">专业均价（万）</td>';
            baoJiaHtml += '<td width="98" height="50" align="center" valign="middle" id="biaoj_title5">小计（万）</td>';
            baoJiaHtml += '<td width="230" height="50" align="center" valign="middle" id="biaoj_title6">所需专业</td></tr>';

            var detailJson = $.parseJSON(data.Detail);
            for (var i = 0; i < detailJson.length; i++) {
                summary += '<span class="zzdb_xiangqzt"> ' + detailJson[i].Number + ' </span>个' + detailJson[i].SubjectPname;
                if (i < detailJson.length - 1) {
                    summary += ',';
                }
                baoJiaHtml += '<tr>';
                if (detailJson[i].SubjectPname == '技术负责人') {
                    baoJiaHtml += '<td height="50" rowspan="' + detailJson.length + '" align="center" valign="middle">人员费用</td>';
                }
                baoJiaHtml += '<td height="50" align="center" valign="middle"><p>' + detailJson[i].SubjectPname + '</p></td>';
                baoJiaHtml += '<td height="50" align="center" valign="middle">' + detailJson[i].Number + '</td>';
                baoJiaHtml += '<td height="50" align="center" valign="middle">' + detailJson[i].Price + '</td>';
                baoJiaHtml += '<td height="50" align="center" valign="middle">' + detailJson[i].SubTotal + '</td>';
                if (detailJson[i].SubjectPname == '技术负责人') {
                    baoJiaHtml += '<td align="center" valign="middle" id="baojiabiao_biaogx">----</td>';
                } else {
                    baoJiaHtml += '<td id="baojiabiao_biaogx" height="50" align="center" valign="middle">' + detailJson[i].SubjectName + '</td>';
                }
                baoJiaHtml += '</tr>';
            }

            baoJiaHtml += '<tr><td height="50" align="center" valign="middle">服务代理费</td>';
            baoJiaHtml += '<td height="50" colspan="3" align="center" valign="middle">---------------------</td>';
            baoJiaHtml += '<td height="50" align="center" valign="middle"><span class="biaojb_zongj">' + data.ServiceCost + '</span></td>';
            baoJiaHtml += '<td id="baojiabiao_biaogx" height="50" align="center" valign="middle">----</td></tr>';
            baoJiaHtml += '<tr><td height="50" align="center" valign="middle" id="baojiabiao_biaogx2">总计</td>';
            baoJiaHtml += '<td height="50" colspan="3" align="center" valign="middle" id="baojiabiao_biaogx2">----------------------</td>';
            baoJiaHtml += '<td height="50" align="center" valign="middle" id="baojiabiao_biaogx2"><span class="biaojb_zongj">' + data.TotalCost + '</span></td>';
            baoJiaHtml += '<td id="baojiabiao_biaogx" style=" border-bottom:2px solid #cacaca;" height="50" align="center" valign="middle">----</td></tr></table>';
            $("#subsummary").html(summary);
            $("#baojia").html(baoJiaHtml);
            data.Content = data.Content.replace("资质标准", "");
            var index = data.Content.indexOf('承包工程范围');
            var str1 = data.Content.substring(0, index);
            var str2 = data.Content.substring(index, data.Content.length);
            var index1 = str1.lastIndexOf("<p");
            var index2 = str2.indexOf("</p>");
            str1 = str1.substring(0, index1);
            str2 = str2.substring(index2 + 4, str2.length);
            $("#intro").show();
            $("#usage").show();
            $("#biaozhun").html(str1);
            $("#fanwei").html(str2);

            if ($("#zhinengbj_wenz") != undefined) {
                $("#zhinengbj_wenz").empty().html('<span class="baijia_wenz" id="baijia_wenz" style="font-size:16px;padding-left:10px;">' + data.TotalCost + '</span> 万 （以<font color="#ff4400;">北京</font>为参考 )');
            }
        }
    });
}