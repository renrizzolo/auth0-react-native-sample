import Auth0Sample from './index';

import { Navigation } from 'react-native-navigation';

function registerScreens(){
	Navigation.registerComponent('auth0.Auth0Sample', () => Auth0Sample);
}

registerScreens();

Navigation.startSingleScreenApp({
  screen: {
    screen: 'auth0.Auth0Sample', // unique ID registered with Navigation.registerScreen
    title: 'Auth0 Sample', // title of the screen as appears in the nav bar (optional)
    navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
  },
 });