import { baseComponentProps, componentPropsWithModel, TypedBaseComponent } from '../../Core/BaseComponent';

import React from 'react';

import { View, Text, Image } from 'react-native';
import { MainNavigationLayoutModel } from '../../Models/Navigation/MainNavigationLayoutModel';
import { STYLES } from '../../Styles/Styles';

type mainNavigationLayoutViewProps = baseComponentProps & {};

class MainNavigationLayoutView extends TypedBaseComponent<mainNavigationLayoutViewProps, MainNavigationLayoutModel>{

    constructor(props: componentPropsWithModel<mainNavigationLayoutViewProps, MainNavigationLayoutModel>) {
        super(props);

    }

    

    

    render() {

        super.render();

        return(

            <View style={ STYLES.mainNav.container } >
                <View style={ STYLES.mainNav.logo }>
                    <Image style={ STYLES.mainNav.logoImage } source={require('../../Images/logo.png')} />
                </View>

                <View style={ STYLES.mainNav.authButton }>
                    <Image style={ STYLES.mainNav.loginImage } source={require('../../Images/login-64.png')} />
                </View>
            </View>

        );

    }


}





export { MainNavigationLayoutView };