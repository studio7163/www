function urlFn()
{
    var url = document.getElementById("url").value;

    var urlId = url.replace('https://youtu.be/','');
    console.log("urlId:", urlId);
    
    var imgYou = "https://img.youtube.com/vi/";
    
    var th0 = document.getElementById("ith0");
    th0.src = imgYou + urlId + "/0.jpg";
    console.log("th0", th0.src);
    var th1 = document.getElementById("ith1");
    th1.src = imgYou + urlId + "/1.jpg";
    console.log("th1", th1.src);
    var th2 = document.getElementById("ith2");
    th2.src = imgYou + urlId + "/2.jpg";
    console.log("th2", th2.src);
    var th3 = document.getElementById("ith3");
    th3.src = imgYou + urlId + "/3.jpg";
    console.log("th3", th3.src);
    
    var De = document.getElementById("iDefault");
    De.src = imgYou + urlId + "/default.jpg";
    console.log("iDefault:", iDefault.src);
    var MQ = document.getElementById("iMQ");
    MQ.src = imgYou + urlId + "/mqdefault.jpg";
    console.log("iMQ:", iMQ.src);
    var HQ = document.getElementById("iHQ");
    HQ.src = imgYou + urlId + "/hqdefault.jpg";
    console.log("iHQ", iHQ.src);
    var SD = document.getElementById("iSD");
    SD.src = imgYou + urlId + "/sddefault.jpg";
    console.log("i", iSD.src);
    var MAX = document.getElementById("iMAX");
    MAX.src = imgYou + urlId + "/maxresdefault.jpg";
    console.log("iMAX", iMAX.src);
}
