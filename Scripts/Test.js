$(function () {
    console.log("Test");
    $('#close').click(function () { location.href = "#js-close" })
})

var callJS = function (text) {
    console.log(text);
    $('h1').text(text);
}