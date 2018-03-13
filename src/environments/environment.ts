// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyC41BdWsce0wRaFV4HRMjUcutbaXtmZf8A',
    authDomain: 'raspberry-led.firebaseapp.com',
    databaseURL: 'https://raspberry-led.firebaseio.com',
    projectId: 'raspberry-led',
    storageBucket: 'raspberry-led.appspot.com',
    messagingSenderId: '615394571261'
  }
};
