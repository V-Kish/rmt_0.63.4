import { baseComponentProps, baseScreenProps, componentPropsWithModel, TypedBaseComponent } from '../Core/BaseComponent';

import React from 'react';

import { BaseScreenModel } from '../Core/BaseScreenModel';
import { BaseScreen } from '../Core/BaseScreen';
import { HeaderView } from '../Views/Navigation/HeaderView';
import { WebViewController, webViewControllerProps } from '../Controllers/WebViewController';
import { AuthModalView } from '../Views/Components/AuthModalView';
import { FooterView } from '../Views/Navigation/FooterView';


class LayoutView<C extends WebViewController> extends BaseScreen<C>{

    constructor(props:componentPropsWithModel<baseScreenProps, BaseScreenModel>, controllerImpl: new (props:webViewControllerProps) => C) {
        super(props, controllerImpl);
    }

    public header(){
        return (
            // <View>//app.navigator/header/model
            <HeaderView id={this.controller.mainNav.id} model={this.controller.mainNav} authModal={this.controller.authModal} userModel={this.controller.user}/>
        ); 
    }
    public footer(){
        return (
            // <View>//app.navigator/header/model
            <FooterView id={this.controller.footerNav.id} model={this.controller.footerNav} />
        ); 
    }
    public authModal(){
        return (
            <AuthModalView {...this.childProps(this.controller.authModal)} />
        );
    }
}



export { LayoutView };