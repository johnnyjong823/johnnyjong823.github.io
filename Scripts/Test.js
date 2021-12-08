$(function () {
    console.log("Test");
    $('#close').click(function () { location.href = "#js-getimage" })
})

var FlutterNFC = function (text) {
    console.log(text);
    $('h1').text(text);
}

var FlutterGetImage = function (base64) {
    $('#myImg').attr('src', 'data:image/jpeg;base64,' + base64);
}