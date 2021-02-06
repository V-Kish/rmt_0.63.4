import React from 'react';
import {Button, Text, View} from 'react-native';
import { BaseScreen, CurrentScreen } from '../Core/BaseScreen';
import { SplashController } from '../Controllers/SplashController';
import {baseScreenProps, componentPropsWithModel} from "../Core/BaseComponent";
import {BaseScreenModel} from "../Core/BaseScreenModel";

class SplashScreen extends BaseScreen<SplashController> {
    constructor(props:componentPropsWithModel<baseScreenProps, BaseScreenModel>) {
        super(props,SplashController);
    }

    get screenName() {
        return 'SplashScreen';
    }

    content() {
        return (
            <View style={{flex:1}}>
                  <ThemedButton  {...this.props}/>
            </View>
        );
    }
}
class ThemedButton extends React.Component {
    // Assign a contextType to read the current theme context.
    // React will find the closest theme Provider above and use its value.
    // In this example, the current theme is "dark".
    static contextType = CurrentScreen;
    render() {
        return (
            <Button  title={this.context.screenName} onPress={() => this.props.navigation.navigate('HomeScreen')}/>
        )
    }
}
export {SplashScreen};
