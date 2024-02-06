var Flutter_FCMToken = "";               //FCMToken 令牌
var Flutter_BarcordText = "";            //Barcord掃瞄出的文字
var Flutter_UUID = "";                   //手機的唯一碼uuid
var Flutter_Platform = "";               //手機的平台(Android,iOS) <= 注意大小寫
var Flutter_Model = "";                  //手機的型號
var Flutter_isPhysicalDevice = "";       //是否為實體機
var Flutter_PhoneVersion = "";           //手機的版本

var Flutter_AppName = "";                //APP的名稱
var Flutter_PackageName = "";            //APP的包名
var Flutter_AppVerision = "";            //APP的版本
var Flutter_BuildNumber = "";            //APP的BuildNumber

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
        Flutter_PhoneVersion = (Fobj.Flutter_PhoneVersion) ? Fobj.Flutter_PhoneVersion : "";
        Flutter_isPhysicalDevice = (Fobj.Flutter_isPhysicalDevice) ? Fobj.Flutter_isPhysicalDevice : "";

        Flutter_AppName = (Fobj.Flutter_AppName) ? Fobj.Flutter_AppName : "";
        Flutter_PackageName = (Fobj.Flutter_PackageName) ? Fobj.Flutter_PackageName : "";
        Flutter_AppVerision = (Fobj.Flutter_AppVerision) ? Fobj.Flutter_AppVerision : "";
        Flutter_BuildNumber = (Fobj.Flutter_BuildNumber) ? Fobj.Flutter_BuildNumber : "";

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

var FlutterGetVer = function (platform,model,uuid, isPhysicalDevice,version) {
    document.location = "#";
    var Fobj = (localStorage.lsFlutterParameter) ? JSON.parse(localStorage.lsFlutterParameter) : new Object();
    Fobj.Flutter_UUID = uuid;
    Fobj.Flutter_Platform = platform;
    Fobj.Flutter_Model = model;
    Fobj.Flutter_isPhysicalDevice = isPhysicalDevice;
    Fobj.Flutter_PhoneVersion = version;

    Flutter_UUID = uuid;
    Flutter_Platform = platform;
    Flutter_Model = model;
    Flutter_isPhysicalDevice = isPhysicalDevice;
    Flutter_PhoneVersion = version;
    localStorage.lsFlutterParameter = JSON.stringify(Fobj);
}

var FlutterAppVersion = function (appName,packageName,appversion,buildNumber) {
    location.href = "#";
    var Fobj = (localStorage.lsFlutterParameter) ? JSON.parse(localStorage.lsFlutterParameter) : new Object();
    
    Fobj.Flutter_AppName = appName;
    Fobj.Flutter_PackageName = packageName;
    Fobj.Flutter_AppVerision = appversion;
    Fobj.Flutter_BuildNumber = buildNumber;

    Flutter_AppName = appName;
    Flutter_PackageName = packageName;
     Flutter_AppVerision = appversion;
    Flutter_BuildNumber = buildNumber;
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

var FlutterFCMMessagingClick = function (data) {
    var dataJson = JSON.parse(data);

    if (dataJson.action_page) {
        location.href = dataJson.action_page;

        var action_page = dataJson.action_page;
        if (dataJson.action_page.indexOf('#') != -1) {
            action_page = dataJson.action_page.split('#')[0];
            if (location.href.indexOf(action_page) != -1) {
                location.reload();
            }
        }
    }
}

/**
 * 透過Scheme開啟，會將參數帶入，可以在這邊得到參數後續的事件
 * @param {any} schemeUrl
 */
var FlutterSchemeUrl = function (schemeUrl) {
    var urls = schemeUrl.split(':/');
    if (urls.length > 1) {
        console.log("SchemeUrl:", urls[1]);
        location.href = urls[1];
    }
}

setFlutterParameter();
