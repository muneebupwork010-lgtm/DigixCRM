import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.digixcrm.mobile',
  appName: 'DigixCRM',
  webDir: 'public',
  server: {
    url: 'https://digixcrm.com',
    cleartext: true,
    androidScheme: 'https',
    errorPath: 'offline.html',
  },
  appendUserAgent: 'DigixCRM-Capacitor-Mobile/1.2.0',
  plugins: {
    SplashScreen: {
      launchShowDuration: 2500,
      launchAutoHide: true,
      launchFadeOutDuration: 800,
      backgroundColor: '#0d1b4b',
      showSpinner: false,
      androidSplashResourceName: 'splash',
      androidScaleType: 'CENTER_CROP',
      splashFullScreen: true,
      splashImmersive: true,
    },
  },
  android: {
    backgroundColor: '#0d1b4b',
  }
};

export default config;
