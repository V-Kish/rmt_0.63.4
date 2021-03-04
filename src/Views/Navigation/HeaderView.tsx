import { baseComponentProps, componentPropsWithModel, TypedBaseComponent } from '../../Core/BaseComponent';

import React from 'react';

import { View, Text, Image } from 'react-native';
import { HeaderModel } from '../../Models/Navigation/HeaderModel';
import { STYLES } from '../../Styles/Styles';
import { TouchableOpacity } from 'react-native';
import { AuthModalModel } from '../../Models/Components/AuthModalModel';
import { UserModel } from '../../Models/User/UserModel';
import { app } from '../../Core/AppImpl';

type headerViewProps = baseComponentProps & {
    authModal: AuthModalModel;
    userModel: UserModel;
};

class HeaderView extends TypedBaseComponent<headerViewProps, HeaderModel>{

    constructor(props: componentPropsWithModel<headerViewProps, HeaderModel>) {
        super(props);

    }

    render() {

        super.render();

        let headerPanel;
        if(this.props.userModel.isLoggedIn){
            headerPanel = <Text>LOGED IN!</Text>;
        } else{
            headerPanel = 
            <TouchableOpacity style={ STYLES.mainNav.authButton } onPress={this.props.authModal.toggleModal}>
                <Image style={ STYLES.mainNav.loginImage } source={require('../../Images/login-64.png')} />
            </TouchableOpacity>;
        }


        return(

            <View style={ STYLES.mainNav.container } >
                <TouchableOpacity style={ STYLES.mainNav.buttonWrapper } onPress={()=>{
                    app.navigator.toggleDrawer();
                }}>
                    <Image style={ STYLES.mainNav.menuButton } source={require('../../Images/menu.png')} />
                </TouchableOpacity>

                <View style={ STYLES.mainNav.logo }>
                    <Image style={ STYLES.mainNav.logoImage } source={require('../../Images/logo.png')} />
                </View>

                <View>
                    {headerPanel}
                </View>
            </View>

        );

    }


}





export { HeaderView };