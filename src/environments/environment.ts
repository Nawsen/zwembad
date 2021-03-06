// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// `.env.ts` is generated by the `npm run env` command
// `npm run env` exposes environment variables as JSON for any usage you might
// want, like displaying the version or getting extra config from your CI bot, etc.
// This is useful for granularity you might need beyond just the environment.
// Note that as usual, any environment variables you expose through it will end up in your
// bundle, and you should not use it for any sensitive information like passwords or keys.
import { env } from './.env';

export const environment = {
  production: false,
  hmr: true,
  version: env.npm_package_version + '-dev',
  serverUrl: '/api',
  defaultLanguage: 'en-US',
  supportedLanguages: ['en-US'],
  firebase: {
    apiKey: 'AIzaSyAL58UfrbFePyBkJkGV72N3CQJ03Gq_vUA',
    authDomain: 'website-zwembad.firebaseapp.com',
    databaseURL: 'https://website-zwembad-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'website-zwembad',
    storageBucket: 'website-zwembad.appspot.com',
    messagingSenderId: '383472950269',
    appId: '1:383472950269:web:448d0f81b1e8325c549794',
    measurementId: 'G-6SZPJ4ZSM9'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
