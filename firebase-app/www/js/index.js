// Wait for the deviceready event before using any of Cordova's device APIs.
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');

    // Initialize Firebase
    const firebaseConfig = {
        // Your Firebase configuration
    };

    firebase.initializeApp(firebaseConfig);

    // Initialize FCM
    const fcm = cordova.plugins.FCM;
    fcm.onNotification(function (data) {
        if (data.wasTapped) {
            // Notification was received on device tray and tapped by the user.
            console.log(JSON.stringify(data));
            // Add code here to handle the notification when tapped
        } else {
            // Notification was received in foreground. Maybe the user needs to be notified.
            console.log(JSON.stringify(data));
            // Add code here to handle the notification in the foreground
        }
    });
}
