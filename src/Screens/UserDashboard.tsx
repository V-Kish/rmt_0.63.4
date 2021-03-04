import React from 'react';
import {Text,TouchableOpacity, View,} from 'react-native';
import { BaseScreen } from '../Core/BaseScreen';
import {baseScreenProps, componentPropsWithModel} from "../Core/BaseComponent";
import {BaseScreenModel} from "../Core/BaseScreenModel";
import { AboutController } from '../Controllers/AboutController';
import { LayoutView } from './Layout';
import { WebView } from 'react-native-webview';
import { STYLES } from '../Styles/Styles';
import { BaseWebView } from '../Views/Components/BaseWebView';
import { UserDashboardController } from '../Controllers/UserDashboardController';
 
class UserDashboardScreen extends LayoutView<UserDashboardController> {
    constructor(props:componentPropsWithModel<baseScreenProps, BaseScreenModel>) {
        super(props,UserDashboardController);
    }

    public get screenName() {
        return UserDashboardScreen.name;
    }

    public content() {
        return (
            <View style={ STYLES.homeScreen.container }>

               {/* <WebView 
                    source={{uri: "https://farvater.travel/about/"}}
                    style={{height: "100%"}}
               /> */}

                <BaseWebView {...this.childProps(this.controller.webview)} uri={`${this.controller.domainURI}account/u/welcome/`} />
            </View>
        );
    }
}

export {UserDashboardScreen};