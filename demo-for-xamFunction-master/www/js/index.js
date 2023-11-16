document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
	
    url = "https://xamplify.io/login";
	//url = "http://127.0.0.1:8000/api/create/"
	
	showUrl(url);
}

function showUrl(url) {
	window.location = url;
	showUrl('https://xamplify.io/login');
	return;
}	


// function showUrl(url) {
// 	cordova.InAppBrowser.open(url);
// 	return;
// }