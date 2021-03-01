import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import {baseComponentProps, componentPropsWithModel, TypedBaseComponent} from "./src/Core/BaseComponent";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {SplashScreen} from "./src/Screens/SplashScreen";
import { HomeScreen } from './src/Screens/HomeScreen';
import {AppModel} from "./src/Core/AppModel";
import {app} from "./src/Core/AppImpl";

const Stack = createStackNavigator();
declare const global: {HermesInternal: null | {}};
type appProps = baseComponentProps & {appName:string}
class App extends TypedBaseComponent<appProps, AppModel> {
  constructor(props:componentPropsWithModel<appProps, AppModel>) {
    super(props);
  }
 
  render() {
    return (
        <View style={{flex:1,backgroundColor:'blue'}}>
          <StatusBar barStyle="dark-content"/>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name={SplashScreen.name} >
                        {props => <SplashScreen {...props} screenName={SplashScreen.name} model={app.setScreenModel(SplashScreen)} id={SplashScreen.name} key={SplashScreen.name}/>}
                    </Stack.Screen>
                    <Stack.Screen name={HomeScreen.name}>
                        {props => <HomeScreen {...props} screenName={HomeScreen.name} model={app.setScreenModel(HomeScreen)} id={HomeScreen.name} key={HomeScreen.name}/>}
                    </Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
  };
}
export default App;
