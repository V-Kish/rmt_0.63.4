import React from 'react';
import { View } from 'react-native';
import {baseScreenProps, componentPropsWithModel} from "../Core/BaseComponent";
import {BaseScreenModel} from "../Core/BaseScreenModel";
import { LayoutView } from './Layout';
import { FavouriteController } from '../Controllers/FavouriteController';
import { STYLES } from '../Styles/Styles';
import { BaseWebView } from '../Views/Components/BaseWebView';
 
class FavouriteScreen extends LayoutView<FavouriteController> {
    constructor(props:componentPropsWithModel<baseScreenProps, BaseScreenModel>) {
        super(props,FavouriteController);
    }

    public get screenName() {
        return FavouriteScreen.name;
    }

    public content() {
        return (
            <View style={ STYLES.homeScreen.container }>

               {/* <WebView 
                    source={{uri: "https://farvater.travel/about/"}}
                    style={{height: "100%"}}
               /> */}

                <BaseWebView {...this.childProps(this.controller.webview)} uri={`${this.controller.domainURI}/account/u/welcome/#my-favorites`} />
            </View>
        );
    }
}

export {FavouriteScreen};