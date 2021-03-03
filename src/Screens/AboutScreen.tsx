import React from 'react';
import {Text,TouchableOpacity, View,} from 'react-native';
import { BaseScreen } from '../Core/BaseScreen';
import {baseScreenProps, componentPropsWithModel} from "../Core/BaseComponent";
import {BaseScreenModel} from "../Core/BaseScreenModel";
import { AboutController } from '../Controllers/AboutController';
import {app} from "../Core/AppImpl";
import { LayoutView } from './Layout';
import { WebView } from 'react-native-webview';
import { STYLES } from '../Styles/Styles';
import { BaseWebView } from '../Views/Components/BaseWebView';
 
class AboutScreen extends LayoutView<AboutController> {
    constructor(props:componentPropsWithModel<baseScreenProps, BaseScreenModel>) {
        super(props,AboutController);
    }

    public get screenName() {
        return AboutScreen.name;
    }

    public content() {
        return (
            <View style={ STYLES.homeScreen.container }>

               {/* <WebView 
                    source={{uri: "https://farvater.travel/about/"}}
                    style={{height: "100%"}}
               /> */}

                <BaseWebView {...this.childProps(this.controller.webview)} uri="https://farvater.travel/about/" />
            </View>
        );
    }
}

export {AboutScreen};