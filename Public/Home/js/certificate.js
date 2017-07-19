function cutPart(obj, id) {
    if ($(obj).next() != null) {
        $(obj).nextAll("ul[class=xiala]").css("display", "none");
        $(obj).next().css("display", "block");
    }

    if ($(obj).prev() != null) {
        $(obj).prevAll("ul[class=xiala]").css("display", "none");
    }
}