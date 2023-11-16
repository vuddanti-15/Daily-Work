import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.myapplication',
  appName: 'MyApplication',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
