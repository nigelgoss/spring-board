document.body.style = "margin:1em; display:grid; grid-gap:1em; grid-template-columns:repeat(4, minmax(0, 1fr)); grid-template-rows:repeat(6, minmax(0, 1fr));";

const style = document.createElement("style");
document.head.appendChild(style);
style.textContent = "button { padding:3em; }";

let iab;
let monitoring;

setInterval(() => {
  if (new Date() - monitoring <= 60 * 1000) { return; }
  iab.close();
}, 5000);

const loadURL = ($url) => {

  monitoring = new Date();
  
  iab = cordova.InAppBrowser.open($url, "_blank", "cleardata=yes,location=no,closebuttoncaption=Exit,lefttoright=yes,hidespinner=yes,toolbarposition=top,navigationbuttoncolor=#FFFFFF,closebuttoncolor=#FFFFFF,toolbarcolor=#005EB8");

  iab.addEventListener("message", ($d) => {
    if ($d.data.msg === "monitoring") {
      monitoring = new Date();
      return;
    }
    if ($d.data.msg === "forceClose") {
      iab.close();
    }
  });

  iab.addEventListener("loadstop", () => { 
    iab.executeScript({ code: `
      let cordovaLast = new Date();
      document.body.addEventListener("pointerdown", () => {
        cordovaLast = new Date();
        document.body.style.opacity = "1";
      });
      setInterval(() => {
        webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({msg:"monitoring"}));
        const inactiveFor = new Date() - cordovaLast;
        if (inactiveFor <= 2 * 60 * 1000) { return; }
        document.body.style.opacity = "0.3";
        if (inactiveFor <= 3 * 60 * 1000) { return; }
        webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({msg:"forceClose"}));
      }, 10 * 1000);
    `});
  });
  
};

let button = document.createElement("button");
document.body.appendChild(button);
button.textContent = "Medusa";
button.onpointerdown = () => { loadURL("https://injmed.wales.nhs.uk/?ID=38dcf4e35ed00c17c0f54cc9b7bb4033346"); };

button = document.createElement("button");
document.body.appendChild(button);
button.textContent = "NHS Mail";
button.onpointerdown = () => { loadURL("https://portal.nhs.net/Home/Login"); };

button = document.createElement("button");
document.body.appendChild(button);
button.textContent = "NHS Mail";
button.onpointerdown = () => { loadURL("https://portal.nhs.net/Home/Login"); };

button = document.createElement("button");
document.body.appendChild(button);
button.textContent = "NHS Mail";
button.onpointerdown = () => { loadURL("https://portal.nhs.net/Home/Login"); };
button = document.createElement("button");

document.body.appendChild(button);
button.textContent = "NHS Mail";
button.onpointerdown = () => { loadURL("https://portal.nhs.net/Home/Login"); };
button = document.createElement("button");

document.body.appendChild(button);
button.textContent = "NHS Mail";
button.onpointerdown = () => { loadURL("https://portal.nhs.net/Home/Login"); };
button = document.createElement("button");

button = document.createElement("button");
document.body.appendChild(button);
button.textContent = "NHS Mail";
button.onpointerdown = () => { loadURL("https://portal.nhs.net/Home/Login"); };

button = document.createElement("button");
document.body.appendChild(button);
button.textContent = "NHS Mail";
button.onpointerdown = () => { loadURL("https://portal.nhs.net/Home/Login"); };

button = document.createElement("button");
document.body.appendChild(button);
button.textContent = "NHS Mail";
button.onpointerdown = () => { loadURL("https://portal.nhs.net/Home/Login"); };

button = document.createElement("button");
document.body.appendChild(button);
button.textContent = "NHS Mail";
button.onpointerdown = () => { loadURL("https://portal.nhs.net/Home/Login"); };

button = document.createElement("button");
document.body.appendChild(button);
button.textContent = "NHS Mail";
button.onpointerdown = () => { loadURL("https://portal.nhs.net/Home/Login"); };

button = document.createElement("button");
document.body.appendChild(button);
button.textContent = "NHS Mail";
button.onpointerdown = () => { loadURL("https://portal.nhs.net/Home/Login"); };

button = document.createElement("button");
document.body.appendChild(button);
button.textContent = "NHS Mail";
button.onpointerdown = () => { loadURL("https://portal.nhs.net/Home/Login"); };

button = document.createElement("button");
document.body.appendChild(button);
button.textContent = "NHS Mail";
button.onpointerdown = () => { loadURL("https://portal.nhs.net/Home/Login"); };

button = document.createElement("button");
document.body.appendChild(button);
button.textContent = "NHS Mail";
button.onpointerdown = () => { loadURL("https://portal.nhs.net/Home/Login"); };

button = document.createElement("button");
document.body.appendChild(button);
button.textContent = "NHS Mail";
button.onpointerdown = () => { loadURL("https://portal.nhs.net/Home/Login"); };

button = document.createElement("button");
document.body.appendChild(button);
button.textContent = "NHS Mail";
button.onpointerdown = () => { loadURL("https://portal.nhs.net/Home/Login"); };

button = document.createElement("button");
document.body.appendChild(button);
button.textContent = "NHS Mail";
button.onpointerdown = () => { loadURL("https://portal.nhs.net/Home/Login"); };

button = document.createElement("button");
document.body.appendChild(button);
button.textContent = "NHS Mail";
button.onpointerdown = () => { loadURL("https://portal.nhs.net/Home/Login"); };

button = document.createElement("button");
document.body.appendChild(button);
button.textContent = "NHS Mail";
button.onpointerdown = () => { loadURL("https://portal.nhs.net/Home/Login"); };

button = document.createElement("button");
document.body.appendChild(button);
button.textContent = "NHS Mail";
button.onpointerdown = () => { loadURL("https://portal.nhs.net/Home/Login"); };

button = document.createElement("button");
document.body.appendChild(button);
button.textContent = "NHS Mail";
button.onpointerdown = () => { loadURL("https://portal.nhs.net/Home/Login"); };

button = document.createElement("button");
document.body.appendChild(button);
button.textContent = "NHS Mail";
button.onpointerdown = () => { loadURL("https://portal.nhs.net/Home/Login"); };

button = document.createElement("button");
document.body.appendChild(button);
button.textContent = "NHS Mail";
button.onpointerdown = () => { loadURL("https://portal.nhs.net/Home/Login"); };

document.body.appendChild(button);
button.textContent = "RELOAD";
button.onpointerdown = () => { location.reload(true); };
