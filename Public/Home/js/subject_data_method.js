//subject_ptype：json数据源
var InitSubject = {
    //调用用此方法加载三个下拉框（没有默认选中）
    Init: function (subjectPTypeElem, subjectTypeElem, subjectLvElem) {
        InitSubject.InitSubjectPType(subjectPTypeElem);
        InitSubject.SubjectPTypeChangeSubjectType(subjectPTypeElem, subjectTypeElem, subjectLvElem);
        InitSubject.SubjectTypeChangeSubjectLv(subjectPTypeElem, subjectTypeElem, subjectLvElem);
    },
    //调用用此方法加载三个下拉框（有默认值）
    InitWithVal: function (subjectPTypeElem, subjectTypeElem, subjectLvElem, subjectPTypeVal, subjectTypeVal, subjectLvVal) {
        //change事件
        InitSubject.SubjectPTypeChangeSubjectType(subjectPTypeElem, subjectTypeElem, subjectLvElem);
        InitSubject.SubjectTypeChangeSubjectLv(subjectPTypeElem, subjectTypeElem, subjectLvElem);
        //加载下拉选项数据
        InitSubject.InitSubjectPType(subjectPTypeElem);//加载资质类型
        $('#' + subjectPTypeElem + ' option[value=' + subjectPTypeVal + ']').attr('selected', 'selected');
        InitSubject.InitSubjectType(subjectPTypeVal, subjectTypeElem, subjectLvElem);//加载资质专业
        $('#' + subjectTypeElem + ' option[value=' + subjectTypeVal + ']').attr('selected', 'selected');
        //加载资质专业
        var arrLv = [];
        if (subjectLvVal > 0) {
            $.each(subject_type, function (index, item) {
                if (item.Id == subjectTypeVal) {
                    if (item.MajorLevel != null) {
                        $.each(item.MajorLevel, function (index, item) {
                            if (item.LevelValue == subjectLvVal)
                                arrLv.push('<option value="' + item.LevelValue + '" selected="selected">' + item.LevelText + '</option>');
                            else
                                arrLv.push('<option value="' + item.LevelValue + '">' + item.LevelText + '</option>');
                        });
                        return false;
                    }
                }
            });
            if (arrLv.length == 0) {
                $.each(subject_ptype, function (index, item) {
                    if (item.Id == subjectPTypeVal && item.MajorLevel != null) {
                        $.each(item.MajorLevel, function (index, item) {
                            if (item.LevelValue == subjectLvVal)
                                arrLv.push('<option value="' + item.LevelValue + '" selected="selected">' + item.LevelText + '</option>');
                            else
                                arrLv.push('<option value="' + item.LevelValue + '">' + item.LevelText + '</option>');
                        });
                        return false;
                    }
                });
            }
            if (arrLv.length == 0)
                arrLv.push('<option value="0">一 一</option>');
        } else {
            arrLv.push('<option value="0">一 一</option>');
        }
        $('#' + subjectLvElem).html(arrLv.join(''));
    },
    InitSubjectPType: function (subjectPTypeElem) {
        var arr = [];
        arr.push('<option value>资质类型</option>');
        $.each(subject_ptype, function (index, item) {
            arr.push('<option value="' + item.Id + '">' + item.Name + '</option>');
        });
        $('#' + subjectPTypeElem).html(arr.join(''));
    },
    InitSelect: function (selectElem, initVal, initText) {
        if (initVal == '')
            $('#' + selectElem).html('<option value>' + initText + '</optin>');
        else
            $('#' + selectElem).html('<option value=' + initVal + '>' + initText + '</optin>');
    },
    //1、选中的资质类型存在资质专业
    //2、选中的资质类型不存在资质专业
    InitSubjectType: function (subjectPTypeVal, subjectTypeElem, subjectLvElem) {
        if (subjectPTypeVal == null || subjectPTypeVal <= 0) {
            InitSubject.ClearSubjectTypeOptions(subjectTypeElem);
            InitSubject.ClearSubjectLvOptions(subjectLvElem);
            return;
        }
        var arrSub = [];
        var arrSubLv = [];
        arrSub.push('<option value>资质专业</option>');
        $.each(subject_type, function (index, item) {//专业类型存在子专业   加载子专业
            if (item.ParentId == subjectPTypeVal)
                arrSub.push('<option value="' + item.Id + '">' + item.Name + '</option>');
        });
        if (arrSub.length == 1)//专业类型不存在子专业   1、加载子专业，显示为一 一 2、加载专业类型中存储的专业等级信息
        {
            arrSub = [];
            arrSub.push('<option value="0">一 一</option>');
            var majorLv;
            $.each(subject_ptype, function (index, item) {
                if (item.Id == subjectPTypeVal)
                    majorLv = item.MajorLevel;
            });
            if (majorLv != '' && majorLv != null) {
                if (majorLv != '0') {
                    $.each(majorLv, function (index, item) {
                        if (item.LevelFlag == 0)
                            arrSubLv.push('<option value="' + item.LevelValue + '">' + item.LevelText + '</option>');
                    });
                } else {
                    arrSubLv.push('<option value="0">一 一</option>');
                }
            }
            $('#' + subjectLvElem).html(arrSubLv.join(''));
        }
        $('#' + subjectTypeElem).html(arrSub.join(''));
    },
    SubjectPTypeChangeSubjectType: function (subjectPTypeElem, subjectTypeElem, subjectLvElem) {
        $('#' + subjectPTypeElem).change(function () {
            $('#' + subjectLvElem).html('<option value>资质等级</option>');
            var subjectPTypeVal = $(this).val();
            InitSubject.InitSubjectType(subjectPTypeVal, subjectTypeElem, subjectLvElem);
        });
    },
    SubjectTypeChangeSubjectLv: function (subjectPTypeElem, subjectTypeElem, subjectLvElem) {
        $('#' + subjectTypeElem).change(function () {
            var subjectPTypeVal = $('#' + subjectPTypeElem).val();
            var subjectTypeVal = $(this).val();
            if (subjectTypeVal == null || subjectTypeVal <= 0) {
                InitSubject.ClearSubjectLvOptions(subjectLvElem);
                return;
            }
            var arrLv = [];
            $.each(subject_type, function (index, item) {
                if (item.Id == subjectTypeVal) {
                    if (item.MajorLevel != null) {
                        $.each(item.MajorLevel, function (index, item) {
                            arrLv.push('<option value="' + item.LevelValue + '">' + item.LevelText + '</option>');
                        });
                    } else {
                        $.each(subject_ptype, function (index, item) {
                            if (item.Id == subjectPTypeVal && item.MajorLevel != null && item.MajorLevel == "0") {
                                arrLv.push('<option value="0">一 一</option>');
                            }
                        });
                    }
                    $('#' + subjectLvElem).html(arrLv.join(''));
                }
            });
        });
    },
    ClearSubjectTypeOptions: function (subjectTypeElem) {
        $('#' + subjectTypeElem).html('<option value>资质专业</option>');
    },
    ClearSubjectLvOptions: function (subjectLvElem) {
        $('#' + subjectLvElem).html('<option value>资质等级</option>');
    }
}