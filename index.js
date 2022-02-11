document.body.style.backgroundColor = "orange";

let iab;
let lastInteraction;

const loadURL = ($url) => {
  lastInteraction = new Date();
  iab = cordova.InAppBrowser.open($url, "_blank", "cleardata=yes,location=no,closebuttoncaption=Exit,lefttoright=yes,hidespinner=yes,toolbarposition=top,navigationbuttoncolor=#FFFFFF,closebuttoncolor=#FFFFFF,toolbarcolor=#005EB8");
  iab.addEventListener("message", () => { document.body.appendChild(document.createTextNode("X")); lastInteraction = new Date(); });
  iab.executeScript({
    code: '\
      document.body.addEventListener("pointerdown", () => {
        webkit.messageHandlers.cordova_iab.postMessage("HW");/
      }, false);\
   '
};

setInterval(() => {
  if (new Date() - lastInteraction <= 30 * 1000) { return; }
  iab.close();
}, 5 * 1000);

let button = document.createElement("button");
document.body.appendChild(button);
button.textContent = "Medusa";
button.onpointerdown = () => { loadURL("https://injmed.wales.nhs.uk/?ID=38dcf4e35ed00c17c0f54cc9b7bb4033346"); };

button = document.createElement("button");
document.body.appendChild(button);
button.textContent = "RELOAD";
button.onpointerdown = () => { location.reload(true); };
