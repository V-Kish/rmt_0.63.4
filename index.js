/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { AppModel } from './src/Core/AppModel';
import 'react-native-gesture-handler';

const appModel = new AppModel({appName, id:'appld'})
function getApp(){
    return <App id={'app'} model={appModel} appName={appName}/>;
}

AppRegistry.registerComponent(appName, () => getApp);
