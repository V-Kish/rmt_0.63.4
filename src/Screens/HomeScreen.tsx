import React from 'react';
import {Text,TouchableOpacity, View,} from 'react-native';
import { BaseScreen } from '../Core/BaseScreen';
import {baseScreenProps, componentPropsWithModel} from "../Core/BaseComponent";
import {BaseScreenModel} from "../Core/BaseScreenModel";
import { HomeController } from '../Controllers/HomeController';
import {resetTheme, styledTheme, STYLES} from "../Styles/Styles";
import {app} from "../Core/AppImpl";
class HomeScreen extends BaseScreen<HomeController> {
    constructor(props:componentPropsWithModel<baseScreenProps, BaseScreenModel>) {
        super(props,HomeController);
    }

    get screenName() {
        return 'HomeScreen';
    }
    public get styles (){
        return styledTheme(this, {drawer: STYLES.drawer, buttons: STYLES.buttons})
    }

    content() {
        return (
            <View style={this.styles.drawer.container}>
                <TouchableOpacity  style={this.styles.buttons.container} onPress={() =>{
                    app.currentUser.userTheme = 'dark';
                    resetTheme();
                }}>
                    <Text style={{color:'green'}}>Change them</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

export {HomeScreen};
