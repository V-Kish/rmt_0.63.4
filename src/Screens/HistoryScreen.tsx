import React from 'react';
import { View,} from 'react-native';
import {baseScreenProps, componentPropsWithModel} from "../Core/BaseComponent";
import {BaseScreenModel} from "../Core/BaseScreenModel";
import { LayoutView } from './Layout';
import { STYLES } from '../Styles/Styles';
import { BaseWebView } from '../Views/Components/BaseWebView';
import { HistoryController } from '../Controllers/HistoryController';
 
class HistoryScreen extends LayoutView<HistoryController> {
    constructor(props:componentPropsWithModel<baseScreenProps, BaseScreenModel>) {
        super(props,HistoryController);
    }

    public get screenName() {
        return HistoryScreen.name;
    }

    public content() {
        return (
            <View style={ STYLES.homeScreen.container }>
                <BaseWebView {...this.childProps(this.controller.webview)} uri={`${this.controller.domainURI}about/`} />
            </View>
        );
    }
}

export {HistoryScreen};