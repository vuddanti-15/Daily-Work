{
  "appId": "com.example.app", // Replace with your Java package-like format
  "appName": "push-notification-app",
  "webDir": "www",
  "server": {
    "androidScheme": "https"
  },
  "plugins": {
    "PushNotifications": {
      "presentationOptions": ["badge", "sound", "alert"]
    }
  },
  "android": {
    "signingConfig": {
      "keystorePath": "D:/ionic-push-notification-android-main/my-release-key.keystore",
      "keystorePassword": "abhi123",
      "keyAlias": "abhi123",
      "keyPassword": "abhi123"
    },
    "fcm": {
      "token": "AAAAYmepGEA:APA91bH-UtEHMch-lsqXr1vvViUcYY76UFcly92WJmoLLshnguPsSU3xs0GRn1PDe1R_PN6gLxpg_qzkAK3GiskBUooL5SCzkzUVSSzMZyEMLIfsjQ9mkbQctUXNOJnQH6hehH3PjcT5"
    }
  }
}
