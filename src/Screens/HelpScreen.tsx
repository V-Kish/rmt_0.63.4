import React from 'react';
import {Text,TouchableOpacity, View,} from 'react-native';
import { BaseScreen } from '../Core/BaseScreen';
import {baseScreenProps, componentPropsWithModel} from "../Core/BaseComponent";
import {BaseScreenModel} from "../Core/BaseScreenModel";
import { HelpController } from '../Controllers/HelpController';
import { LayoutView } from './Layout';
import { WebView } from 'react-native-webview';
import { STYLES } from '../Styles/Styles';
import { BaseWebView } from '../Views/Components/BaseWebView';
 
class HelpScreen extends LayoutView<HelpController> {
    constructor(props:componentPropsWithModel<baseScreenProps, BaseScreenModel>) {
        super(props,HelpController);
    }

    public get screenName() {
        return HelpScreen.name;
    }

    public content() {
        return (
            <View style={ STYLES.homeScreen.container }>

               {/* <WebView 
                    source={{uri: "https://farvater.travel/help/"}}
                    style={{height: "100%"}}
               /> */}
                
               <BaseWebView {...this.childProps(this.controller.webview)} uri={`${this.controller.domainURI}help/`}/>
            </View>
        );
    }
}

export {HelpScreen};