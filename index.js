/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import {AppModel} from './src/Core/AppModel';
const appModel = new AppModel({appName,id:'appId'})
function getApp(){
    return <App id={'app'} model={appModel} appName={appName}/>
}
AppRegistry.registerComponent(appName, () => getApp);
