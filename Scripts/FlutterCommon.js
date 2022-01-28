var Flutter_FCMToken = "";               //FCMToken 令牌
var Flutter_BarcordText = "";            //Barcord掃瞄出的文字
var Flutter_UUID = "";                   //手機的唯一碼uuid
var Flutter_Platform = "";               //手機的平台(Android,iOS) <= 注意大小寫
var Flutter_Model = "";                  //手機的型號
var Flutter_AppVerision = "";            //APP的版本
var Flutter_Longitude = "";              //經度
var Flutter_Latitude = "";               //緯度
var Flutter_FB_Token = "";               //FB登入的Token
var Flutter_FB_Name = "";                //FB 名稱
var Flutter_FB_UserID = "";              //FB的UserID(唯一碼)
var Flutter_FB_ImageUrl = "";            //FB的大頭貼 Url
var Flutter_FB_Email = "";               //FB的信箱

var setFlutterParameter = function () {
    if (localStorage.lsFlutterParameter) {
        var Fobj = JSON.parse(localStorage.lsFlutterParameter);
        Flutter_FCMToken = (Fobj.Flutter_FCMToken) ? Fobj.Flutter_FCMToken : "";
        Flutter_BarcordText = (Fobj.Flutter_BarcordText) ? Fobj.Flutter_BarcordText : "";
        Flutter_UUID = (Fobj.Flutter_UUID) ? Fobj.Flutter_UUID : "";
        Flutter_Platform = (Fobj.Flutter_Platform) ? Fobj.Flutter_Platform : "";
        Flutter_Model = (Fobj.Flutter_Model) ? Fobj.Flutter_Model : "";
        Flutter_AppVerision = (Fobj.Flutter_AppVerision) ? Fobj.Flutter_AppVerision : "";
        Flutter_Longitude = (Fobj.Flutter_Longitude) ? Fobj.Flutter_Longitude : "";
        Flutter_Latitude = (Fobj.Flutter_Latitude) ? Fobj.Flutter_Latitude : "";
        Flutter_FB_Token = (Fobj.Flutter_FB_Token) ? Fobj.Flutter_FB_Token : "";
        Flutter_FB_Name = (Fobj.Flutter_FB_Name) ? Fobj.Flutter_FB_Name : "";
        Flutter_FB_UserID = (Fobj.Flutter_FB_UserID) ? Fobj.Flutter_FB_UserID : "";
        Flutter_FB_ImageUrl = (Fobj.Flutter_FB_ImageUrl) ? Fobj.Flutter_FB_ImageUrl : "";
        Flutter_FB_Email = (Fobj.Flutter_FB_Email) ? Fobj.Flutter_FB_Email : "";
    }
}

var FlutterFCMToken = function (Token) {
    location.href = "#";
    var Fobj = (localStorage.lsFlutterParameter) ? JSON.parse(localStorage.lsFlutterParameter) : new Object();
    Fobj.Flutter_FCMToken = Token;
    Flutter_FCMToken = Token;
    localStorage.lsFlutterParameter = JSON.stringify(Fobj);
}

var FlutterBarcode = function (text) {
    location.href = "#";
    var Fobj = (localStorage.lsFlutterParameter) ? JSON.parse(localStorage.lsFlutterParameter) : new Object();
    Fobj.Flutter_BarcordText = text;
    Flutter_BarcordText = text;
    localStorage.lsFlutterParameter = JSON.stringify(Fobj);
}

var FlutterBarcodeErrorMsg = function (text) {
    location.href = "#";
    if (text) NoticeDialog(text);
}
var FlutterErrorMsg = function (text) {
    location.href = "#";
    NoticeDialog(text);
}

var FlutterGetVer = function (uuid, platform, model) {
    document.location = "#";
    var Fobj = (localStorage.lsFlutterParameter) ? JSON.parse(localStorage.lsFlutterParameter) : new Object();
    Fobj.Flutter_UUID = uuid;
    Fobj.Flutter_Platform = platform;
    Fobj.Flutter_Model = model;

    Flutter_UUID = uuid;
    Flutter_Platform = platform;
    Flutter_Model = model;
    localStorage.lsFlutterParameter = JSON.stringify(Fobj);
}

var FlutterAppVersion = function (appversion) {
    location.href = "#";
    var Fobj = (localStorage.lsFlutterParameter) ? JSON.parse(localStorage.lsFlutterParameter) : new Object();
    Fobj.Flutter_AppVerision = appversion;

    Flutter_AppVerision = appversion;
    localStorage.lsFlutterParameter = JSON.stringify(Fobj);
}

var FlutterGetLocation = function (lon, lat) {
    location.href = "#";
    var Fobj = (localStorage.lsFlutterParameter) ? JSON.parse(localStorage.lsFlutterParameter) : new Object();
    Fobj.Flutter_Longitude = lon;
    Fobj.Flutter_Latitude = lat;

    Flutter_Longitude = lon;
    Flutter_Latitude = lat;
    localStorage.lsFlutterParameter = JSON.stringify(Fobj);
}

var FlutterFBLogin = function (token, name, userid, imageurl, email) {
    location.href = "#";
    var Fobj = (localStorage.lsFlutterParameter) ? JSON.parse(localStorage.lsFlutterParameter) : new Object();
    Fobj.Flutter_FB_Token = token;
    Fobj.Flutter_FB_Name = name;
    Fobj.Flutter_FB_UserID = userid;
    Fobj.Flutter_FB_ImageUrl = imageurl;
    Fobj.Flutter_FB_Email = email;

    Flutter_FB_Token = token;
    Flutter_FB_Name = name;
    Flutter_FB_UserID = userid;
    Flutter_FB_ImageUrl = imageurl;
    Flutter_FB_Email = email;
    localStorage.lsFlutterParameter = JSON.stringify(Fobj);
}

var FlutterFBLogout = function () {
    //FB登入
}

setFlutterParameter();
