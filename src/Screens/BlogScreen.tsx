import React from 'react';
import {Text,TouchableOpacity, View,} from 'react-native';
import { BaseScreen } from '../Core/BaseScreen';
import {baseScreenProps, componentPropsWithModel} from "../Core/BaseComponent";
import {BaseScreenModel} from "../Core/BaseScreenModel";
import { LayoutView } from './Layout';
import { WebView } from 'react-native-webview';
import { STYLES } from '../Styles/Styles';
import { BlogController } from '../Controllers/BlogController';
import { BaseWebView } from '../Views/Components/BaseWebView';
 
class BlogScreen extends LayoutView<BlogController> {
    constructor(props:componentPropsWithModel<baseScreenProps, BaseScreenModel>) {
        super(props,BlogController);
    }

    public get screenName() {
        return BlogScreen.name;
    }

    public content() {
        return (
            <View style={ STYLES.homeScreen.container }>

               {/* <WebView 
                    source={{uri: "https://blog.farvater.travel/"}}
                    style={{height: "100%"}}
               /> */}
                <BaseWebView {...this.childProps(this.controller.webview)} uri="https://blog.farvater.travel/" />
            </View>
        );
    }
}

export {BlogScreen};