import React from 'react';
import {Text,TouchableOpacity, View,} from 'react-native';
import { BaseScreen } from '../Core/BaseScreen';
import {baseScreenProps, componentPropsWithModel} from "../Core/BaseComponent";
import {BaseScreenModel} from "../Core/BaseScreenModel";
import { MasterCardController } from '../Controllers/MasterCardController';
import {app} from "../Core/AppImpl";
import { LayoutView } from './Layout';
import { WebView } from 'react-native-webview';
import { STYLES } from '../Styles/Styles';
import { BaseWebView } from '../Views/Components/BaseWebView';
 
class MasterCardScreen extends LayoutView<MasterCardController> {
    constructor(props:componentPropsWithModel<baseScreenProps, BaseScreenModel>) {
        super(props,MasterCardController);
    }

    public get screenName() {
        return MasterCardScreen.name;
    }

    public content() {
        return (
            <View style={ STYLES.homeScreen.container }>

               {/* <WebView 
                    source={{uri: "https://farvater.travel/mastercard-bilshe/"}}
                    style={{height: "100%"}}
               /> */}

                <BaseWebView {...this.childProps(this.controller.webview)} uri="https://farvater.travel/mastercard-bilshe/" />
            </View>
        );
    }
}

export {MasterCardScreen};
