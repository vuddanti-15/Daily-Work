document.addEventListener('deviceready', OneSignalInit, false);

function OneSignalInit() {
    // Uncomment to set OneSignal device logging to VERBOSE
    // window.plugins.OneSignal.setLogLevel({logLevel: 6, visualLevel: 6});

    // NOTE: Update the init value below with your OneSignal AppId.
    window.plugins.OneSignal.startInit("ef13b8f2-5ba9-439c-8753-a52db530245a").handleNotificationOpened((jsonData) => {
        console.log("OneSignal notification opened:", jsonData);
    }).endInit();

    // Prompts the user for notification permissions.
    // Since this shows a generic native prompt, you can use In-App Messages to provide a better user experience.
    window.plugins.OneSignal.promptForPushNotificationsWithUserResponse((accepted) => {
        console.log("User accepted notifications: " + accepted);
    });
}
