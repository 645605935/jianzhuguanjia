$(function () {
    $(function () {
        Scroll();
        $('#majorLevel_').html('<option value="0" selected="selected">请选择专业等级</option>');
        $('#SubjectType_').html('<option value="0" selected="selected">请选择资质专业</option>');
        Page.SubjectPTypeChangeSubjectType('SubjectPType_', 'SubjectType_', 'SubjectLv_');
        Page.SubjectTypeChangeSubjectLv('SubjectPType_','SubjectType_', 'SubjectLv_');
        //InitMajorByPType();
        //InitSTypeByMarjor();
        //资质代办公司连接加载（根据定位加载）
        var cookie = getCookie("PC_HEADER_CITY_LOCATION");
        if (cookie != null && cookie != "") {
            cookie = eval("(" + cookie + ")");
            if (cookie.Id == -1)
                $('.xiangqy_jisq_qitlj a:eq(1)').attr('href', '/zizhi/');
            else
                $('.xiangqy_jisq_qitlj a:eq(1)').attr('href', '/' + cookie.PinYin + '-zizhi/');
        }
    });
    var Page = {
        SubjectPTypeChangeSubjectType: function (subjectPTypeElem, subjectTypeElem, subjectLvElem) {
            $('#' + subjectPTypeElem).change(function () {
                Page.SubjectPTypeChangeBaoJiaUrl($('.xiangqy_jisq_qitlj a:eq(0)'));
                var subjectPTypeVal = $(this).val();
                if (subjectPTypeVal <= 0) {
                    $('#' + subjectTypeElem).html('<option value="0">请选择资质专业</option>');
                    $('#' + subjectLvElem).html('<option value="0">请选择专业等级</option>');
                    return false;
                }                
                Page.SubjectPTypeChangeNormalUrl(subjectPTypeVal);
                var arrSubjectType = [];
                arrSubjectType.push('<option value="0">请选择资质专业</option>');
                $.each(subject_baojia, function (index, item) {
                    if (item.ParentId == subjectPTypeVal)
                        arrSubjectType.push('<option value=' + item.Id + '>' + item.Name + '</option>');
                });
                $('#' + subjectTypeElem).html(arrSubjectType.join(''));
            });
        },
        SubjectTypeChangeSubjectLv: function (subjectPTypeElem,subjectTypeElem, subjectLvElem) {
            $('#' + subjectTypeElem).change(function () {
                var subjectTypeVal = $(this).val();
                Page.SubjectTypeChangeBaoJiaUrl(subjectTypeVal, $('.xiangqy_jisq_qitlj a:eq(0)'));
                if (subjectTypeVal <= 0) {
                    $('#' + subjectLvElem).html('<option value="0">请选择专业等级</option>');
                    return false;
                }
                Page.SubjectTypeChangeNormalUrl(subjectPTypeElem, subjectTypeVal);
                var arrSubjectLv = [];
                //arrSubjectLv.push('<option value="0">请选择专业等级</option>');
                $.each(subject_baojia, function (index, item) {
                    if (item.Id == subjectTypeVal) {
                        $.each(item.MajorLevel, function (index, item) {
                            if (item.LevelFlag == 1)
                                arrSubjectLv.push('<option value="' + item.LevelValue + '">' + item.LevelText + '</option>');
                        });
                    }
                });
                $('#' + subjectLvElem).html(arrSubjectLv.join(''));
            });
        },
        //修改资质标准url
        SubjectPTypeChangeNormalUrl: function (subjectPTypeVal) {
            var certificateNormalId = subjectPTypeVal;
            if (certificateNormalId > 0)
                $('.xiangqy_jisq_qitlj a:eq(2)').attr('href', '/zzbz/' + certificateNormalId + '.html');
            else
                $('.xiangqy_jisq_qitlj a:eq(2)').attr('href', '/zzbz/');
        },
        //修改资质标准url
        SubjectTypeChangeNormalUrl: function (subjectPTypeElem, subjectTypeVal) {
            var certificateNormalId = subjectTypeVal;
            if (certificateNormalId > 0)
                $('.xiangqy_jisq_qitlj a:eq(2)').attr('href', '/zzbz/' + certificateNormalId + '.html');
            else {
                certificateNormalId = $('#' + subjectPTypeElem).val();
                if (certificateNormalId > 0)
                    $('.xiangqy_jisq_qitlj a:eq(2)').attr('href', '/zzbz/' + certificateNormalId + '.html');
                else
                    $('.xiangqy_jisq_qitlj a:eq(2)').attr('href', '/zzbz/');
            }
        },
        //修改获取报价Url
        SubjectPTypeChangeBaoJiaUrl: function (baoJiaElemObj) {
            baoJiaElemObj.attr('href', '/baojia/');
        },
        //修改获取报价Url
        SubjectTypeChangeBaoJiaUrl: function (subjectTypeVal, baoJiaElemObj) {
            if (subjectTypeVal > 0)
                baoJiaElemObj.attr('href', '/baojia?subjectId=' + subjectTypeVal);
            else
                baoJiaElemObj.attr('href', '/baojia/');
        }
    }
    //开始计算按钮点击获取报价
    $('.xiangqy_jis_ann').on('click', function () {
        var id = $('#SubjectType_ option:selected').val();
        if (id <= 0) {
            NotSelectTip();
            return;
        }
        $.post('/userapplication/getdetail', { id: id }, function (data) {
            if (data.IsSuccess) {
                $('.jisq_yusbj').text(data.TotalCost).css('font-size', '19px');
                $('#wy').text('万元');
            }
        });
    });
    //没有选择资质专业修改提示
    function NotSelectTip() {
        $('.jisq_yusbj').html('请选择资质类型、专业及等级').css('font-size', '16px');
        $('#wy').text('');
    }
    function ChangeNormalUrl() {
        var SubjectPType = $('#SubjectPType_ option:selected').val();
        if (SubjectPType != 0) {
            $('.xiangqy_jisq_qitlj a:eq(2)').attr('href', '/zzbz/' + SubjectPType + '.html');
        } else
            $('.xiangqy_jisq_qitlj a:eq(2)').attr('href', '/baike/');
    }
    //滚动条滚动事件（报价模块根据滚动位置定位）
    function Scroll() {
        $(window).scroll(function () {
            //.details-cons元素底部距离网页头的高度-滚动高度-header高度
            var index = $('.details-cons').offset().top + $('.details-cons').height() - $(document).scrollTop() - 94;
            if (index < 0)
                $('#zhizgj_left').addClass('scroll').css('top', $(document).scrollTop() + 40);
            else
                $('#zhizgj_left').remove('scroll').css('top', '0px');
        });
    }
    //点击定位更改资质代办公司链接
    $('#city_list a').each(function () {
        $(this).bind('click', function () {
            var checkedCity = $(this).text();//点击的城市名称
            if (checkedCity == '全国') {
                $('.xiangqy_jisq_qitlj a:eq(1)').attr('href', '/zizhi/');
                return;
            }
            $('.areas_zzdbgs a').each(function () {
                if ($(this).text() == checkedCity) {
                    $('.xiangqy_jisq_qitlj a:eq(1)').attr('href', $(this).attr('href'));
                    return;//退出循环
                }
            });
        });
    });

});