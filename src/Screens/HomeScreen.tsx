import React from 'react';
import {Text, View} from 'react-native';
import { BaseScreen } from '../Core/BaseScreen';
import {baseScreenProps, componentPropsWithModel} from "../Core/BaseComponent";
import {BaseScreenModel} from "../Core/BaseScreenModel";
import { HomeController } from '../Controllers/HomeController';

class HomeScreen extends BaseScreen<HomeController> {
    constructor(props:componentPropsWithModel<baseScreenProps, BaseScreenModel>) {
        super(props,HomeController);
    }

    get screenName() {
        return 'HomeScreen';
    }

    content() {
        return (
            <View style={{flex:1}}>
                <Text>{this.props.extraData}</Text>
            </View>
        );
    }
}

export {HomeScreen};
