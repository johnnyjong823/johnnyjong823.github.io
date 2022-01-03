$(function () {
    console.log("Test");
    $('#close').click(function () { location.href = "#js-cameragetimage" })


    $('#Mode1').click(function () { location.href = "#js-changeiconSpring" })
    $('#Mode2').click(function () { location.href = "#js-changeiconSummer" })
    $('#Mode3').click(function () { location.href = "#js-changeiconFall" })
    $('#Mode4').click(function () { location.href = "#js-changeiconWinter" })
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