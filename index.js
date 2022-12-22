/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import HomeCC from './src/Home/HomeCC';
import HomeFC from './src/HomeFunctional/HomeFC';
import screen from './src/screen/screenName';

AppRegistry.registerComponent(appName, () => screen);
