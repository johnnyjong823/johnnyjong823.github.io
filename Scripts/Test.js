$(function () {
    console.log("Test");
    $('#close').click(function () { location.href = "#js-cameragetimage" })


    $('#Mode1').click(function () { location.href = "#js-changeiconMode1" })
    $('#Mode2').click(function () { location.href = "#js-changeiconMode2" })
    $('#Mode3').click(function () { location.href = "#js-changeiconMode3" })
    $('#Init').click(function () { location.href = "#js-changeicon" })

})

var FlutterNFC = function (text) {
    console.log(text);
    $('h1').text(text);
}

var FlutterGetImage = function (base64) {
    alert(1);
    $('#myImg').attr('src', base64);
}