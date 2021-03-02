import { baseComponentProps, componentPropsWithModel, TypedBaseComponent } from '../../Core/BaseComponent';
import React from 'react';
import { Text, View } from 'react-native';

import { MainNavigationModel } from '../../Models/Navigation/MainNavigationModel';
import { STYLES } from '../../Styles/Styles';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../../Screens/HomeScreen';
import { app } from '../../Core/AppImpl';

import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';
import { DrawerContentView } from './DrawerContentView';
import { BaseController } from '../../Controllers/BaseController';




type mainNavigationViewProps = baseComponentProps & {

};


const Drawer = createDrawerNavigator();


class MainNavigationView extends TypedBaseComponent<mainNavigationViewProps, MainNavigationModel>{
    constructor(props: componentPropsWithModel<mainNavigationViewProps, MainNavigationModel>) {
        super(props);

    }

    
    

    render() {

        super.render();

        return(

            <NavigationContainer ref={ref => app.navigator.navigation = ref} >
               <Drawer.Navigator
                    screenOptions={{headerShown: false}}
                    drawerPosition="right"
                    drawerContent={ ()=> <Text>Some SCREEN</Text> }
                >
                    <Drawer.Screen name={HomeScreen.name}>
                        {props => <HomeScreen {...props} screenName={HomeScreen.name} model={app.setScreenModel(HomeScreen)} id={HomeScreen.name} key={HomeScreen.name}/>}
                    </Drawer.Screen>
                </Drawer.Navigator>
            </NavigationContainer>

        );

    }
}





export { MainNavigationView };