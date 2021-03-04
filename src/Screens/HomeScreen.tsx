import React from 'react';
import { View } from 'react-native';
import {baseScreenProps, componentPropsWithModel} from "../Core/BaseComponent";
import {BaseScreenModel} from "../Core/BaseScreenModel";
import { HomeController } from '../Controllers/HomeController';
import { LayoutView } from './Layout';
import { STYLES } from '../Styles/Styles';
import {BaseWebView} from '../Views/Components/BaseWebView';


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
               <BaseWebView {...this.childProps(this.controller.webview)} uri={`${this.controller.domainURI}`} />
            </View>
        );
    }
}

export {HomeScreen};
