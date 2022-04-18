$(function () {
    console.log("Test");

    $('#txtUserAgent').val(navigator.userAgent);
    $('#btnClose').click(function () { location.href = "#js-close" })
    $('#btnURL').click(function () {
        var url = $('#txtUrl').val();
        location.href = `#js-url${url}`;
    })
    $('#btnDevice').click(function () {
        location.href = "#js-ver";

        var str = `UUID:${Flutter_UUID} \n
                   平台:${Flutter_Platform} \n
                   裝置型號:${Flutter_Model} \n`

        $('#txtDevice').val(str);
    })

    $('#btnSreen').click(function () {
        var screen = $('#txtScreen').val();
        location.href = `#js-screen${screen}`;
    })
    $('#btnScan').click(function () { location.href = "#js-barcode" })
    $('#btnScan2').click(function () { location.href = "#js-barcode" })






    $('#Mode1').click(function () { location.href = "#js-changeiconMode1" })
    $('#Mode2').click(function () { location.href = "#js-changeiconMode2" })
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