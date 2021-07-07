import React from 'react';
import {Text,TouchableOpacity, View,} from 'react-native';
import { BaseScreen } from '../Core/BaseScreen';
import {baseScreenProps, componentPropsWithModel} from "../Core/BaseComponent";
import {BaseScreenModel} from "../Core/BaseScreenModel";
import { HomeController } from '../Controllers/HomeController';
import {app} from "../Core/AppImpl";
import { LayoutView } from './Layout';
import { WebView } from 'react-native-webview';
import { STYLES } from '../Styles/Styles';
 
class HomeScreen extends LayoutView<HomeController> {
    constructor(props:componentPropsWithModel<baseScreenProps, BaseScreenModel>) {
        super(props,HomeController);
    }

    public get screenName() {
        return HomeScreen.name;
    }

    public content() {
        return (
            <View style={ STYLES.homeScreen.container }>
               <WebView 
                    source={{uri: "https://rozetka.com.ua"}}
               />
            </View>
        );
    }
}

export {HomeScreen};
