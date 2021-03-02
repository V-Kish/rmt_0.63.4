import { baseComponentProps, baseScreenProps, componentPropsWithModel, TypedBaseComponent } from '../Core/BaseComponent';

import React from 'react';

import { Text, View } from 'react-native';
import { BaseScreenModel } from '../Core/BaseScreenModel';
import { BaseScreen } from '../Core/BaseScreen';
import { BaseController, baseControllerProps } from '../Controllers/BaseController';
import { HeaderView } from '../Views/Navigation/HeaderView';


class LayoutView<C extends BaseController> extends BaseScreen<C>{

    constructor(props:componentPropsWithModel<baseScreenProps, BaseScreenModel>, controllerImpl: new (props:baseControllerProps) => C) {
        super(props, controllerImpl);
    }

    public header(){
        return (
            // <View>//app.navigator/header/model
            <HeaderView id={this.controller.mainNav.id} model={this.controller.mainNav} authModal={this.controller.authModal}/>
        ); 
    }
}



export { LayoutView };