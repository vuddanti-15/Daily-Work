import { Component } from '@angular/core';
import { PushNotifications } from '@capacitor/push-notifications';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  constructor() {
    PushNotifications.requestPermission().then((result) => {
      if (result.granted) {
        PushNotifications.register();

        PushNotifications.addListener('pushNotificationReceived', (notification) => {
          // Handle incoming notifications
        });
      }
    });
  }
}
