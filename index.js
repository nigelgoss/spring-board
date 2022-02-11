document.body.style.backgroundColor = "red";
const $url = "https://injmed.wales.nhs.uk/?ID=38dcf4e35ed00c17c0f54cc9b7bb4033346";
const iab = cordova.InAppBrowser.open($url, "_blank", "location=no,closebuttoncaption=Exit,lefttoright=yes,hidespinner=yes,toolbarposition=top");

