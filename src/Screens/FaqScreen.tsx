import React from 'react';
import {Text,TouchableOpacity, View,} from 'react-native';
import { BaseScreen } from '../Core/BaseScreen';
import {baseScreenProps, componentPropsWithModel} from "../Core/BaseComponent";
import {BaseScreenModel} from "../Core/BaseScreenModel";
import { FaqController } from '../Controllers/FaqController';
import {app} from "../Core/AppImpl";
import { LayoutView } from './Layout';
import { WebView } from 'react-native-webview';
import { STYLES } from '../Styles/Styles';
import { BaseWebView } from '../Views/Components/BaseWebView';
 
class FaqScreen extends LayoutView<FaqController> {
    constructor(props:componentPropsWithModel<baseScreenProps, BaseScreenModel>) {
        super(props,FaqController);
    }

    public get screenName() {
        return FaqScreen.name;
    }

    public content() {
        return (
            <View style={ STYLES.homeScreen.container }>

               {/* <WebView 
                    source={{uri: "https://farvater.travel/faq/"}}
                    style={{height: "100%"}}
               /> */}

                <BaseWebView {...this.childProps(this.controller.webview)} uri="https://farvater.travel/faq/" />
            </View>
        );
    }
}

export {FaqScreen};
