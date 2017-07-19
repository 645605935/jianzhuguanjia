function Area() {

    var cutArea = function (AreaPpid, AreaPid, currentAreaPpid, currentAreaPid) {

        fillPparea();

        //if (currentAreaPid > 0) {
            fillParea(document.getElementById(AreaPpid));
        //}
        $("#" + AreaPpid).change(function () {
            fillParea(this);
        });

        function fillPparea() {
            var areaPphtml = "";
            var strsel = "";
            for (var i = 0; i < areaData.length; i++) {
                strsel = areaData[i].Id == currentAreaPpid ? "selected=selected" : "";
                if (areaData[i].Lv == 1) {
                    areaPphtml += "<option value='" + areaData[i].Id + "' " + strsel + ">" + areaData[i].Initial + " " + areaData[i].Name + "</option>";
                }
            }
            $("#" + AreaPpid).append(areaPphtml);
        }

        function fillParea(obj) {
            var areaPhtml = "<option value=''>市/地区</option>";
            if (AreaPpid == "ServeAreaPid") {
                areaPhtml = "<option value='0'>--不限--</option>";
            }
            var strsel = "";
            for (var i = 0; i < areaData.length; i++) {
                strsel = areaData[i].Id == currentAreaPid ? "selected=selected" : "";
                if (areaData[i].Lv == 2 && areaData[i].ParentId == obj.value) {
                    areaPhtml += "<option value='" + areaData[i].Id + "'  " + strsel + " >" + areaData[i].Initial + " " + areaData[i].Name + "</option>";
                }
            }
            $("#" + AreaPid).html(areaPhtml);
        }
    }


    this.CallArea = function (AreaPpid, AreaPid, currentAreaPpid, currentAreaPid) {
        cutArea(AreaPpid, AreaPid, currentAreaPpid, currentAreaPid);
    };
}
function QuickArea() {

    var cutArea = function (AreaPpid, AreaPid, currentAreaPpid, currentAreaPid) {

        fillPparea();

        if (currentAreaPid > 0) {
            fillParea(document.getElementById(AreaPpid));
        }
        $("#" + AreaPpid).change(function () {
            fillParea(this);
        });

        function fillPparea() {
            var areaPphtml = "";
            var strsel = "";
            for (var i = 0; i < areaData.length; i++) {
                strsel = areaData[i].Id == currentAreaPpid ? "selected=selected" : "";
                if (areaData[i].Lv == 1) {
                    areaPphtml += "<option value='" + areaData[i].Id + "' " + strsel + ">" + areaData[i].Name+ "</option>";
                }
            }
            $("#" + AreaPpid).append(areaPphtml);
        }

        function fillParea(obj) {
            var areaPhtml = "<option value=''>市/地区</option>";
            var strsel = "";
            for (var i = 0; i < areaData.length; i++) {
                strsel = areaData[i].Id == currentAreaPid ? "selected=selected" : "";
                if (areaData[i].Lv == 2 && areaData[i].ParentId == obj.value) {
                    areaPhtml += "<option value='" + areaData[i].Id + "'  " + strsel +  ">" + areaData[i].Name + "</option>";
                }
            }
            $("#" + AreaPid).html(areaPhtml);
        }
    }


    this.CallArea = function (AreaPpid, AreaPid, currentAreaPpid, currentAreaPid) {
        cutArea(AreaPpid, AreaPid, currentAreaPpid, currentAreaPid);
    };
}