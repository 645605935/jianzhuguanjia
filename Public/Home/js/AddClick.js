
function Add(pageType,inputType) {
    $.get("/pageclick/addclick", { pageType: pageType, inputType: inputType }, function () {
    });
}