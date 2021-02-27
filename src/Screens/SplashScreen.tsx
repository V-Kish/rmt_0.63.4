import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { BaseScreen } from '../Core/BaseScreen';
import { SplashController } from '../Controllers/SplashController';
import { baseScreenProps, componentPropsWithModel } from "../Core/BaseComponent";
import { BaseScreenModel } from "../Core/BaseScreenModel";
import { styledTheme, STYLES } from "../Styles/Styles";

class SplashScreen extends BaseScreen<SplashController> {
    constructor(props:componentPropsWithModel<baseScreenProps, BaseScreenModel>) {
        super(props,SplashController);
    }

    get screenName() {
        return 'SplashScreen';
    }
    public get styles (){
        return styledTheme(this, {drawer: STYLES.drawer, buttons: STYLES.buttons})
    }
    content() {
        return (
            <View style={this.styles.drawer}>
                <TouchableOpacity  style={this.styles.buttons.container}  onPress={() =>{
                    this.props.navigation.navigate('HomeScreen')
                }}>
                    <Text style={{color:'green'}}>HomeScreen</Text>
                </TouchableOpacity>

            </View>
        );
    }
}
export {SplashScreen};

