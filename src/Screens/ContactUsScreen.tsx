import React from 'react';
import {Text,TouchableOpacity, View,} from 'react-native';
import { BaseScreen } from '../Core/BaseScreen';
import {baseScreenProps, componentPropsWithModel} from "../Core/BaseComponent";
import {BaseScreenModel} from "../Core/BaseScreenModel";
import { ContactUsController } from '../Controllers/ContactUsController';
import {app} from "../Core/AppImpl";
import { LayoutView } from './Layout';
import { WebView } from 'react-native-webview';
import { STYLES } from '../Styles/Styles';
import { BaseWebView } from '../Views/Components/BaseWebView';
 
class ContactUsScreen extends LayoutView<ContactUsController> {
    constructor(props:componentPropsWithModel<baseScreenProps, BaseScreenModel>) {
        super(props,ContactUsController);
    }

    public get screenName() {
        return ContactUsScreen.name;
    }

    public content() {
        return (
            <View style={ STYLES.homeScreen.container }>

               {/* <WebView 
                    source={{uri: "https://farvater.travel/contacts/"}}
                    style={{height: "100%"}}
               /> */}

                <BaseWebView {...this.childProps(this.controller.webview)} uri="https://farvater.travel/contacts/" />
            </View>
        );
    }
}

export {ContactUsScreen};