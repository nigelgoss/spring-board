document.body.style.backgroundColor = "pink";

let iab;

const loadURL = ($url) => {
  iab = cordova.InAppBrowser.open($url, "_blank", "cleardata=yes,location=no,closebuttoncaption=Exit,lefttoright=yes,hidespinner=yes,toolbarposition=top,navigationbuttoncolor=#FFFFFF,closebuttoncolor=#FFFFFF,toolbarcolor=#005EB8");  
  setTimeout(() => { iab.close(); }, 15 * 1000);
};

let button = document.createElement("button");
button.textContent = "Medusa";
button.onpointerdown = () => { $url("https://injmed.wales.nhs.uk/?ID=38dcf4e35ed00c17c0f54cc9b7bb4033346"); };
