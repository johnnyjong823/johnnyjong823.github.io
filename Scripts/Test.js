$(function () {
    console.log("Test");
    $('#close').click(function () { location.href = "#js-cameragetimage" })
})

var FlutterNFC = function (text) {
    console.log(text);
    $('h1').text(text);
}

var FlutterGetImage = function (base64) {
    $('#myImg').attr('src', base64);
}