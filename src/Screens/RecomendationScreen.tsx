import React from 'react';
import { View,} from 'react-native';
import {baseScreenProps, componentPropsWithModel} from "../Core/BaseComponent";
import {BaseScreenModel} from "../Core/BaseScreenModel";
import { LayoutView } from './Layout';
import { STYLES } from '../Styles/Styles';
import { BaseWebView } from '../Views/Components/BaseWebView';
import { RecomendationController } from '../Controllers/RecomendationController';
 
class RecomendationScreen extends LayoutView<RecomendationController> {
    constructor(props:componentPropsWithModel<baseScreenProps, BaseScreenModel>) {
        super(props,RecomendationController);
    }

    public get screenName() {
        return RecomendationScreen.name;
    }

    public content() {
        return (
            <View style={ STYLES.homeScreen.container }>

               {/* <WebView 
                    source={{uri: "https://farvater.travel/about/"}}
                    style={{height: "100%"}}
               /> */}

                <BaseWebView {...this.childProps(this.controller.webview)} uri={`${this.controller.domainURI}vse-tury_dlya-2-vzroslyh/`} />
            </View>
        );
    }
}

export {RecomendationScreen};