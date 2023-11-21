import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.myapplication',
  appName: 'firebase-1',
  webDir: 'dist/firebase-1',
  server: {
    androidScheme: 'https'
  }
};

export default config;
