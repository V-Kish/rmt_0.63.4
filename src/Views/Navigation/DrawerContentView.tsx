import { baseComponentProps, componentPropsWithModel, TypedBaseComponent } from '../../Core/BaseComponent';

import React from 'react';

import { Text, View, Image } from 'react-native';
import { DrawerContentModel } from '../../Models/Navigation/DrawerContentModel';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { HomeScreen } from '../../Screens/HomeScreen';
import { MasterCardScreen } from '../../Screens/MasterCardScreen';
import { FaqScreen } from '../../Screens/FaqScreen';
import { AboutScreen } from '../../Screens/AboutScreen';
import { BlogScreen } from '../../Screens/BlogScreen';
import { ContactUsScreen } from '../../Screens/ContactUsScreen';
import { HelpScreen } from '../../Screens/HelpScreen';
import { STYLES } from '../../Styles/Styles';
import { app } from '../../Core/AppImpl';



type drawerContentViewProps = baseComponentProps & {

};

class DrawerContentView extends TypedBaseComponent<drawerContentViewProps, DrawerContentModel>{

    constructor(props: componentPropsWithModel<drawerContentViewProps, DrawerContentModel>) {
        super(props);

    }

    

    

    render() {

        super.render();

        return(

            <View style={ STYLES.menu.container }>
                <TouchableOpacity style={ STYLES.menu.item } onPress={()=>{
                   app.navigator.navigate(HomeScreen.name)
                }}>
                    <Image style={ STYLES.menu.itemImage } source={require('../../Images/home.png')} />
                    <Text style={ STYLES.menu.itemText }>Головна</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={ STYLES.menu.item } onPress={()=>{
                    app.navigator.navigate(MasterCardScreen.name)
                }}>
                    <Image style={ STYLES.menu.itemImage } source={require('../../Images/mastercard.png')} />
                    <Text style={ STYLES.menu.itemText }>MasterCard Більше</Text>
                </TouchableOpacity>

                <TouchableOpacity style={ STYLES.menu.item } onPress={()=>{
                    app.navigator.navigate(FaqScreen.name)
                }}>
                    <Image style={ STYLES.menu.itemImage } source={require('../../Images/warning.png')} />
                    <Text style={ STYLES.menu.itemText }>Відповіді на запитання</Text>
                </TouchableOpacity>

                <TouchableOpacity style={ STYLES.menu.item } onPress={()=>{
                    app.navigator.navigate(AboutScreen.name)
                }}>
                    <Image style={ STYLES.menu.itemImage } source={require('../../Images/information.png')} />
                    <Text style={ STYLES.menu.itemText }>Про компанію</Text>
                </TouchableOpacity>

                <TouchableOpacity style={ STYLES.menu.item } onPress={()=>{
                    app.navigator.navigate(BlogScreen.name)
                }}>
                    <Image style={ STYLES.menu.itemImage } source={require('../../Images/blog.png')} />
                    <Text style={ STYLES.menu.itemText }>Блог</Text>
                </TouchableOpacity>

                <TouchableOpacity style={ STYLES.menu.item } onPress={()=>{
                    
                    app.navigator.navigate(ContactUsScreen.name)
                }}>
                    <Image style={ STYLES.menu.itemImage } source={require('../../Images/phone.png')} />        
                    <Text style={ STYLES.menu.itemText }>Контакти</Text>
                </TouchableOpacity>

                <TouchableOpacity style={ STYLES.menu.item } onPress={()=>{
                    app.navigator.navigate(HelpScreen.name)
                }}>
                    <Image style={ STYLES.menu.itemImage } source={require('../../Images/question.png')} />
                    <Text style={ STYLES.menu.itemText }>Помощь</Text>
                </TouchableOpacity>

            </View>

        );

    }

}





export { DrawerContentView };