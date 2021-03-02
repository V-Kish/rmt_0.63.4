import { baseComponentProps, componentPropsWithModel, TypedBaseComponent } from '../../Core/BaseComponent';

import React from 'react';

import { View, Text, Image } from 'react-native';
import { HeaderModel } from '../../Models/Navigation/HeaderModel';
import { STYLES } from '../../Styles/Styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AuthModalModel } from '../../Models/Components/AuthModalModel';

type headerViewProps = baseComponentProps & {
    authModal: AuthModalModel;
};

class HeaderView extends TypedBaseComponent<headerViewProps, HeaderModel>{

    constructor(props: componentPropsWithModel<headerViewProps, HeaderModel>) {
        super(props);

    }

    render() {

        super.render();

        return(

            <View style={ STYLES.mainNav.container } >
                <View style={ STYLES.mainNav.logo }>
                    <Image style={ STYLES.mainNav.logoImage } source={require('../../Images/logo.png')} />
                </View>

                <TouchableOpacity style={ STYLES.mainNav.authButton } onPress={this.props.authModal.toggleModal}>
                    <Image style={ STYLES.mainNav.loginImage } source={require('../../Images/login-64.png')} />
                </TouchableOpacity>
            </View>

        );

    }


}





export { HeaderView };