import React from 'react';
import { Button, StatusBar, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { AppModel } from './src/Core/AppModel';
import { baseComponentProps, componentPropsWithModel, TypedBaseComponent } from "./src/Core/BaseComponent";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SplashScreen } from "./src/Screens/SplashScreen";
import { HomeScreen } from './src/Screens/HomeScreen';
import { app } from './src/Core/AppImpl';
import { MainNavigationView } from './src/Views/Navigation/MainNavigationView';
// import { TouchableOpacity } from 'react-native-gesture-handler';





declare const global: { HermesInternal: null | {} };

type appProps = baseComponentProps & { appName: string };

class App extends TypedBaseComponent<appProps, AppModel> {
    constructor(props: componentPropsWithModel<appProps, AppModel>) {
        super(props);
    }

    public render() {
        return (
            <>
                <MainNavigationView id={app.navigator.navigatorModel.id} model={app.navigator.navigatorModel}/>
            </>
        );
    };
}

const styles = StyleSheet.create({
    menu: {
        flexDirection: "row",
        marginLeft: 10,
        width: 200,
        zIndex: 10,
        justifyContent: "space-between"
    }
    
});
export default App;
