import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import {baseComponentProps, componentPropsWithModel, TypedBaseComponent} from "./src/Core/BaseComponent";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './src/Screens/HomeScreen';
import {AppModel} from "./src/Core/AppModel";
import {app} from "./src/Core/AppImpl";

import { MainNavigationView } from './src/Views/Navigation/MainNavigationView';
import { MainNavigationModel } from './src/Models/Navigation/MainNavigationModel';




declare const global: {HermesInternal: null | {}};
type appProps = baseComponentProps & {appName:string}
class App extends TypedBaseComponent<appProps, AppModel> {
  constructor(props:componentPropsWithModel<appProps, AppModel>) {
    super(props);
  }
 
  render() {
    return (
        <>
          <View style={{flex:1,backgroundColor:'blue'}}>
              <StatusBar barStyle="dark-content"/>
              <MainNavigationView  model={app.navigator.navigatorModel} id={app.navigator.navigatorModel.id} />           
          </View>
        </>
    );
  };
}
export default App;
