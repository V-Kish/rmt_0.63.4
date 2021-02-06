import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import { AppModel } from './src/Core/AppModel';
import {baseComponentProps, componentPropsWithModel, TypedBaseComponent} from "./src/Core/BaseComponent";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {SplashScreen} from "./src/Screens/SplashScreen";
import { HomeScreen } from './src/Screens/HomeScreen';
import { app } from './src/Core/AppImpl';

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
                    <Stack.Screen name="SplashScreen" component={SplashScreen} />
                    <Stack.Screen name="HomeScreen" component={HomeScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
  };
}
export default App;
