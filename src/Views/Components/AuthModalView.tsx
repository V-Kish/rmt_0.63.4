import { baseComponentProps, componentPropsWithModel, TypedBaseComponent } from '../../Core/BaseComponent';

import React from 'react';

import { Image, Modal, Text, View } from 'react-native';
import { AuthModalModel } from '../../Models/Components/AuthModalModel';
import { TouchableOpacity } from 'react-native';
import { STYLES } from '../../Styles/Styles';

type authModalViewProps = baseComponentProps & {};

class AuthModalView extends TypedBaseComponent<authModalViewProps, AuthModalModel>{

    constructor(props: componentPropsWithModel<authModalViewProps, AuthModalModel>) {
        super(props);

    }

    

    

    render() {

        super.render();

        return(

            <>
                <Modal
                    animationType="fade"
                    visible={this.model.state}
                    style={STYLES.authModal.container }
                    
                >
                    <View style={ STYLES.authModal.closeWrapper }>
                        <TouchableOpacity onPress={this.model.toggleModal} style={ STYLES.authModal.closeButton }>
                            <Text>X</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={ STYLES.authModal.phoneInput }>

                    </View>
                    
                    <Text style={ STYLES.authModal.or }>or</Text>

                    <View style={ STYLES.authModal.buttons }>
                        <TouchableOpacity style={ STYLES.authModal.button }>
                            <Text style={ STYLES.authModal.buttonText }>Sign in via Google</Text>
                            <Image style={ STYLES.authModal.buttonImage } source={require('../../Images/google.png')}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={ STYLES.authModal.button }>
                            <Text style={ STYLES.authModal.buttonText }>Sign in via Facebook</Text>
                            <Image style={ STYLES.authModal.buttonImage } source={require('../../Images/facebook.png')}/>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </>

        );

    }

}





export { AuthModalView };