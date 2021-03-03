import { baseComponentProps, componentPropsWithModel, TypedBaseComponent } from '../../Core/BaseComponent';

import React from 'react';

import { View } from 'react-native';
import WebView from 'react-native-webview';
import { WebViewModel } from '../../Models/Components/WebViewModel';



type baseWebViewProps = baseComponentProps & {
    uri: string;
};

class BaseWebView extends TypedBaseComponent<baseWebViewProps, WebViewModel>{

    constructor(props: componentPropsWithModel<baseWebViewProps, WebViewModel>) {
        super(props);
        
    }

    

    

    render() {

        super.render();

        return(

            <>
                <View style={{ backgroundColor: "red", height: "100%", width: "100%" }}>
                    <WebView 
                        onMessage = {(event)=>{
                            this.model.onMessage(event.nativeEvent.data);
                        }}
                        userAgent="Mozilla/5.0 (Linux; Android 11) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.72 Mobile Safari/537.36"
                        source={{uri: this.props.uri}}
                        style={{height: "100%"}}
                    />
                </View>
            </>

        );

    }

}





export { BaseWebView };