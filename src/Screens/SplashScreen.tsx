import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { BaseScreen } from '../Core/BaseScreen';
import { SplashController } from '../Controllers/SplashController';
import { baseScreenProps, componentPropsWithModel } from "../Core/BaseComponent";
import { BaseScreenModel } from "../Core/BaseScreenModel";
import { STYLES } from "../Styles/Styles";

class SplashScreen extends BaseScreen<SplashController> {
    constructor(props:componentPropsWithModel<baseScreenProps, BaseScreenModel>) {
        super(props,SplashController);
    }

    get screenName() {
        return 'SplashScreen';
    }

    content() {
        return (
            <View>
            </View>
        );
    }
}
export {SplashScreen};

