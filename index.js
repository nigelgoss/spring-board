document.body.style = "height:100vh; width:100vw; margin:0; overflow:hidden; height:-webkit-fill-available; width:-webkit-fill-available;";

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

const style = document.createElement("style");
document.head.appendChild(style);
style.textContent = "button { font-family:inherit; font-size:inherit; padding:0.5em; color:#003087; background-color:#41B6E6; border:5px solid #005EB8; border-radius:1em; width:100%; }";

const main = document.createElement("main");
document.body.appendChild(main);
main.style = "font-family:Arial; background-color:#E8EDEE; font-size:1.5em; padding:1em; height:100%; box-sizing:border-box; display:grid; grid-gap:1em; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); grid-template-rows:repeat(auto-fit, 100px); overflow:auto;";

[

["Medusa", "https://injmed.wales.nhs.uk/?ID=38dcf4e35ed00c17c0f54cc9b7bb4033346"],
["NHS Mail", "https://portal.nhs.net/Home/Login"],
["Medusa", "https://injmed.wales.nhs.uk/?ID=38dcf4e35ed00c17c0f54cc9b7bb4033346"],
["Medusa", "https://injmed.wales.nhs.uk/?ID=38dcf4e35ed00c17c0f54cc9b7bb4033346"],
["NHS Mail", "https://portal.nhs.net/Home/Login"],
["Medusa", "https://injmed.wales.nhs.uk/?ID=38dcf4e35ed00c17c0f54cc9b7bb4033346"],
["Medusa", "https://injmed.wales.nhs.uk/?ID=38dcf4e35ed00c17c0f54cc9b7bb4033346"],
["NHS Mail", "https://portal.nhs.net/Home/Login"],
["Medusa", "https://injmed.wales.nhs.uk/?ID=38dcf4e35ed00c17c0f54cc9b7bb4033346"],
["Medusa", "https://injmed.wales.nhs.uk/?ID=38dcf4e35ed00c17c0f54cc9b7bb4033346"],
["NHS Mail", "https://portal.nhs.net/Home/Login"],
["Medusa", "https://injmed.wales.nhs.uk/?ID=38dcf4e35ed00c17c0f54cc9b7bb4033346"],
["Medusa", "https://injmed.wales.nhs.uk/?ID=38dcf4e35ed00c17c0f54cc9b7bb4033346"],
["NHS Mail", "https://portal.nhs.net/Home/Login"],
["Medusa", "https://injmed.wales.nhs.uk/?ID=38dcf4e35ed00c17c0f54cc9b7bb4033346"],

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
