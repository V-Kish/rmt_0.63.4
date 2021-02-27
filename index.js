/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import { app } from './src/Core/AppImpl';

const getApp = () => <App id={'app'} model={app.model} appName={app.name} />;

AppRegistry.registerComponent(app.name, () => getApp);

