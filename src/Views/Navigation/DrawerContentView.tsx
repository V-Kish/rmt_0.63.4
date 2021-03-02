import { baseComponentProps, componentPropsWithModel, TypedBaseComponent } from '../../Core/BaseComponent';

import React from 'react';

import { View } from 'react-native';
import { DrawerContentModel } from '../../Models/Navigation/DrawerContentModel';

type drawerContentViewProps = baseComponentProps & {};

class DrawerContentView extends TypedBaseComponent<drawerContentViewProps, DrawerContentModel>{

    constructor(props: componentPropsWithModel<drawerContentViewProps, DrawerContentModel>) {
        super(props);

    }

    

    

    render() {

        super.render();

        return(

            <View>

            </View>

        );

    }

}





export { DrawerContentView };