import { baseComponentProps, componentPropsWithModel, TypedBaseComponent } from '../../Core/BaseComponent';

import React from 'react';

import { Image, Modal, Text, View } from 'react-native';
import { AuthModalModel } from '../../Models/Components/AuthModalModel';
import { TouchableOpacity } from 'react-native';
import { STYLES } from '../../Styles/Styles';
import WebView from 'react-native-webview';

import HTML from './firebaseAuth';
import { BaseWebView } from './BaseWebView';


type authModalViewProps = baseComponentProps & {
    //GET USER MODEL
    //AFTER SUCCESS CALLBACK set userData in MODEL and forcdeUpdate HeaderView
};

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



                    <View style={{ backgroundColor: "red", height: "100%", width: "100%" }}>
                        {/* <WebView 

                            userAgent="Mozilla/5.0 (Linux; Android 11) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.72 Mobile Safari/537.36"
                            // source={{uri: "https://uat2.farvater.travel/rnauth-v1.html"}}
                            source={{uri: "http://192.168.1.35:3000"}}
                            style={{height: "100%"}}
                        /> */}

                        <BaseWebView {...this.childProps(this.model.webViewModel)} uri="http://192.168.1.35:3000" />
                    </View>


                </Modal>
            </>

        );

    }

}





export { AuthModalView };