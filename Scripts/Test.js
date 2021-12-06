$(function () {
    console.log("Test");
    $('#close').click(function () { location.href = "#js-nfc" })
})

var callJS = function (text) {
    console.log(text);
    $('h1').text(text);
}