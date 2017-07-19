//arrUpload-------上传对象数组
//uploadUrl-------请求url
//title-----------标题
//exten-----------上传文件格式限制
//maxSize---------文件大小上限

//使用实例 
//type------------上传文件类型
//btnId-----------触发选择文件元素Id
//viewId----------预览图片元素Id
//async-----------是否选择文件后上传文件
//multiple--------是否可以多图上传
//var upload = new Upload("logo", "btnLogo", "logo", false);
//upload.StartUpload();

var arrUpload = [];
var number = 0;
var srcnNmber = 0;
function Upload(type, btnId, viewId, async) {
    var uploadUrl = "/upload/uploadimg?filetype=" + type;
    if ($("#imgUrl").val() != "") {
        uploadUrl = "/upload/uploadimg?filetype=" + type + "&&imgUrl=" + $("#imgUrl").val();
    }
    var title = "Image Files";
    var exten = "jpg,jpeg,gif,png";
    var maxSize = "2M";

    //实例化对象
    var uploader = new plupload.Uploader({
        browse_button: btnId,
        url: uploadUrl,
        flash_swf_url: '/Scripts/plupload/Moxie.swf',
        silverlight_xap_url: '/Scripts/plupload/Moxie.xap',
        filters: {
            mime_types: [
                { title: title, extensions: exten }
            ],
            max_file_size: maxSize
        }
    });
    arrUpload.push(uploader);

    //初始化
    uploader.init();

    uploader.bind('FilesAdded', function (uploader, files) {
        srcnNmber += 1;
        var fi = files.length;
        previewImage(files[0], function (imgsrc) {
            $("#" + viewId).attr("src", imgsrc);
            $("#" + viewId).parent().css("display", "block");
            $("#" + viewId).parent().parent().css("display", "block");


            $("#" + btnId).next().text(files[0].name);
            if (async) {
                arrUpload[0].start();
            }
        });
    });

    //触发上传图片
    this.StartUpload = function () {
        for (var i = 0; i < arrUpload.length; i++) {
            arrUpload[i].start();
        }
    }


    //当队列中某一个文件上传完成后触发
    uploader.bind('FileUploaded ', function (uploader, file, response) {
        number++;
        if (window.location.pathname == "/accountinfor/businesscheck") {
            if (number == srcnNmber) {
                window.location = "/accountinfor/businesscheck";
            }
        }
        if (window.location.pathname == "/company/addcaseinfo") {
            if (number == srcnNmber) {
                window.location = "/company/caseinfo";
            }
        }
        if (window.location.pathname == "/company/addteam") {
            if (number == srcnNmber) {
                window.location = "/company/team";
            }
        }
        if (window.location.pathname == "/user/companyattesta") {
            if (number == srcnNmber) {
                window.location = "/user/companyperfect";
            }
        }
        if (window.location.pathname == "/user/companyperfect") {
            if (number == srcnNmber) {
                window.location = "/user/waitresult";
            }
        }
    })
    //预览图
    function previewImage(file, callback) {
        if (!file || !/image\//.test(file.type)) return;
        if (file.type == 'image/gif') {
            var fr = new mOxie.FileReader();
            fr.onload = function () {
                callback(fr.result);
                fr.destroy();
                fr = null;
            }
            fr.readAsDataURL(file.getSource());
        } else {
            var preloader = new mOxie.Image();
            preloader.onload = function () {
                preloader.downsize(300, 300);
                var imgsrc = preloader.type == 'image/jpeg' ? preloader.getAsDataURL('image/jpeg', 80) : preloader.getAsDataURL('image/png', 80);
                callback && callback(imgsrc);
                preloader.destroy();
                preloader = null;
            };
            preloader.load(file.getSource());
        }
    }
}


var arrUpload1 = [];
var number1 = 0;
var srcnNmber1 = 0;
var imgnumber = 0;
function Upload1(type, btnId, viewId, async, multiple) {
    var uploadUrl = "/upload/uploadimg?filetype=" + type;
    if (type == "team") {
        uploadUrl = "/upload/uploadimg?filetype=" + type + "&phone=" + $("#Phone").val();
    }
    if (type == "caseinfo") {
        uploadUrl = "/upload/uploadimg?filetype=" + type + "&companyname=" + escape($("#OldCompanyName").val()) + "&subjecttype=" + $("#OldSubjectType").val();
    }
    var title = "Image Files";
    var exten = "jpg,jpeg,png";
    var maxSize = "2M";

    //实例化对象
    var uploader = new plupload.Uploader({
        browse_button: btnId,
        url: uploadUrl,
        flash_swf_url: '/Scripts/plupload/Moxie.swf',
        silverlight_xap_url: '/Scripts/plupload/Moxie.xap',
        filters: {
            mime_types: [
                { title: title, extensions: exten }
            ],
            max_file_size: maxSize
        },
        multi_selection: multiple
    });
    arrUpload1.push(uploader);

    //初始化
    uploader.init();

    uploader.bind('FilesAdded', function (uploader, files) {
        srcnNmber1 += files.length;
        var imgHtml = "";
        if (type == "image" && $("#Imageimg_div").children("img").length > 7) {
            popup.msgPopup("公司形象图最多上传8张，请重新选择上传");
            return;
        }
        for (var i = 0; i < files.length; i++) {
            previewImage(files[i], function (imgsrc, id) {
                if (type != "image") {
                    imgHtml = "<img src='" + imgsrc + "'>";
                    $("#" + viewId).html(imgHtml);
                } else {
                    imgHtml = "<img src='" + imgsrc + "' id='"+id+"' onmouseover='$(this).next().show();'>";
                    imgHtml += "<a href='javascript:void(0);' style='margin-left: -60px;float: left;margin-top: 152px;'><b onclick='removeImg(this);'>移除</b>|<b onclick='$(this).parent().hide();'>关闭</b></a>"
                    $("#" + viewId).append(imgHtml);
                }
                if (async) {
                    arrUpload1[0].start();
                }
            });
        }
        $("#" + viewId).css("display", "block");
    });

    //触发上传图片
    this.StartUpload = function () {
        uploader.start();
        //for (var i = 0; i < arrUpload1.length; i++) {
        //    arrUpload1[i].start();
        //}
    }

    this.Upload = uploader;

    //当队列中某一个文件上传完成后触发
    uploader.bind('FileUploaded ', function (uploader, file, response) {
        number1++;
        if (window.location.pathname == "/accountinfor/businesscheck") {
            if (number1 == srcnNmber1) {
                window.location = "/accountinfor/businesscheck";
            }
        }
        if (window.location.pathname == "/company/addcaseinfo") {
            if (number1 == srcnNmber1) {
                window.location = "/company/caseinfo";
            }
        }
        if (window.location.pathname == "/company/addteam") {
            if (number1 == srcnNmber1) {
                window.location = "/company/team";
            }
        }
        if (window.location.pathname == "/user/companyattesta") {
            if (number1 == srcnNmber1) {
                window.location = "/user/companyperfect";
            }
        }
        if (window.location.pathname == "/user/companyperfect") {
            if (number1 == srcnNmber1) {
                window.location = "/user/waitresult";
            }
        }
    });

    //预览图
    function previewImage(file, callback) {
        if (!file || !/image\//.test(file.type)) return;
        if (file.type == 'image/gif') {
            var fr = new mOxie.FileReader();
            fr.onload = function () {
                callback(fr.result);
                fr.destroy();
                fr = null;
            }
            fr.readAsDataURL(file.getSource());
        } else {
            var preloader = new mOxie.Image();
            preloader.onload = function () {
                preloader.downsize(300, 300);
                var imgsrc = preloader.type == 'image/jpeg' ? preloader.getAsDataURL('image/jpeg', 80) : preloader.getAsDataURL('image/png', 80);
                callback && callback(imgsrc,file.id);
                preloader.destroy();
                preloader = null;
            };
            preloader.load(file.getSource());
        }
    }
}
