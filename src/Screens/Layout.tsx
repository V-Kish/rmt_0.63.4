import { baseComponentProps, baseScreenProps, componentPropsWithModel, TypedBaseComponent } from '../Core/BaseComponent';

import React from 'react';

import { Text, View } from 'react-native';
import { BaseScreenModel } from '../Core/BaseScreenModel';
import { BaseScreen } from '../Core/BaseScreen';
import { BaseController, baseControllerProps } from '../Controllers/BaseController';
import { MainNavigationLayoutView } from '../Views/Navigation/MainNavigationLayout';

type layoutViewProps = baseComponentProps & {};

class LayoutView<C extends BaseController> extends BaseScreen<C>{

    constructor(props:componentPropsWithModel<baseScreenProps, BaseScreenModel>, controllerImpl: new (props:baseControllerProps) => C) {
        super(props, controllerImpl);
    }

    public header(){
        return (
            <View>
                <MainNavigationLayoutView id={this.controller.mainNav.id} model={this.controller.mainNav} />
            </View>
        ); 
    }
}



export { LayoutView };