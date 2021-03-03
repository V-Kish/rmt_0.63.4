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
import { MasterCardScreen } from '../../Screens/MasterCardScreen';
import { FaqScreen } from '../../Screens/FaqScreen';
import { AboutScreen } from '../../Screens/AboutScreen';
import { BlogScreen } from '../../Screens/BlogScreen';
import { ContactUsScreen } from '../../Screens/ContactUsScreen';
import { HelpScreen } from '../../Screens/HelpScreen';




type mainNavigationViewProps = baseComponentProps & {

};





class MainNavigationView extends TypedBaseComponent<mainNavigationViewProps, MainNavigationModel>{
    constructor(props: componentPropsWithModel<mainNavigationViewProps, MainNavigationModel>) {
        super(props);

    }

    
    

    render() {

        super.render();

        return(

            <NavigationContainer ref={ref => app.navigator.navigation = ref} >
               <app.drawer.Navigator
                    drawerType={"slide"}
                    drawerPosition={"left"}
                    drawerContent={ ()=> <DrawerContentView model={app.drawerContent} id={app.drawerContent.id} navigate={app.navigator} /> }
                    screenOptions={
                        {
                            headerShown: false,
                        }
                    }
                >
                    <app.drawer.Screen name={HomeScreen.name}>
                        {props => <HomeScreen {...props} screenName={HomeScreen.name} model={app.setScreenModel(HomeScreen)} id={HomeScreen.name} key={HomeScreen.name}/>}
                    </app.drawer.Screen>
                    <app.drawer.Screen name={MasterCardScreen.name}>
                        {props => <MasterCardScreen {...props} screenName={MasterCardScreen.name} model={app.setScreenModel(MasterCardScreen)} id={MasterCardScreen.name} key={MasterCardScreen.name}/>}
                    </app.drawer.Screen>
                    <app.drawer.Screen name={FaqScreen.name}>
                        {props => <FaqScreen {...props} screenName={FaqScreen.name} model={app.setScreenModel(MasterCardScreen)} id={FaqScreen.name} key={FaqScreen.name}/>}
                    </app.drawer.Screen>
                    <app.drawer.Screen name={AboutScreen.name}>
                        {props => <AboutScreen {...props} screenName={AboutScreen.name} model={app.setScreenModel(AboutScreen)} id={AboutScreen.name} key={AboutScreen.name}/>}
                    </app.drawer.Screen>
                    <app.drawer.Screen name={BlogScreen.name}>
                        {props => <BlogScreen {...props} screenName={BlogScreen.name} model={app.setScreenModel(BlogScreen)} id={BlogScreen.name} key={BlogScreen.name}/>}
                    </app.drawer.Screen>
                    <app.drawer.Screen name={ContactUsScreen.name}>
                        {props => <ContactUsScreen {...props} screenName={ContactUsScreen.name} model={app.setScreenModel(ContactUsScreen)} id={ContactUsScreen.name} key={ContactUsScreen.name}/>}
                    </app.drawer.Screen>
                    <app.drawer.Screen name={HelpScreen.name}>
                        {props => <HelpScreen {...props} screenName={HelpScreen.name} model={app.setScreenModel(HelpScreen)} id={HelpScreen.name} key={HelpScreen.name}/>}
                    </app.drawer.Screen>
                    
                </app.drawer.Navigator>
                
            </NavigationContainer>

        );

    }
}





export { MainNavigationView };