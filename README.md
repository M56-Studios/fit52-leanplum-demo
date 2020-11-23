# Leanplum Demo App

A small demo app to test out the Leanplum SDK in isolation.

User ID and attributes can be modified in `App.js` directly.

Before running the app, create a `config.js` file in the root project directory with this structure:

```
export default {
  leanplum: {
    appId: '',
    devApiKey: '',
    prodApiKey: '',
  },
};
```

## Running the app
### iOS
`yarn && cd ios && pod install && cd ..`
`react-native run-ios`
### Android
`yarn`
`react-native run-android`
