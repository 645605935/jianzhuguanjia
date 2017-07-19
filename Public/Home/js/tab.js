//选项卡类$*
function Tab() {
    this.cutTab = function (obj, arrTab, arrContainer, selStyle) {
        _tabClick(obj, arrTab, arrContainer, selStyle);
    }

    var _tabClick = function tabClick(obj, arrTab, arrContainer, selStyle) {
        $(obj).click(function () {
            var index = arrTab.index(this);

            $(arrTab.eq(index)).addClass(selStyle);
            $(arrTab.not(":eq(" + index + ")")).removeClass(selStyle);

            $(arrContainer.eq(index)).show();
            $(arrContainer.not(":eq(" + index + ")")).hide();
        });
    }
}

