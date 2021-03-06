const inactivityTimeout = 1.5 * 60 * 1000;

document.body.style = "height:100dvh; width:100dvw; margin:0; background-color:#E8EDEE";

let iab;
let monitoring;

setInterval(() => {
	if (new Date() - monitoring <= inactivityTimeout) { return; }
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
				if (inactiveFor <= 0.9 * ${inactivityTimeout}) { return; }
				document.body.style.opacity = "0.3";
				if (inactiveFor <= ${inactivityTimeout}) { return; }
				webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({msg:"forceClose"}));
			}, 5000);
			
		`});
	});
  
};

const style = document.createElement("style");
document.head.appendChild(style);
style.textContent = "button { font-family:inherit; font-size:inherit; padding:0.5em; color:#003087; background-color:#41B6E6; border:5px solid #005EB8; border-radius:1em; width:100%; }";

const main = document.createElement("main");
document.body.appendChild(main);
main.style = "font-family:Arial; font-size:1.5em; padding:1em; height:100%; box-sizing:border-box; display:grid; grid-gap:1em; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));";

[

["Intranet", "http://intranetthh.hilldomain.thh.nhs.uk/"],
["iReporter", "http://infoweb.hilldomain.thh.nhs.uk/iReporter/"],
["Medusa", "https://injmed.wales.nhs.uk/?ID=38dcf4e35ed00c17c0f54cc9b7bb4033346"],
["NHS Mail", "https://portal.nhs.net/Home/Login"],
["Birth Rate Plus", "https://acuity.birthrateplus.co.uk/login"],

].forEach(($v) => {

	const button = document.createElement("button");
	main.appendChild(button);
	button.textContent = $v[0];
	button.onclick = () => { loadURL($v[1]); };

});

const button = document.createElement("button");
main.appendChild(button);
button.textContent = "RELOAD";
button.onclick = () => { location.reload(true); };
